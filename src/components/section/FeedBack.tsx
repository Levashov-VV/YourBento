import classes from "../App.module.scss";
import Leftpart from "./FeedBack/Leftpart";
import Rigthpart from "./FeedBack/Rigthpart";

export default function FeedBack(){
  return (
    <div id="feedback">
      <div className={classes.block}>
        <span className={classes.block__text}> Форма обратной связи</span>
        <div className={classes.block__line}></div>
      </div>
      <div className={classes.feedBack}>
        <Leftpart />
        <Rigthpart />
      </div>
    </div>
  )
}