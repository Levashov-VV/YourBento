import classes from "../App.module.scss";
import Bento from "./Range/Bento"
import MiniCake from "./Range/MiniCake";
import Bentomax from "./Range/BentoMax";
import LongLine from "./Range/Longline";
import Desert from "./Range/Desert";

export default function Range(){
  return(
    <>
      <div className={classes.block}>
        <span className={classes.block__text}> Ассортимент</span>
        <div className={classes.block__line}></div>
      </div>
      <Bento />
      <MiniCake />
      <Bentomax />
      <LongLine />
      <Desert />
    </>
  )
}