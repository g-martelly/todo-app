//make Add item button work
document.getElementById("add-button").addEventListener('click', addItem);
document.querySelector('#current-items').addEventListener('click', deleteItem);
var out = document.querySelector('#current-items button').children;
console.log(out);
//figure out how to add a new list item to ul#current-items 

//add a new li item using text from the textbox
//implement enter button on textbox
//

input = document.getElementById('textbox');

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("add-button").click();
    }
})


function addItem() {
var textbox = document.getElementById('textbox');
var currentItemsList = document.getElementById('current-items');   
var currentDivItem= document.createElement('div');
var newListElement = document.createElement('li');
var XButton = document.createElement('button');
   
  newListElement.textContent = textbox.value;
  XButton.className = 'delete-button';
  XButton.textContent = "DONE";
   currentDivItem.className = 'current-list-item';
   currentItemsList.appendChild(currentDivItem);
   currentDivItem.appendChild(newListElement);
   currentDivItem.appendChild(XButton);

   clearTextAndFocus();
}

function clearTextAndFocus() {
    textbox.value = "";
    textbox.focus();
}
function deleteItem(evt) {
    evt = evt;
    var currentItem = evt.srcElement;
    var i = document.getElementById('current-items');
    console.table(i.child);
    console.log("this is it: " + currentItem.parentElement);
    var el = this;
    i.removeChild(currentItem.parentElement);
    
   console.table("evt is: " + evt + "targ is: " + currentItem + "this is: " + el);
}