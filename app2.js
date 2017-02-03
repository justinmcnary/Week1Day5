// 1. create eventListener to capture submit of #shopping-list-entry
$('#js-shopping-list-form').submit(function(event) {
   event.preventDefault();
    var input = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
   addItem(state, input);
   renderList(state, $('.shopping-list'));
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

// function toggleCheck(state, item) {
//     state.items[toggleClass(item)];
//     class: shopping-item_checked
// };

// 3. render to screen
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li> <span>' 
                + item.title + 
                '</span> 
                <div>
                <button >
                <span>check</span></button> </div></li>';
    });
    // ele
    element.html(itemsHTML);
};

    