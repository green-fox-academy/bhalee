'use strict';

let dailyHours:number = 6;
let workDays:number = 5;
let semesterWeeks:number = 17;
let weeklyWorkHours:number = 52;

let semesterCodingHours:number = ( dailyHours * workDays ) * semesterWeeks;
let semesterWorkHours:number = weeklyWorkHours * semesterWeeks;
let semesterCodingHoursInPercent:number = ( semesterCodingHours / semesterWorkHours ) * 100;

console.log ( 'Coding hours in a semester:', semesterCodingHours );
console.log ( 'percentage of the coding hours in the semester:', semesterCodingHoursInPercent.toFixed(0), '%' );
