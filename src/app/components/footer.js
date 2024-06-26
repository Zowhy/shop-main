import Image from "next/image";
import style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Image
          src="https://pbs.twimg.com/media/F57AbUGXQAAlRvg.jpg" 
          alt="Logo"
          width={150}
          height={100}
        />
      </div>
      <div className={style.socialLinks}>
        <ul>
          <li>
            <a href="https://instagram.com">
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com">
              <p>Tik Tok</p>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </div>
      <div className={style.description}>
        <p>
          Opium is an American rap record label and collective founded in 2019 by
          American rapper Playboi Carti. The label, based in Atlanta, Georgia,
          currently features four artists, all native to the city; Playboi Carti
          himself, rappers Ken Carson and Destroy Lonely and the duo Homixide
          Gang.
        </p>
      </div>
    </footer>
  );
}
