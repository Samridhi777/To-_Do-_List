
var input=document.getElementById('input')
var button=document.getElementById('button')
var list=document.getElementById('list')

// function to add a new task
function addtask(){
    var taskInput=input.value.trim();//trim method is used in order to remove white spaces from both side
    if(taskInput=== '')
        return; 

// create a new list item to add task
    var taskList=document.createElement('li');
    taskList.className='task';

// create span element to hold task text
    var taskSpan=document.createElement('span');
    taskSpan.textContent=taskInput;   
    
// create a delete button
    var deleteButton=document.createElement('button')
    deleteButton.textContent='Delete';
    deleteButton.className='deleteButton';

// Append the task text and delete button to the list
    taskList.appendChild(taskSpan);
    taskList.appendChild(deleteButton);  
    
// Append the taskList to the list
    list.appendChild(taskList)

// Clear the input field
    input.value='';

// Add event listeners for completing and deleting tasks
    taskSpan.addEventListener('click',toogleTaskCompletion);
    deleteButton.addEventListener('click',deleteTask);
}

//function to toggle task completion
function toogleTaskCompletion(event){
    var taskSpan=event.target;
    taskSpan.classList.toogle('completed');
}

// function to delete task
function deleteTask(event){
    var deleteButton=event.target;
    var taskList=deleteButton.parentElement;
    list.removeChild(taskList);
}

//Add event listener to add button
button.addEventListener('click',addtask);

// Add an event listener to the add task button
button.addEventListener('click',addtask);
input.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        addtask();
    }
});