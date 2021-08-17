import axios from "axios"

const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=20");
        return { success: true, data: res.data };
    } catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}

const getUserById = async (id) => {
    try {
        const res = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return { success: true, data: res.data };
    } catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}

const getTodos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20");
        return { success: true, data: res.data };
    } catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}

const getPhotos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=20");
        return { success: true, data: res.data };
    } 
    catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}

const getPosts = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20");
        return { success: true, data: res.data };
    } 
    catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}


const getComments = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=20");
        return { success: true, data: res.data };
    } 
    catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}


const getAlbums = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums?_limit=20");
        return { success: true, data: res.data };
    } 
    catch (error) {
        console.error("XATOLIK SODIR BO'LDI");
        console.error(error);
        return { success: false };
    }
}


    export { getUsers,getTodos,getPhotos ,getPosts,getComments,getAlbums}