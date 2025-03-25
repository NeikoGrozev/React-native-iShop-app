import { LoginProps } from "../../interface/LoginProps";
import { RegistrationProps } from "../../interface/RegistrationProps";
import { setCookies } from "../helpers/cookieHelper";
import { getCredentials, loginUser, registrationUser, setCredentials, validateCustomer } from "../helpers/userHelper";

export const registration = async (user: RegistrationProps): Promise<{ username: any; token: string } | { error: string }> => {
    try {
        validateCustomer(user);

        const userData = {
            "customer": {
                "login": user.email,
                "email": user.email,
                "first_name": user.firstName,
                "last_name": user.lastName
            },
            "password": user.password
        };

        const responseRegistrationData = await registrationUser(userData);
        const data = await responseRegistrationData.json();

        if (data.fault) {
            throw new Error(data.fault.message);
        }

        const token = responseRegistrationData.headers.get('authorization') || '';
        const response = {
            username: data.login,
            token
        };

        const userCredentials = {
            username: user.email,
            password: user.password
        };
        await setCredentials(userCredentials);
        await setCookies(responseRegistrationData);

        return response;
    } catch (error) {
        console.log(error);
        return { error: 'Failed to fetch user registration!' };
    }
};

export const login = async (userData: LoginProps) => {
    const { username, password }: { username?: string, password?: string } = userData;

    if (!username || !password) {
        return { error: 'Missing user parameter' };
    }

    try {
        const responseLoginData = await loginUser(username, password);
        const data = await responseLoginData.json();

        if (data.fault) {
            throw new Error(data.fault.message);
        }

        const token = responseLoginData.headers.get('authorization') || '';
        const response = {
            username: data.login,
            token
        };

        await setCredentials(userData);
        await setCookies(responseLoginData);

        return response;
    } catch (error) {
        console.log('Server error:', error);
        return { error: 'Failed to fetch user login!' };
    }
};

export const reLoginUser = async () => {
    const credentials = await getCredentials();

    if (credentials) {
        await login(credentials);
    }
};