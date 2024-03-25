
import axiosClient from "./axiosClient";

const userApi={
    getAll(){
        const url = '/Users'
        return axiosClient.get(url);
    },
    getById(id){
        const url = `/Users/${id}`
        return axiosClient.get(url,id);

    },
    postUser({FirstName,LastName,UserName,Password}){
        const url = '/SignUp';
        return axiosClient.post(url ,{FirstName,LastName,UserName,Password});
    },
    updateUser(){

    },
    deleteUser(){

    },
    login({UserName,Password}){
        const url =`/Users/${UserName}/${Password}`;
        return axiosClient.get(url);

    },
    addCartToUser({userId,productId,quantity})
    {
        const url = '/addcarttouser';
        return  axiosClient.post(url,{userId,productId,quantity})
    }
     
}
export default userApi;