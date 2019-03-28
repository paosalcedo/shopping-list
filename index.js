function addItem(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();//stop default form submission behavior
        const userInputText = $(this).find('#shopping-list-entry');
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${userInputText.val()}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });
}

function toggleCheckItem(){
    $('ul').on('click', '.shopping-item-toggle', function(e){
        $(this).parents().siblings('span').toggleClass('shopping-item__checked');
    });
}

function removeItem(){
    $('ul').on('click', '.shopping-item-delete', function(e){
        this.closest('li').remove();
    });
}

$(addItem);
$(toggleCheckItem);
$(removeItem);