// import axios from "axios";
// import { writeFile } from "fs/promises";

// const TEMP_JSON = '../datas/users.json';

// // const userService = axios.create({baseURL: TEMP_JSON})

// // userService.interceptors.request.use(
// //     (config) => console.log('config ->', config), // before send request
// //     (err) => Promise.reject(err) // if error
// // )
// // userService.interceptors.response.use(
// //     (response) => console.log('response ->', response.data),
// //     (err) => Promise.reject(err)
// // )

export const logOn = (objUser) => {
    try{
        // axios.post(TEMP_JSON, JSON.stringify(objUser))
        // writeFile(TEMP_JSON, JSON.stringify(obj))
    } catch(e){
        // console.log(e)
    } 
}