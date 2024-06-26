import Image from "next/image"
import style from "../styles/header.module.css"
import Link from "next/link";

export default function Header() {
    return (
      <header className={style.header}>
        <div className={style.logo}>
          <Image height={150} width={250} src="https://pbs.twimg.com/media/F57AbUGXQAAlRvg.jpg" alt="Logo"/>
          <p className={style.p}>Opium Music, 2024</p>
        </div>
      
      
        <div className={style.actions}>
          <button>Carrinho</button>
          <button>Adicionar Produto</button>
        </div>
      </header>
    );
  }