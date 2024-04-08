import classes from "../../App.module.scss";
import Longline from "@/Assets/First main/Longline.png"
import { Link } from "react-router-dom"


export default function LongLine(){
  return(
    <>
    <div className={classes.pageProduct}>
        <div className={classes.pageProduct__content}>
          <img className={classes.pageProduct__content__img}src={Longline} alt="LongLine" />
          <div className={classes.pageProduct__text}>
          <div className={classes.pageProduct__text__header}>Бисквитные/ярусные торты </div><br/>
          <div className={classes.pageProduct__text__paragraph}>Рассчитывается 150-200 грамм на персону</div>
          <div className={classes.pageProduct__text__paragraph}>Начинки и бисквиты вы можете
          посмотреть нажав на кнопку подробнее</div>
          <div className={classes.pageProduct__text__paragraph}>Декор: мазки, сердечки,
          нарисованные цветочки,  маленькие надписи входят в стоимость.<br/>
          Другой декор рассчитывается индивидуально</div>
          <div className={classes.pageProduct__text__paragraph}> Стоимость:<br/>
          От 2 килограмм - бисквитные/ярусные торты(один ярус) - 1700 рублей за килограмм<br/>
          От 2 килограмм - ярусные (от 2-ух ярусов) - 1800 рублей за килограмм</div>
          </div>
          <div className={classes.pageProduct__block}>
            <a href="#feedback">
              <button className={classes.pageProduct__block__button}>Заказать</button>
            </a>
              <Link to="/MoreLongLine">
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