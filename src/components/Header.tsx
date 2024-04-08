import classes from "./App.module.scss";
import logo from "@/Assets/Logo/Logo.png"

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} width={60} height={60}/>
        <span className={classes.header__number}>+7-988-494-03-73</span>
      </div>
      <div className={classes.header__name}>
        <button className={classes.header__name__button}>YourBento</button>
      </div>
      <a href="#feedback">
        <button className={classes.header__button}>Заказать</button>
      </a>
        
    </header>
  )
}
