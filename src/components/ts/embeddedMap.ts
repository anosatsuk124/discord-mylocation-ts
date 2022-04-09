import { getCurrentPositionPromise } from "./getCurrentPosition";
import  dotenv from "dotenv";
dotenv.config();

const endpoint: string = "https://maps.googleapis.com/maps/api/staticmap";

export const MapUrl = async (endpoint: string): Promise<string> => {
    const API_KEY = process.env.GOOGLE_API;
    const position = await getCurrentPositionPromise;
    const url = `${endpoint}?markers=${position![0]},${
        position![1]
    }&key=${API_KEY}&size=600x450`;
    const encodedURL = encodeURI(url);
    return encodedURL;
};
