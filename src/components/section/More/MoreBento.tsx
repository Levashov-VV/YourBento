import Logo from "../../../Assets/Logo/Logo.png"
import classes from "../../App.module.scss";
import Bento from "../../../Assets/Bento-cake/Бенто-торт.jpeg"
import Decor from "./Decor";

const MoreBento = () =>{
  return (
    <>
    <div className={classes.MoreBentoMax}>
      <img className={classes.MoreBentoMax__logo}src={Logo} alt="Logo" />
      <div className={classes.MoreBentoMax_text}>
        <div className={classes.MoreBentoMax_text__title}>Бенто-торт</div>
        <div className={classes.MoreBentoMax_text__picture}>
          <img className={classes.MoreBentoMax_text__img}src={Bento} alt="Bento" />
        </div>
      </div>
    </div>
    <div className={classes.felling}>
      <div className={classes.felling__title}>Начинки</div>
      <ul className={classes.felling__list}>
        <li><a>Сникерс(солёная карамель + арахис)</a></li>
        <li><a>Вишня</a></li>
        <li><a>Клубника</a></li>
        <li><a>Банан в карамели</a></li>
        </ul>
    </div>
      <Decor />
    </>
  )
}

export {MoreBento}