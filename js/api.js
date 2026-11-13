// import { saveData } from "./storage.js";
import { handleError } from "./error.js";

// import { handleError } from "./error.js";
export async function getChannels() {
    try {
        const res = await fetch('https://6af34a88d2377d6c3704d78c.mockapi.io/channels');
        if (!res.ok) {
            handleError(res)
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error)
        throw error;
    }
}