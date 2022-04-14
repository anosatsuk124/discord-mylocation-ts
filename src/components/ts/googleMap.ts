
import { getCurrentPositionPromise } from "./getCurrentPosition";

export const googleMapUrl = async (): Promise<string> => {
    const endpoint: string = "http://maps.google.co.jp/maps";
    const position = await getCurrentPositionPromise;
    const url = `${endpoint}?ll=${position![0]},${position![1]}&q=loc:${position![0]},${position![1]}&output=embed&t=m&z=17`;
    const encodedURL = encodeURI(url);
    return encodedURL;
};
