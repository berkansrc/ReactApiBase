import { PostParam } from "../types/post";
import { UserParam } from "../types/users";

const API_URL = "https://jsonplaceholder.typicode.com/";
export const fetchUsers = async (): Promise<UserParam[]> => {
    try {
        const response = await fetch(`${API_URL}/users`);

        const data: UserParam[] = await response.json();
        return data
    } catch (error) {
        console.log("Api Hatası:", error);
        return []
    }
}

export const fetchUserPost = async (userId: number): Promise<PostParam[]> => {
    try {
        const response = await fetch(`${API_URL}/posts?userid=${userId}`)
        return await response.json()
    } catch (error) {
        console.log("Api Hatası:", error);
        return []
    }
}