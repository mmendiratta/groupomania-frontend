export const ACCOUNTS_URL = "http://localhost:8080/groupomania/accounts/v1";

export const FEED_URL = "http://localhost:8080/groupomania-feed/v1";

export function authHeader () {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user && user.token) {
        return `Bearer ${user.token}`
    }
};