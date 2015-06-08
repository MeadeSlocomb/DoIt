

//Task Object Constructor

var NewTask = function(options) {
  var args = options || {};
  this.task = options.task;
  this.date = options.date;
  this.complete = false;
};

//Task Creation

var storage = [];

$('#addTask').on('submit',function(event) {
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskDate = $('#taskDate').val();
  var taskInstance = new NewTask({task: taskText});
  storage.push(taskInstance);
  $('#tasks').append('<li class="incomplete task"><div class="taskText"><span>' + taskText + '</span></div><p></p><div class="taskDate"><p>Due: ' + taskDate + '</p></div></li>');
  this.reset();
});

// //Toggle

$('#tasks').on('click', 'li', function() {
  $(this).toggleClass('completediv');
  $(this).find('span').toggleClass('complete');
  $(this).find('p').toggleClass('complete');
  var tTask = $(this).find('span').text();
  var taskToEdit = _.find(storage, {task: tTask});
  taskToEdit.complete = !taskToEdit.complete;
});

