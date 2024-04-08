const Days_In_Mouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  Jule: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export function areEqual(a, b){
  if(!a || !b) return false;

  return(
    a.getFullYear() === b.getFullYear() && 
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function getDaysInMonth(date){
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMouth = Days_In_Mouth[month];
  if(isLeapYear(year) && month === Month.February){
    return daysInMouth + 1
  }else{
    return daysInMouth
  }
}
export function isLeapYear(year){
  return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDayofWeek(date){
  const dayofWeek = date.getDay();

  if(dayofWeek === 0) return 6;
    return dayofWeek - 1;
}


export function getMonthData(year, month){
  const result = [];
  const date = new Date(year, month);
  const Days_in_week = 7;
  let day = 1;
  const daysInMouth = getDaysInMonth(date);
  const monthStartOn = getDayofWeek(date);

  for(let i = 0; i < (daysInMouth + monthStartOn) / Days_in_week; i++){
    result[i] = [];

    for(let j = 0; j < Days_in_week; j++){
      if((i === 0 && j < monthStartOn) || day > daysInMouth){
        result[i][j] = undefined;
      }else{
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

return result;
}