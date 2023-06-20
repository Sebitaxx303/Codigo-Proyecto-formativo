import axios from "axios";

//OBTENER TALLERES
export const getUsers = async (state) =>{
    const peticion = await axios.get('http://localhost:5000/users')
    state(peticion.data)
}

//OBTENER MAQUINAS
// export const ObtenerMaquinas = async ()=>{
//     const peticion = await Axios.get('http://localhost:5000/maquinas')
//     console.log(peticion)
// }