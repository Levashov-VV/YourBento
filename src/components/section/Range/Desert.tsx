import classes from "../../App.module.scss";
import desert from "@/Assets/First main/Desert.png"
import { Link } from "react-router-dom"


export default function Desert(){
  return(
    <>
    <div className={classes.pageProduct}>
        <div className={classes.pageProduct__content}>
          <img className={classes.pageProduct__content__img}src={desert} alt="Desert" />
          <div className={classes.pageProduct__text}>
          <div className={classes.pageProduct__text__header}>Десерты</div><br/>
          <div className={classes.pageProduct__text__paragraph}>Капкейки можно заказать в коробочках 4/6/9  штук.<br/>
          Большее количество будет собрано в несколько коробочек<br/>
          Эскимо собирается в коробочки по 4 штуки. Большее количество
          будет собрано в несколько коробочек<br/>
          Cake to go собирается в коробочки по 2 штуки. Большее количество будет собрано в несколько коробочек<br/>
          В стоимость декора входит: кондитерская посыпка и бусины</div>
          <div className={classes.pageProduct__text__paragraph}> Стоимость:<br/>
          Капкейки - 250 рублей/шт от 4 штук<br/>
          Эскимо - 180/шт от 4 штук<br/>
          Cake to go - 500 рублей/шт от 2 штук</div>
          </div>
          <div className={classes.pageProduct__block}>
            <a href="#feedback">
              <button className={classes.pageProduct__block__button}>Заказать</button>
            </a>
              <Link to="/MoreDesert">
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