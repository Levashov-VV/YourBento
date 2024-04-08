import classes from "../../App.module.scss";
import Minicake from "@/Assets/First main/MiniCake.png"
import { Link } from "react-router-dom" 

export default function MiniCake(){
  return(
    <>
    <div className={classes.pageProduct}>
        <div className={classes.pageProduct__content}>
          <img className={classes.pageProduct__content__img}src={Minicake} alt="MiniCake" />
          <div className={classes.pageProduct__text}>
          <div className={classes.pageProduct__text__header}>Mini Cake </div><br/>
          <div className={classes.pageProduct__text__paragraph}>Примерный вес  1000 грамм <br/>
          Торт рассчитан на 4-6 персоны</div>
          <div className={classes.pageProduct__text__paragraph}>Начинки и бисквиты вы можете 
          посмотреть нажав на кнопку подробнее</div>
          <div className={classes.pageProduct__text__paragraph}>Декор: мазки, сердечки,
          нарисованные цветочки,
          маленькие надписи входят в стоимость.<br/>
          Другой декор рассчитывается индивидуально</div>
          <div className={classes.pageProduct__text__paragraph}> Стоимость: 2000 рублей</div>
          </div>
          <div className={classes.pageProduct__block}>
            <a href="#feedback">
              <button className={classes.pageProduct__block__button}>Заказать</button>
            </a>
              <Link to="/MoreMiniCake">
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