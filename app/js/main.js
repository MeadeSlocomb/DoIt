

//Task Object Constructor

var NewTask = function(options) {
  var args = options || {};
  this.task = options.task;
  // this.date = options.date;
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
  $('#tasks').append('<li class="incomplete task"><div class="taskText"><span >' + taskText + '</span></div><div class="taskDate"><span>Due: ' + taskDate + '</span></div></li>');
  this.reset();
});

// //Toggle

$('.task').on('click', 'li div span', function() {
  event.preventDefault();
  $(this).toggleClass('complete');
  var tTask = $(this).text();
  var taskToEdit = _.find(storage, {task: tTask});
  taskToEdit.complete = true;
});

