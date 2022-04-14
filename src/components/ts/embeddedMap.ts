import { getCurrentPositionPromise } from "./getCurrentPosition";

export const staticMapUrl = async (): Promise<string> => {
    const endpoint: string = "https://maps.googleapis.com/maps/api/staticmap";
    const API_KEY = ""; // Support ...
    const position = await getCurrentPositionPromise;
    const url = `${endpoint}?markers=${position![0]},${
        position![1]
    }&key=${API_KEY}&size=600x450`;
    const encodedURL = encodeURI(url);
    return encodedURL;
};
