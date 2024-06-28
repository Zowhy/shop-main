"use client"
import { useEffect, useState } from "react";
import style from "../styles/main.module.css";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplet, setListComplet] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false);

useEffect( () => { 
  const getProduct = async() => {
    try{
 const response = await fetch("https://fakestoreapi.com/products")
 const data = await response.json(); 
 setListProduct(data);
 setListComplet(data);
  } 
  catch{
    setIsError(true);
  }
}
 getProduct();
  }, []);

const search = (text) => {
  setTextSearch(text);

  if(text.trim() == ""){
    setListProduct(listComplet);
    return
  }
  const newList = listProduct.filter((product) =>
  product.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim()));
  setListProduct(newList);
}




const orderAz = () => {
  const listAux = [...listProduct].sort((a, b) => 
  a.title.localeCompare(b.title) );
  setListProduct(listAux);
}

//Ordernar os produto em ordem alfabetica ao contrario
const orderZa = () =>{
  let listAux = [...listProduct].sort((a, b) =>
  a.title.localeCompare(b.title) );

  listAux = listAux.reverse();
  setListProduct(listAux);
}
const orderPlus = () => {
  const maior = [...listProduct].sort((a, b) => a.price - b.price);
  setListProduct(maior);
}
const orderMenor = () => {
  let menor = [...listProduct].sort((a, b) => a.price - b.price);
menor = menor.reverse();
  setListProduct(menor);
}
if (isError == true){
  return <ErrorFetch />
}

if (listComplet[0] == null) {
  return <Spinner/>
}
  return (
    <>
    <main>
      <div className={style.filter}>
        <div>
          <input type="text" value={textSearch}
          placeholder="Pesquise um Produto"
          onChange={(event)  => search(event.target.value)}/> 
    
       
        </div>
        </div>
        <button onClick={ orderAz }> Az </button>
        <button onClick={ orderZa }> Za </button>
        <button onClick={ orderPlus }> Plus </button>
        <button onClick={ orderMenor }> menor </button>
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