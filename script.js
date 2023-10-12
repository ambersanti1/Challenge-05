//BRINGS UP CURRENT DAY
var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

var currentHour = dayjs().hour();
//var currentHour =12
console.log(currentHour);

//DECLARE SAVE BUTTON
var saveButton = $(".saveBtn");

//KEEPS THE INFORMATION IN THE LOCAL STORAGE
saveButton.on('click', function (event) {
  event.preventDefault();
  const todo = $(this).siblings('.description').val()
  const hour = $(this).parent().attr('id')
  localStorage.setItem(hour, todo)
});

//DEFINES WHETHER THE HOUR IS PAST, PRESENT OR FUTURE COMPARING IT TO THE CURRENT HOUR
for(let i = 9; i <= 17; i++) {
  const hour ='hour-'+i;
  const todo = localStorage.getItem(hour);
  const textArea = $('#'+hour).children('.description');
  textArea.val(todo);

  if(i < currentHour){
    $('#'+hour).addClass('past');
  }else if(i > currentHour){
    $('#'+hour).addClass('future');
  }else{
    $('#'+hour).addClass('present');
  }
}