import classes from "../../App.module.scss";
import BentoImg from "@/Assets/First main/Bento.png"
import Main from "@/components/Main";
import { Routes, Route, Link } from "react-router-dom"
import { Layout } from "@/components/Layout";
import { MoreBento } from "../More/MoreBento";



export default function Bento(){
  return (
    <>
      <div className={classes.pageProduct}>
        <div className={classes.pageProduct__content}>
          <img className={classes.pageProduct__content__img}src={BentoImg} alt="Bento-cake" />
          <div className={classes.pageProduct__text}>
          <div className={classes.pageProduct__text__header}>Бенто-торт </div><br/>
          <div className={classes.pageProduct__text__paragraph}>Примерный вес 400- 450 грамм <br/>
          Торт рассчитан на 1-2 персоны</div>
          <div className={classes.pageProduct__text__paragraph}>Начинки для бенто:<br/>
          Сникерс(солёная карамель + арахис), вишня, клубника, банан в карамели</div>
          <div className={classes.pageProduct__text__paragraph}>Бисквит на выбор:<br/>
          Ванильный, шоколадный, красный бархат<br/>
          Декор: Мазки, сердечки, нарисованные цветочки,  маленькие надписи входят в стоимость.<br/>
          Другой декор рассчитывается индивидуально</div>
          <div className={classes.pageProduct__text__paragraph}> Стоимость: 1200 рублей</div>
          </div>
          <div className={classes.pageProduct__block}>
            <a href="#feedback">
              <button className={classes.pageProduct__block__button}>Заказать</button>
          </a>
              <Link to="/MoreBento">
                <button className={classes.pageProduct__block__button}>
                Подробнее
                </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export {Bento}