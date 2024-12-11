import Libro from "./Libro.ts"
import { Box } from "@mui/material"
import Card from '@mui/material/Card'; 
const libros:Libro[] = [
    {
        titulo:"cien a;os de soledad",
        autor:"gabriel garcia marquez"
    },
    {
        titulo:"akelarre",
        autor:"mario mendoza"
    },
    {
        titulo:"el amor en tiempos de colera",
        autor:"gabriel garcia marquez"
    }
]

const miEstilo = {
    backgroundColor:"#999",
    color:"white",
    padding:"10px",
    margin:"10px",
    borderRadius:"10px"
}

const ListaLibros = ()=>{
    return(
        <>
        <Box sx={{display:"flex"}}>
             {libros.map((libro:Libro)=>{
                 return(
                     <Box> 
                        <Card sx={miEstilo}>
                        <h2>{libro.titulo}</h2>
                        <p>{libro.autor}</p>
                        </Card>
                    </Box>
                )
            })}
        </Box>
        </>
    )
}

export default ListaLibros

