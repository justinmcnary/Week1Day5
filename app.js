//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
//check and uncheck items on the list by clicking the "Check" button
//permanently remove items from the list

//////////////////////////////////////////////////////////////////////

// 1. create eventListener to capture submit of #shopping-list-entry
$('#js-shopping-list-form').submit(function(event) {
   event.preventDefault();
    var input = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
   addItem(state, input);
});

// 2. function to take `input` and put into the object `state`

var state = {
   items: [],
};

var addItem = function(state, item) {
   state.items.push({
        title: item,
        done:false
   });
};

var itemHTML = "<li> <span class="shopping-item">"+ item + "</span></li>"




var renderList = function(state, element) {
   var itemsHTML = state.items.map(function(item) {
       console.log(itemsHTML);
//       return '<li>' + item + '</li>';
   });
   element.html(itemsHTML);
};








// create itemObj to store item
// create itemsArr to store each itemObj

// create function to store itemObj to itemsArr



//
//var state = {
//   items: [
//   // {title:"pizza", done: "true"},
//   // {title:"pancake mix", done: "false"}
//   ]
//};
//
//// Functions that modify state
//
//var addItem = function(state, item) {
//   state.items.push(item);
//};
////
//// Functions that render state
//
//var renderList = function(state, element) {
//   var itemsHTML = state.items.map(function(item) {
//       return '<li>' + item + '</li>';
//   });
//   element.html(itemsHTML);
//};
//
//// Event Listeners
//



// create function to REMOVE itemObj from itemsArr
