export const ACCOUNTS_URL = "http://localhost:8080/groupomania/accounts/v1";

export const FEED_URL = "http://localhost:8080/groupomania-feed/v1";

export const IMGUR_URL = "https://api.imgur.com/3";

export function getAuthToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return `Bearer ${user.token}`
    }
};

export function getAccountId() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user && user.userId) {
        return user.userId;
    }
};

export function removeUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        localStorage.removeItem(user);
        return true;
    }
};