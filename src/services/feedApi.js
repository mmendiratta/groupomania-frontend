import { FEED_URL, getAuthToken, getAccountId } from "../config";

export async function getAllFeed() {
    const authToken = getAuthToken();

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

export async function createNewPost(postBody) {
    const authToken = getAuthToken();
    const accountId = getAccountId();
    console.log(authToken)

    const response = await fetch(FEED_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "authorization": authToken
        },
        body: JSON.stringify({
            accountId: accountId,
            title: postBody.title,
            textBody: postBody.body,
            imageId: postBody.imageId || null
        }),
    });
    if (response && response.ok) {
        return response.json().then((data) => { return data })
    }
};