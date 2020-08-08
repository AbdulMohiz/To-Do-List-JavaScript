//IEFE

(() => {
    console.log('starting');
    let toDoListArray = [];

    const form = document.querySelector(".form");
    const ipt = form.querySelector(".form-input");
    const ul = document.querySelector(".to-do-list");

    form.addEventListener('submit', e =>{

    e.preventDefault();

    let itemId = String(Date.now());
    let toDoItem = ipt.value;

    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    ipt.value = '';
    
    });

    ul.addEventListener('click', e => {

        let id = e.target.getAttribute('data-id');
        if(!id) return

        removeItemFromArray(id);
        removeItemFromDOM(id);
    });

    function addItemToDOM(itemId, toDoItem){
        const li = document.createElement('li');

        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;

        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem){
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id){
        var li = document.querySelector('[data-id="'+ id +'"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id){
        
        toDoListArray = toDoListArray.filter(obj => obj.itemId !== id);

        console.log(toDoListArray);
    }

})();
