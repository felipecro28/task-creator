"use strict";

function dateToDaysLeft(taskDate) {
  var deadLine = new Date(taskDate);
  var today = Date.now();
  var difference = Math.abs(deadLine - today);
  var daysLeft = difference / (1000 * 3600 * 24);
  daysLeft = Math.round(daysLeft);
  return daysLeft + 1;
}