import axios from "axios";

export default class PostService {
    // дістати список постів
    static async getAll(limit = 10, page=1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        return response;

    }

    // дістати пост за ід
    static async getPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }

    // дістати коментарі поста
    static async getPostCom(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}