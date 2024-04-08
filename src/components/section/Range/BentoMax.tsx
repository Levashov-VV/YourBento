import classes from "../../App.module.scss";
import Bentomax from "@/Assets/First main/Bento-max.png"
import { Link } from "react-router-dom"

export default function BentoMax(){
  return(
    <>
          <div className={classes.pageProduct}>
        <div className={classes.pageProduct__content}>
          <img className={classes.pageProduct__content__img}src={Bentomax} alt="Bento-max" />
          <div className={classes.pageProduct__text}>
          <div className={classes.pageProduct__text__header}>Бенто-макс</div><br/>
          <div className={classes.pageProduct__text__paragraph}>Примерный вес 1500  грамм<br/>
          Торт рассчитан на 6-8 персон</div>
          <div className={classes.pageProduct__text__paragraph}>Начинки и бисквиты вы можете
          посмотреть нажав на кнопку подробнее</div>
          <div className={classes.pageProduct__text__paragraph}>Декор: мазки, сердечки,
          нарисованные цветочки,  маленькие надписи входят в стоимость.<br/>
          Другой декор рассчитывается индивидуально</div>
          <div className={classes.pageProduct__text__paragraph}> Стоимость: 2500 рублей</div>
          </div>
          <div className={classes.pageProduct__block}>
            <a href="#feedback">
              <button className={classes.pageProduct__block__button}>Заказать</button>
            </a>
              <Link to="/MoreBentoMax">
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