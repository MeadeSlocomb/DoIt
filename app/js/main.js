

//Task Object Constructor

var NewTask = function(options) {
  var args = options || {};
  this.task = options.task;
  // this.date = options.date;
  this.status = 'Incomplete';
};

//Task Creation

var storage = [];

$('#addTask').on('submit',function(event) {
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskDate = $('#taskDate').val();
  // var date = date.format('MM/DD/YY');
  var taskInstance = new NewTask({task: taskText});
  storage.push(taskInstance);
  $('#tasks').append('<li class="incomplete task"><span class="taskHead">' + taskText + '</span><span class="dateHead">' + taskDate + '</span></li>');
  this.reset();
});

// //Toggle

$('#tasks').on('click', 'li', function() {
  event.preventDefault();
  $(this).toggleClass('complete');
  var tTask = $(this).text();
  var taskToEdit = _.find(storage, {task: tTask});
  taskToEdit.status = 'Complete';
});

