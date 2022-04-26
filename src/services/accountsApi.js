import { ACCOUNTS_URL } from "../config";

export function signup ({ email, password, firstName, lastName }) {
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

export async function login ({ email, password }) {
    fetch(`${ACCOUNTS_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => {
        if (response) {
            response.json().then(data => { 
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data));
            });
        }
        return response.data;
     });
}