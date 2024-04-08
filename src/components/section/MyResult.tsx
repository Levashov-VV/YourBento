import classes from "../App.module.scss";
import slider1 from "@/Assets/First main/MyWork/Slider/Slider1.jpeg"
import slider2 from "@/Assets/First main/MyWork/Slider/Slider2.jpeg"
import slider3 from "@/Assets/First main/MyWork/Slider/Slider3.jpeg"
import slider4 from "@/Assets/First main/MyWork/Slider/Slider4.jpeg"
import slider5 from "@/Assets/First main/MyWork/Slider/Slider5.jpeg"
import slider6 from "@/Assets/First main/MyWork/Slider/Slider6.jpeg"

export default function MyResult(){
  return (
    <div id="myresult">
      <div className={classes.block}>
        <span className={classes.block__text}>Мои работы</span>
        <div className={classes.block__line}></div>
        <div className={classes.block__slider}>
          <img className={classes.block__img} src={slider1} alt="slider"/>
          <img className={classes.block__img} src={slider2} alt="slider"/>
          <img className={classes.block__img} src={slider3} alt="slider"/>
          <img className={classes.block__img} src={slider4} alt="slider"/>
          <img className={classes.block__img} src={slider5} alt="slider"/>
          <img className={classes.block__img} src={slider6} alt="slider"/>
        </div>
      </div>

    </div>
  )
}