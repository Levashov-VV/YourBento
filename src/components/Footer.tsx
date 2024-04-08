import classes from "./App.module.scss";
import logo from "@/Assets/Logo/Logo.png"
import Telegram from "@/Assets/Svg-picture/telegram.svg"
import WhatsApp from "@/Assets/Svg-picture/whatsapp.svg"
import Instagram from "@/Assets/Svg-picture/instagram.svg"
import Telephone from "@/Assets/Svg-picture/phone.svg"

export default function Footer(){
  return(
    <>
    <div className={classes.footer}>
      <div className={classes.footer__address}>
        <div>Адрес</div>
        <div>г.Волгоград,<br/> ул. Волгоградская 1/6,<br/>7 подъезд, кв 219</div>
      </div>
      <div className={classes.footer__range}>
        <button className={classes.footer__button}><a href="">Ассортимент</a></button>
        <button className={classes.footer__button}><a href="#myresult">Мои работы</a></button>
        <button className={classes.footer__button}><a href="#Delevery_rools">Доставка</a></button>
      </div>
        <img className={classes.footer__logo} src={logo} alt="Logo"/>
      <div className={classes.footer__info}>
        <button className={classes.footer__button}><a href="#info">Дополительная информация</a></button>
        <button className={classes.footer__button}><a href="#feedback">Форма обратной связи</a></button>
      </div>
      <div className={classes.footer__social}>
        <div>Со мной можно связаться</div>
        <div className={classes.footer__social__img}>
          <button className={classes.footer__social__btn}>
          <Telegram className={classes.footer__social__svg} />
          </button>
          <button className={classes.footer__social__btn}>
          <WhatsApp className={classes.footer__social__svg} />
          </button>
          <button className={classes.footer__social__btn}>
          <Instagram className={classes.footer__social__svg} />
          </button>
          <button className={classes.footer__social__btn}>
          <Telephone className={classes.footer__social__svg} />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}