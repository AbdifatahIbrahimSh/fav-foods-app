// function addItem() {
//     var element = document.getElementById('list');
//     var newEl = document.createElement('li');
//     var elValue = document.getElementById('additem').value;

//     if (elValue) {
//         var text = document.createTextNode(elValue);
//         newEl.appendChild(text);
//         element.appendChild(newEl);
//         document.getElementById('additem').value = "";
//     }
    
// }


// var button = document.getElementById('button');



// button.addEventListener('click', addItem, false);

$(function() {
    $('#additem').on('click', function()  {
        $('#add').add('#textinput').removeAttr('style');
        $(this).add('#remove').hide();
        $('#textinput').focus();
    })
    // add a new item into the list when you click add
    $('#add').on('click', function() {
        var value = $('#textinput').val();
        var trimmedValue = value.trim();
        
        if (trimmedValue) {
            $('#list').append('<li>' + trimmedValue + '</li>');
            $('#textinput').val('');
            $(this).add('#textinput').hide();
            $('#additem').add('#remove').show();
        }
    })
    // removes the element you clicked on 
    $('#list').on('click', function(e) {
        var el = $(e.target);
        $('#remove').on('click', function() {
            if (el.is('li')) {
                el.remove();
            }
        })
    })
})




