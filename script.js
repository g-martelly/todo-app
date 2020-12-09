//make Add item button work
document.getElementById("add-button").addEventListener('click', addItem)

//figure out how to add a new list item to ul#current-items 

//add a new li item using text from the textbox
//implement enter button on textbox
//


function addItem() {
   var textbox = document.getElementById('textbox');
   var currentItemsList = document.getElementById('current-items');   
    var newItem = document.createElement('li');
    newItem.className = 'current-item';
    newItem.textContent = textbox.value;
    currentItemsList.appendChild(newItem);
    textbox.clear
}