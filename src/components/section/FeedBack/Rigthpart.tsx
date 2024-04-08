import classes from "../../App.module.scss";
import Docs from "@/Assets/Svg-picture/document.svg"

export default function Rigthpart(){
  return(
    <>
            <div className={classes.feedBack__rigthpart}>
          <div className={classes.feedBack__rigthpart__content}>
            <div>
              <div className={classes.feedBack__leftpart__text}>Опишите ваш заказ</div>
              <textarea className={classes.feedBack__rigthpart__textarea}></textarea>
              <div>
              </div>
            </div>
          </div>
            <button className={classes.feedBack__rigthpart__text}>Отправить</button>
          <div className={classes.feedBack__rigthpart__content}>
              <input type="checkbox" className={classes.feedBack__rigthpart__checkbox} />
            <div className={classes.feedBack__rigthpart__text}>Согласие на обработку персональных данных</div>
            <button className={classes.feedBack__rigthpart__btn}>
              <Docs className={classes.feedBack__rigthpart__img}/>
            </button>
          </div>
        </div>
    </>
  )
}