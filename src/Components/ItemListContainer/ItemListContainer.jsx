import React from "react";
import Card from "./Card";
import "../ItemListContainer/ItemListContainercss.css";



function ItemLisContainer() {
    return(
        <div>
            <h1>Articulos</h1>
        <div className="tarjetas">
            <Card price={150} title="Libro Js" detail="Nuevo sin uso" img="https://http2.mlstatic.com/D_NQ_NP_920687-MLA31024027949_062019-O.webp" />
            <Card price={100} title="Libro Js" detail="Usado" img="https://http2.mlstatic.com/D_NQ_NP_653972-MLA30106327278_042019-O.webp" />
            <Card price={200} title="Libro HTML-CSS-Js" detail="Nuevo sin uso" img="https://http2.mlstatic.com/D_NQ_NP_644422-MLA31035529523_062019-V.webp" />
        </div>
        </div>
            
    )
    
};

export default ItemLisContainer;