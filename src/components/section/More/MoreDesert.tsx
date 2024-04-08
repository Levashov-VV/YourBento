import Logo from "../../../Assets/Logo/Logo.png"
import classes from "../../App.module.scss";
import Desert from "../../../Assets/Desert/Desert.jpeg"
import Decor from "./Decor";

const MoreDesert = () =>{
  return (
    <>
    <div className={classes.MoreBentoMax}>
      <img className={classes.MoreBentoMax__logo}src={Logo} alt="Logo" />
      <div className={classes.MoreBentoMax_text}>
        <div className={classes.MoreBentoMax_text__title}>Десерты</div>
        <div className={classes.MoreBentoMax_text__picture}>
          <img className={classes.MoreBentoMax_text__img}src={Desert} alt="Desert" />
        </div>
      </div>
    </div>
    <div className={classes.felling}>
      <div className={classes.felling__title}>Разновидности десертов</div>
      <ul className={classes.felling__list}>
        <li><a>СКапкейки можно заказать в коробочках 4/6/9  штук.
        Большее количество будет собрано в несколько коробочек</a></li>
        <li><a>Эскимо собирается в коробочки по 4 штуки. Большее
        количество будет собрано в несколько коробочек</a></li>
        <li><a>Cake to go собирается в коробочки по 2 штуки.
        Большее количество будет собрано в несколько коробочек</a></li>
        </ul>
    </div>
    <div className={classes.felling}>
      <div className={classes.felling__title}>Декор</div>
      <div className={classes.decor}>В стоимость декора входит: кондитерская посыпка и бусины.</div>
      </div>
    </>
  )
}

export {MoreDesert}