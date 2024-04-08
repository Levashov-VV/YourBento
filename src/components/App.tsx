import Main from "./Main"
import {Routes, Route, Link} from "react-router-dom"
import { Layout } from "./Layout"
import { MoreBento } from "./section/More/MoreBento";
import { MoreMiniCake } from "./section/More/MoreMiniCake"
import { MoreBentoMax } from "./section/More/MoreBentoMax"
import { MoreLongLine } from "./section/More/MoreLongline"
import { MoreDesert } from "./section/More/MoreDesert"

export const App = () =>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="MoreBento" element={<MoreBento />}></Route>
        <Route path="MoreMiniCake" element={<MoreMiniCake />}></Route>
        <Route path="MoreBentoMax" element={<MoreBentoMax />}></Route>
        <Route path="MoreLongLine" element={<MoreLongLine />}></Route>
        <Route path="MoreDesert" element={<MoreDesert />}></Route>
        </Route>
      </Routes>
    </div>
  )
};

export default App