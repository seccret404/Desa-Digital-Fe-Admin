import {delLocal, getLocal} from "../storage/local.ts"
import { writeLocal } from "../storage/local.ts";

export const getAccessToken = () => {
    return getLocal("access_token");
}

export const writeAccessToken = (accessToken: string) => {
    writeLocal("access_token", accessToken);
}

export const deleteAccessToken = () => {
    delLocal("access_token")
}
