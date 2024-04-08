import classes from "../../App.module.scss";
import Check from "@/Assets/Svg-picture/Check.svg"

export default function Pay(){
  return(
    <>
    <div className={classes.title}>
          <Check className={classes.title__img}/>
          <div className={classes.title__text}>Оплата заказа и его отмена</div>
        </div>
        <div className={classes.infoText}>
          <ul >
            <li className={classes.infoText__list}>Я работаю по 100% предоплате</li>
            <li className={classes.infoText__list}>Заказ не считается подтвержденным, пока он не будет
            полностью оплачен</li>
            <li className={classes.infoText__list}>Отменить заказ можно с полным возвратом в случае,
            если для вашего десерта не был куплен декор и сделаны заготовки. Денежные средства в данном случае
            будут направлены вам на карту, с которой поступил платёж</li>
          </ul>
        </div>
    </>
  )
}