import { encode } from 'base-64'
import * as Keychain from "react-native-keychain";
import demandwareClient from '../modules/demandwareClient';
import { setCookies } from './cookieHelper';
import { LoginProps } from '../../interface/LoginProps';
import { OCAPI_INSTANCE_HOST, OCAPI_SITE, OCAPI_VERSION } from '../config';

const baseUrl = `${OCAPI_INSTANCE_HOST}${OCAPI_SITE}/dw/shop/${OCAPI_VERSION}`;
const customersUrl = `${baseUrl}/customers`;
const sessionUrl = `${baseUrl}/sessions`;

type UserData = {
    "customer": {
        "login": string,
        "email": string,
        "first_name": string,
        "last_name": string
    },
    "password": string
};

export const registrationUser = async (data: UserData) => {
    const accessToken = await getAccessToken();
    const additionalHeaders = {
        Authorization: accessToken || ''
    };

    return demandwareClient.post(customersUrl, data, additionalHeaders);
};

export const loginUser = async (username: string, password: string) => {
    const url = `${customersUrl}/auth`;
    const data = {
        "type": "credentials"
    };

    const additionalHeaders = {
        Authorization: `Basic ${encode(`${username}:${password}`)}`
    };

    return demandwareClient.post(url, data, additionalHeaders);
};

const getAccessToken = async () => {
    const url = `${customersUrl}/auth`;
    const data = {
        "type": "guest"
    };
    const additionalHeaders = {
        Authorization: ''
    };

    const response = await demandwareClient.post(url, data, additionalHeaders);

    return response.headers.get('authorization');
};

export const validateCustomer = (input: unknown) => {
    if (typeof input !== 'object') throw new Error('Invalid input');
    if (input === null) throw new Error('Invalid input');
    if (!('firstName' in input) || typeof input.firstName !== 'string') throw new Error('Invalid firstName');
    if (!('lastName' in input) || typeof input.lastName !== 'string') throw new Error('Invalid lastName');
    if (!('email' in input) || typeof input.email !== 'string') throw new Error('Invalid email');
    if (!('password' in input) || typeof input.password !== 'string') throw new Error('Invalid password');
};

export const getCredentials = async () => {
    return await Keychain.getGenericPassword();
};

export const setCredentials = async (credentials: LoginProps) => {
    await Keychain.setGenericPassword(credentials.username, credentials.password);
};

export const authenticateUser = async (token: string) => {
    const additionalHeaders = {
        Authorization: token
    };

    try {
        const response = await demandwareClient.post(sessionUrl, {}, additionalHeaders);
        await setCookies(response);
    } catch (error) {
        console.log(error);
    }
};