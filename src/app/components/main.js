"use client"
import { useEffect, useState } from "react";
import style from "../styles/main.module.css";
import Spinner from "./Spinner";

export default function Main() {

  const [listProduct, setProduct] = useState([]);

useEffect( () => { 
  const getProduct = async() => {
 const response = await fetch("https://fakestoreapi.com/products")
 const data = await response.json(); 
 setProduct(data);
  }
 getProduct();
  }, []);


if (listProduct [0] == null) {
  return <Spinner/>
}

const orderAz = () => {
  const listAux = [...listProduct].sort((a, b) => 
  a.title.localeCompare(b.title) );
  setProduct(listAux);
}

//Ordernar os produto em ordem alfabetica ao contrario
const orderZa = () =>{
  let listAux = [...listProduct].sort((a, b) =>
  a.title.localeCompare(b.title) );

  listAux = listAux.reverse();
  setProduct(listAux);
}
const orderPlus = () => {
  const maior = [...listProduct].sort((a, b) => a.price - b.price);
  setProduct(maior);
}
const orderMenor = () => {
  let menor = [...listProduct].sort((a, b) => a.price - b.price);
menor = menor.reverse();
  setProduct(menor);
}
  return (
    <>
    <main>
      <div className={style.filter}>
        <div>
        <button onClick={ orderAz }> Az </button>
        <button onClick={ orderZa }> Za </button>
        <button onClick={ orderPlus }> Plus </button>
        <button onClick={ orderMenor }> menor </button>
        </div>
      </div>
      <div className={style.grid}>
        {listProduct.map((produto) => (
          <div key={produto.id} className={style.pprt}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} className={style.imagem} />
            <p>Price: R${produto.price}</p>
            <p>{produto.description}</p>
            <p>Category: {produto.category}</p>
            <p>Rating: {produto.rating.count}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}