import classes from "../../App.module.scss";
import Car from "@/Assets/Svg-picture/Car.svg"

export default function Text(){
  return(
    <>
    <div className={classes.content__text}>
              <div className={classes.delivery__text}>Доставка осуществляется в интервале 
              с 10:00 до 22:00.</div>
              <div className={classes.delivery__header}>Самовывоз:</div>
              <div className={classes.delivery__text}>Вы можете забрать свой заказ самостоятельно 
              с 10:00 до 22:00. <br/>Другое время обговаривается индивидуально.</div>
              <div className={classes.delivery__header}>Адрес:</div>
              <div className={classes.delivery__text}>г. Волгоград, улица Волгоградская 1/6, 
              подъезд 7, кв.219</div>
              <div>
                <div className={classes.delivery__text__title}>
                  <Car className={classes.car}/>
                  <div className={classes.delivery__text}>Правила доставки заказа</div>
                </div>
                <div>
                  <ul>
                    <li className={classes.delivery__text}>Составление интервалов отправки и места получения
                    заказа должно быть обговоренно не менее чем за 24 часа</li>
                    <li className={classes.delivery__text}>В случае если вы не можете забрать торт самовывозом, 
                    возможно оформление доставки как с моей, так и с вашей стороны
                    (по выбору клиента)</li>
                    <li className={classes.delivery__text}>Оплата доставки производится либо
                    до передачи заказа курьеру, либо оплата производится непосредственно при получение заказа.</li>
                    <li className={classes.delivery__text}>Отменить доставку заказа после передачи его курьеру или
                    перенести время доставки нельзя</li>
                    <li className={classes.delivery__text}>В случае, если я не могу с вами связаться
                    в назначенное время отправления заказа, его отправление будет остановленно и согласовано
                    с вами в индивидуальном порядке
                    </li>
                    <li className={classes.delivery__text}>В случае, если курьер не может с вами связаться, в момент
                    доставки заказа, он будет ожидать установленное время, после
                    чего ваш заказ будет возвращён обратно и его доставка будет
                    обговариваться в индивидуальном порядке.</li>
                  </ul>
                </div>
              </div>
            </div>
    </>
  )
}