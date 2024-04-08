import Logo from "../../../Assets/Logo/Logo.png"
import FellingFirst from "../../../Assets/Fillings/Начинки1.jpeg"
import FellingSecond from "../../../Assets/Fillings/Начинки2.jpeg"
import Felling from "./Feeling";
import Decor from "./Decor";
import classes from "../../App.module.scss";
import LongLine from "../../../Assets/Longline/Longline.jpeg"


const MoreLongLine = () =>{
  return (
    <>
    <div className={classes.MoreBentoMax}>
      <img className={classes.MoreBentoMax__logo}src={Logo} alt="Logo" />
      <div className={classes.MoreBentoMax_text}>
        <div className={classes.MoreBentoMax_text__title}>Бисквитные/ярусные торты</div>
        <div className={classes.MoreBentoMax_text__picture}>
          <img className={classes.MoreBentoMax_text__img}src={FellingFirst} alt="Начинки первая страница" />
          <img className={classes.MoreBentoMax_text__img}src={LongLine} alt="LongLine" />
          <img className={classes.MoreBentoMax_text__img}src={FellingSecond} alt="Начинки вторая страница" />
        </div>
      </div>
    </div>
    <Felling />
    <Decor />
    </>
  )
}

export {MoreLongLine}