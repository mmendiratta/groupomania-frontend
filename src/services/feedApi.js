import { authHeader, FEED_URL } from "../config";

export async function getAllFeed() {
    const authToken = authHeader();

    const response = await fetch(FEED_URL, {
        method: "GET",
        headers: {
            "authorization": authToken
        }
    });
    if (response && response.ok) {
        return response.json().then((data) => { return data })
    }
};