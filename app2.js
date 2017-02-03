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
        var itemDone = '<span class="shopping-item shopping-item__checked">';
        var itemNotDone = '<span class="shopping-item">';
        var itemCss;
        if(item.done == true){
            itemCss =  itemDone;    
        } else {
            itemCss =  itemNotDone;  
        }
        return '<li>' +
                itemCss +
                item.title + 
                '</span>'+
                '<div class="shopping-item-controls">'+
                '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
                '</button>'+
                '<button class="shopping-item-delete">' +
                ' <span class="button-label">delete</span>' +
                '</button>' +
                '</div>' +
                '</li>';
    });
  
    element.html(itemsHTML);
};
$( ".shopping-list" ).on( "click", ".shopping-item-toggle", function() {
    state.items.forEach(function(item) {
        if(item.done === false){
            item.done = true;
        } else {
            item.done = false;
        }  
    });
    renderList(state, $('.shopping-list'));
});
//
//$('#js-shopping-list-form').submit(function(event) {
//   event.preventDefault();
//    var input = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
//   addItem(state, input);
//   renderList(state, $('.shopping-list'));
//});

//create eventListener on ${.shopping-item-toggle} 
// append class to ${.shopping-item}


//var checkBtn = $(event.currentTarget).find(".shopping-item-toggle")
//checkBtn.click(function() {
//    console.log("click")
//// $( ".shopping-item" ).toggleClass( "shopping-item__checked" );              
//});

    