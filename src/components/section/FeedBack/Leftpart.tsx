import classes from "../../App.module.scss";
import CalendarImg from "@/Assets/Svg-picture/calendar.svg"
import Calendar from "./Calendar/Calendar"

export default function Leftpart(){
  return(
    <>
    <div className={classes.feedBack__leftpart}>
          <div className={classes.feedBack__leftpart__text}>Фамилия Имя Отчество</div>
            <input className={classes.feedBack__leftpart__input}></input>
          <div className={classes.feedBack__leftpart__text}>Телефон</div>
          <input className={classes.feedBack__leftpart__input}/>
          <div className={classes.feedBack__leftpart__text}>Примеры фотографий вашего заказа</div>
          <input className={classes.feedBack__leftpart__file} name="yourFile" type="file"></input>
          <div className={classes.feedBack__leftpart__Date}>
          <div className={classes.feedBack__leftpart__text}>Выберите дату доставки вашего заказа</div>
          <button className={classes.feedBack__leftpart__img}>
          <CalendarImg className={classes.feedBack__leftpart__img} />
          </button>
          {/* <Calendar />  */}
          </div>
        </div>
    </>
  )
}