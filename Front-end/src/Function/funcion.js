import axios from "axios";
import React, { useEffect, useState } from 'react'

//OBTENER TALLERES
export const getUsers = async (state) =>{
    const peticion = await axios.get('http://localhost:3001/users/')
    state(peticion.data)
}
//postear talleres
const baseURL = "http://localhost:3001/users"
export default function App() {
const {post, setpost} = useState(null);

useEffect(() => {
    axios.get(baseURL).then((response) => {
        setpost(response.data)
    });
},[setpost] );
function createPost(){
axios
.post(baseURL, {
    company_name: 'secasd',
    rut: '12341234',
    u_address: 'asdfasdf',
    email: 'asdfasdf',
    phone_number: '4046',
    user_type: 'taller',
})
.then((response) => {
    setpost(response.data)
});
}
if (!post) return "No post!"
return(
    <div>
        <p>{post.company_name}</p>
        <p>{post.rut}</p>
        <p>{post.u_address}</p>
        <p>{post.email}</p>
        <p>{post.phone_number}</p>
        <p>{post.user_type}</p>
        <button onClick={createPost}create post></button>

    </div>
);
}
