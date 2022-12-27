import { useContext } from "react";
import CategoriaContext from "../context/CategoriasProvider";


const useCategorias = () => {
    return useContext(CategoriaContext)
}


export default useCategorias