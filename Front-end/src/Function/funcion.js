import axios, { Axios } from "axios";

//OBTENER TALLERES
export const ObtenerTalleres = async () =>{
    const peticion = await axios.get('http://localhost:5000/talleres')
    console.log(peticion.data)
}

//OBTENER MAQUINAS
export const ObtenerMaquinas = async ()=>{
    const peticion = await Axios.get('http://localhost:5000/maquinas')
    console.log(peticion)
}