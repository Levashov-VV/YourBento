import classes from "../App.module.scss";
import Car from "@/Assets/Svg-picture/Car.svg"
import Map from "@/Assets/Logo/Map.png"
import Text from "./Delivery/text";

export default function Delivery(){
  return(
    <div id="Delevery_rools">
    <div className={classes.block}>
        <span className={classes.block__text}> Доставка и оплата</span>
        <div className={classes.block__line}></div>
      </div>
      <div className={classes.delivery}>
        <div className={classes.delivery__paragraph}>Доставка осуществляется по тарифам такси 
        (Яндекс и inDrive). Доставка ярусных тортов производится мною лично и 
        оплата доставки обговаривается в индивидуальном порядке.
        </div>
        <div className={classes.content}>
          <Text />
          {/* Карта  */}
          {/* <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0247798d837ad99b7f806c8f9d4a6f7b84f66857f4b799f37f2178f050583b00&amp;width=700&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script> */}
          <img className={classes.content__map} src={Map} alt="Map"/>
        </div>
        </div>
    </div>
  )
}