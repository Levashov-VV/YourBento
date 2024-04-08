import Range from "./section/Range";
import MyResult from "./section/MyResult";
import Delivery from "./section/Delivery";
import Info from "./section/Info";
import FeedBack from "./section/FeedBack";

export default function Main(){
  return (
    <main>
      <Range />
      <MyResult />
      <Delivery />
      <Info />
      <FeedBack />
    </main>
  )
}