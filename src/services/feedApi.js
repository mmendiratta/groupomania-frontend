import { queryClient } from "../App";
import { FEED_URL, getAuthToken, getAccountId, IMGUR_POST_URL } from "../config";

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

const postToImgur = async (file) => {
    const formData = new FormData();

    formData.append('image', file);
    const response = await fetch(`${IMGUR_POST_URL}/image`, {
        method: "POST",
        async: true,
        crossDomain: true,
        headers: {
            "Authorization": "Client-ID 4d412cf949e3299",
        },
        body: formData,
    });
    return response.json();
}

export async function createNewPost(postBody) {
    const imgurData = await postToImgur(postBody.file)
    const authToken = getAuthToken();
    const accountId = getAccountId();

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
            imageId: imgurData.data.id || null
        }),
    });
    if (response && response.ok) {
        queryClient.invalidateQueries();
        return response.json().then((data) => { return data })
    }
};

export async function viewPost(postId) {
    const authToken = getAuthToken();
    const accountId = getAccountId();

    const response = await fetch(`${FEED_URL}/view`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "authorization": authToken
        },
        body: JSON.stringify({
            accountId: accountId,
            postId: postId
        }),
    });
    if (response && response.ok) {
        queryClient.invalidateQueries();
        return response.json().then((data) => { return data })
    }
};

export async function getViewedPosts() {
    const authToken = getAuthToken();

    const response = await fetch(`${FEED_URL}/view`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "authorization": authToken
        }
    });
    if (response && response.ok) {
        return response.json().then((data) => { return data })
    }
}
