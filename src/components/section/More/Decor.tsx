import classes from "../../App.module.scss";

export default function Decor(){
  return (
    <>
      <div className={classes.felling}>
      <div className={classes.felling__title}>Декор</div>
      <div className={classes.decor}> Мазки, сердечки, нарисованные цветочки,  маленькие надписи входят в стоимость.
      Другой декор рассчитывается индивидуально</div>
      </div>
    </>
  )
}