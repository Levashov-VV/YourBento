import classes from "../App.module.scss";
import Cake from "@/Assets/First main/Bento-max.png"
import Decor from "./Info/Decor";
import Pay from "./Info/Pay";

export default function Info(){
  return (
    <div id="info">
      <div className={classes.block}>
        <span className={classes.block__text}>Дополнительная информация</span>
        <div className={classes.block__line}></div>
      </div>
        <Decor />
        <Pay />
      <div className={classes.rools}>Оформляя заказ, вы соглашаетесь с правилами указаными выше.</div>
      {/* Анимация */}
      <div className={classes.animation}>
      <img src={Cake} alt="cake"/>
      </div>
    </div>
  )
}