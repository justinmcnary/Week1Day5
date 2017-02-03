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

// 3. render to screen


var renderList = function(state, element) {
   var itemsHTML = state.items.map(function(item) {
       var itemHTML = "<li> <span>"+ item + "</span></li>"

       console.log(itemsHTML);
//       return '<li>' + item + '</li>';
   });
}
    
    