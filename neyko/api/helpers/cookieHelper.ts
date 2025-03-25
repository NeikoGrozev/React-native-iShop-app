import CookieManager from "@react-native-cookies/cookies";
import cookieParser from 'set-cookie-parser';
import { DEMANDWARE_SITE_URL } from "../../constants/urls";

export const setCookies = async (response: Response) => {
    await clearCookies();
    const headerCookies = response.headers.get('Set-Cookie') ?? '';
    const cookies = cookieParser.splitCookiesString(headerCookies);

    await Promise.all(
        cookies.map((cookie: string) =>
            CookieManager.setFromResponse(DEMANDWARE_SITE_URL, cookie)
        )
    );
    await CookieManager.flush();
};

export const clearCookies = async () => {
    await CookieManager.clearAll();
    await CookieManager.flush();
};