import React, { Component } from "react";


interface Props{
    texto:string;
  }

class Parrafo extends Component{

 constructor(props:Props){ 
    super(props);
    console.log("componente creado")
 }

 componentDidMount(): void {
   console.log("componente montado")
 }

 componentDidUpdate(): void {
   console.log("componente actualizado")
 }

 componentWillUnmount(): void {
   console.log("componente desmontado")
 }

 render(){
  console.log("componente renderizado")
    return(
        <p>{this.props.texto}</p>
    )
 }
 

}

export default Parrafo;