import classes from "../../App.module.scss";
import Bag from "@/Assets/Svg-picture/paper-bag.svg"

export default function Decor(){
  return(
    <>
      <div className={classes.title}>
          <Bag  className={classes.title__img}/>
          <div className={classes.title__text}>Оформление</div>
        </div>
        <div className={classes.infoText}>
          <ul >
            <li className={classes.infoText__list}>Сделать идентичный дизайн 1 в 1 невозможно,
            так как все декоры выполняются в ручную, но я сделаю всё возможное, чтобы оригинал
            был схож с референсом.</li>
            <li className={classes.infoText__list}>При оформление декора используются пищевые красители,
            которые могут покрасить ваши губы и язык.</li>
            <li className={classes.infoText__list}>При оформление заказа просьба учитывать,
            что срок годности бисквитных тортиков составляет 72 часа.</li>
          </ul>
        </div>
    </>
  )
}