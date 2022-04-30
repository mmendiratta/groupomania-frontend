import { ACCOUNTS_URL, getAccountId, getAuthToken } from "../config";

export function signup({ email, password, firstName, lastName }) {
    return fetch(ACCOUNTS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    });
};

export async function login({ email, password }) {
    return fetch(`${ACCOUNTS_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => {
        if (response && response.status === 200) {
            response.json().then(data => {
                localStorage.setItem("user", JSON.stringify(data));
            });
            return true;
        }
        else return false;
    });
};

export async function deleteAccount() {
    const accountId = getAccountId();
    const authToken = getAuthToken();

    return fetch(`${ACCOUNTS_URL}/${accountId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "authorization": authToken
        },
    }).then((response) => {
        if (response && response.status === 200) {
            response.json().then(data => {
                localStorage.setItem("user", JSON.stringify(data));
            });
            return true;
        }
        else return false;
    });
};
