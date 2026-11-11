// import { handleError } from "./error.js";
export async function getChannels() {
    try {
        const res = await fetch('https://6af34a88d2377d6c3704d78c.mockapi.io/channels');

        if (!res.ok) {
            throw new Error("Something went wrong!")
        }
        if (res.status === 404) {
            throw new Error("Channels not found!")
        }
        if (res.status === 500) {
            throw new Error("Server error. Please try again later!")
        }
        const data = await res.json();

        return data;
    }
    catch (error) {
        console.log("Error fetching channels", error.message)
        return [];
    }
}