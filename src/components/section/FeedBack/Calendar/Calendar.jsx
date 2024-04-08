import React from "react"
import classNames from "classnames";
import classes from "../../../App.module.scss";
import * as calendar from "./index"
import { render } from "react-dom";


export default function Calendar(){
  
  const {data, years, monthNames, weekDayNames, onChange} ={
    data: new Date(),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    onChange:Function.prototype
  };
  const {date, currentDate, selectedDate} = {
    date: data,
    currentDate: new Date(),
    selectedDate: null
  };
  const monthData = calendar.getMonthData(year, month)
  function year(){
    return date.getFullYear()
  }
  function month(){
    return date.getMonth()
  }
  function day(){
    return date.getDate();
  }
  const handlePrevMonthButtonClick = () =>{
    const date = new Date().setDate(year(), month() - 1)
    setState({ date });
  };
  const handleNextMonthButtonClick = () =>{
    const date = new Date().setDate(year(), month() + 1)
    setState({ date });
  };
  const handleSelectChange = () => {
    const year = yearSelect.value;
    const mouth = monthSelect.value;
    const date = new Date(year, month);

    setState({ date })
  };
  const handleDayClick = date =>{
    setState({selectedDate: date})

    onChange(date)
  }
  return(
    <>
  <div className={classes.calendar}>
    <header>
      <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
      <select
      ref={element => monthSelect = element}
      value={month}
      onChange={handleSelectChange}>
        {monthNames.map((name, index) =>
          <option key={name} value={index}>{name}</option>
        )}
      </select>
      <select
      ref={element => yearSelect = element}
      value={year}
      onChange={handleSelectChange}>
        {years.map((year) =>
        <option key={year} value={year}>{year}</option>
        )}
      </select>
      <button onClick={handleNextMonthButtonClick}>{">"}</button>
    </header>
    <table>
      <thead>
        <tr>
          {weekDayNames.map((name) =>
          <th key={name}>{name}</th>
          )}
        </tr>
      </thead>

      <tbody>
        {monthData.map((week, index) =>
          <tr key={index} className={classes.week}>
            {week.map((date, index) => date ? 
            <td 
            key={index} 
            className={classNames(day, {
              "today": calendar.areEqual(date, currentDate),
              "selected": calendar.areEqual(date, selectedDate)
            })}>
            Onclick={() => handleDayClick(date)}
            {date.getDate()}</td> 
            :
            <td key={index}/>
            )}
          </tr>
        )}
      </tbody>
    </table>
  </div>
    </>
  )
}