import { authHeader, FEED_URL } from "../config";

export function getAllFeed () {
    const authToken = authHeader();
    return fetch(FEED_URL, {
        method: "GET",
        headers: {
            "authorization": authToken
        }
    });
};