//CURRENT DAY
var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

//CURRENT HOUR
var currentHour = dayjs().format("H");
console.log(currentHour);

//CALENDAR HOUR
var calendarNueve = document.getElementById("calendarNueve");
var strNueve = String(calendarNueve.textContent);
var calendarDiez = document.getElementById("calendarDiez");
var strDiez = String(calendarDiez.textContent);
var calendarOnce = document.getElementById("calendarOnce");
var strOnce = String(calendarOnce.textContent);
var calendarDoce = document.getElementById("calendarDoce");
var strDoce = String(calendarDoce.textContent);
var calendarUna = document.getElementById("calendarUna");
var strUna = String(calendarUna.textContent);
var calendarDos = document.getElementById("calendarDos");
var strDos = String(calendarDos.textContent);
var calendarTres = document.getElementById("calendarTres");
var strTres = String(calendarTres.textContent);
var calendarCuatro = document.getElementById("calendarCuatro");
var strCuatro = String(calendarCuatro.textContent);
var calendarCinco = document.getElementById("calendarCinco");
var strCinco = String(calendarCinco.textContent);


var nueveAM = document.getElementById('#nueveAM');
var diezAM = document.getElementById ("diezAM");
var onceAM = document.getElementById ("onceAM");
var docePM = document.getElementById ("docePM");
var unaPM = document.getElementById ("unaPM");
var dosPM = document.getElementById ("dosPM");
var tresPM = document.getElementById ("tresPM");
var cuatroPM = document.getElementById ("cuatroPM");
var cincoPM = document.getElementById ("cincoPM");

var textNueve = document.getElementById("textNueve");
var textDiez = document.getElementById("textDiez");
var textOnce = document.getElementById("textOnce");
var textDoce = document.getElementById("textDoce");
var textUna = document.getElementById("textUna");
var textDos = document.getElementById("textDos");
var textTres = document.getElementById("textTres");
var textCuatro = document.getElementById("textCuatro");
var textCinco = document.getElementById("textCuatro");

var saveButton = document.querySelectorAll(".saveButton");



function hourNueve () {
  if(strNueve == currentHour) {
    nueveAM.setAttribute("class", "row time-block present");
  } else if (strNueve < currentHour) {
    nueveAM.setAttribute("class", "row time-block past");
  } else {
    nueveAM.setAttribute("class", "row time-block future");
  }
}
function hourDiez () {
  if(strDiez == currentHour) {
    diezAM.setAttribute("class", "row time-block present");
  } else if (strDiez < currentHour) {
    diezAM.setAttribute("class", "row time-block past");
  } else {
    diezAM.setAttribute("class", "row time-block future");
  }
}

function hourOnce () {
  if(strOnce == currentHour) {
    onceAM.setAttribute("class", "row time-block present");
  } else if (strOnce < currentHour) {
    onceAM.setAttribute("class", "row time-block past");
  } else {
    onceAM.setAttribute("class", "row time-block future");
  }
}

function hourDoce () {
  if(strDoce == currentHour) {
    docePM.setAttribute("class", "row time-block present");
  } else if (strDoce < currentHour) {
    docePM.setAttribute("class", "row time-block past");
  } else {
    docePM.setAttribute("class", "row time-block future");
  }
}

function hourUna () {
  if(strUna == currentHour) {
    unaPM.setAttribute("class", "row time-block present");
  } else if (strUna < currentHour) {
    unaPM.setAttribute("class", "row time-block past");
  } else {
    unaPM.setAttribute("class", "row time-block future");
  }
}

function hourDos () {
  if(strDos == currentHour) {
    dosPM.setAttribute("class", "row time-block present");
  } else if (strDos < currentHour) {
    dosPM.setAttribute("class", "row time-block past");
  } else {
    dosPM.setAttribute("class", "row time-block future");
  }
}

function hourTres () {
  if(strTres == currentHour) {
    tresPM.setAttribute("class", "row time-block present");
  } else if (strTres < currentHour) {
    tresPM.setAttribute("class", "row time-block past");
  } else {
    tresPM.setAttribute("class", "row time-block future");
  }
}

function hourCuatro () {
  if(strCuatro == currentHour) {
    cuatroPM.setAttribute("class", "row time-block present");
  } else if (strCuatro < currentHour) {
    cuatroPM.setAttribute("class", "row time-block past");
  } else {
    cuatroPM.setAttribute("class", "row time-block future");
  }
}


function hourCinco () {
  if(strDoce == currentHour) {
    cincoPM.setAttribute("class", "row time-block present");
  } else if (strCinco < currentHour) {
    cincoPM.setAttribute("class", "row time-block past");
  } else {
    cincoPM.setAttribute("class", "row time-block future");
  }
}

hourNueve()
hourDiez()
hourOnce()
hourDoce()
hourUna()
hourDos()
hourTres()
hourCuatro()
hourCinco()

//SAVE ACTIVITY
function saveHourEvent() {
  var saveEvent = {
    textNueve: textNueve.value,
    textDiez: textDiez.value,
    textOnce: textOnce.value,
    textDoce: textDoce.value,
    textUna: textUna.value,
    textDos: textDos.value,
    textTres: textTres.value,
    textCuatro: textCuatro.value,
    textCinco: textCinco.value,
  };
  localStorage.setItem('saveEvent', JSON.stringify(saveEvent));
  console.log(JSON.parse(localStorage.getItem('saveEvent')));
}

function printEvent() {
  var showEvent = JSON.parse(localStorage.getItem('saveEvent'));
  if (showEvent !== null) {
    textNueve.setAttribute("id", "estilo");
    textDiez.setAttribute("id", "estilo");
    textOnce.setAttribute("id", "estilo");
    textNueve.innerHTML= showEvent.textNueve;
    textDiez.innerHTML= showEvent.textDiez;
    textOnce.innerHTML= showEvent.textOnce;
    textDoce.innerHTML= showEvent.textDoce;
    textUna.innerHTML= showEvent.textUna;
    textDos.innerHTML= showEvent.textDos;
    textTres.innerHTML= showEvent.textTres;
    textCuatro.innerHTML= showEvent.textCuatro;
    textCinco.innerHTML= showEvent.textCinco;
  }
}

saveButton.on('click', function (event) {
  event.preventDefault();
  const todo = $(this).siblings('.description').val()
  const hour = $(this).parent().attr('id')
  localStorage.setItem(hour, tod)
  // saveHourEvent();
  // printEvent();
});

function init() {
  printEvent();
}
//init();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});