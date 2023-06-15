import axios from "axios";

export const ObtenerTalleres = async () =>{
    const peticion = await axios.get('http://localhost:5000/talleres')
    console.log(peticion.data)
}