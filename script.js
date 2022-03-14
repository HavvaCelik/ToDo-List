var todoList = [];

class TodoItem {
    constructor(pIscomplate, ptodoText) {
        this.iscomplate = pIscomplate;
        this.todoText = ptodoText;

        this.listItem = document.createElement("li");
        this.checkInput = document.createElement("button");
        this.TextInput = document.createElement("input");
        this.buttondelete = document.createElement("button");
        this.buttonUpdate = document.createElement("button");

    }

    getHtml = () => {

        if (this.iscomplate) {

            this.listItem.className = "todo-complate";

        }
        else {

            this.listItem.className = "";
        }

        this.checkInput.innerHTML= '<i class="fa-solid fa-check"></i>';
        this.checkInput.id='check';
        //this.checkInput.value = this.iscomplate;
        this.checkInput.onclick = () => {
            this.iscomplate = this.checkInput.onclick;
            refreshList();
        }
        this.listItem.appendChild(this.checkInput);


        this.TextInput.type = "text";
        this.TextInput.value = this.todoText;
        this.TextInput.classList.add('text');
        this.TextInput.setAttribute('disabled', 'disabled');
        this.listItem.appendChild(this.TextInput);

        this.buttondelete.type = "button";
        this.buttondelete.id = "btnDelete";
        this.buttondelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        this.buttondelete.setAttribute('onclick', 'deleteITem(this);');
        this.listItem.appendChild(this.buttondelete);

        this.buttonUpdate.type = "button";
        this.buttonUpdate.id = "btnUpdate";
        this.buttonUpdate.innerHTML = '<i class="fa-solid fa-pen"></i>';
        this.buttonUpdate.setAttribute('onclick', 'updateITem(this;)');
        this.listItem.appendChild(this.buttonUpdate);


        return this.listItem;

    }


}


document.addEventListener("DOMContentLoaded", function (event) {
    var todoInput = document.getElementById("txtTodo");
    var addButton = document.getElementById("btnAdd");
    var todoUL = document.getElementById("todoUL");

    addButton.onclick = function () {
        var todo = new TodoItem(false, todoInput.value);
        todoList.push(todo);
        refreshList();
    }

});


function updateItem(el) {
   
    var parentElement = el.closest('li');

    var inputText = parentElement.getElementsByTagName('input');
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i].type == 'text') {
            el.innerText = "Save";
            inputText.removeAttribute('disabled');
            inputText.focus();
            var UpdateLıstItem = inputText[i].value;
            
        }

    }
    if (el.innerText === "Save") {
        todoList.forEach((item, index) => {
            if (item.todoText === UpdateLıstItem) {
                var index = todoList.indexOf(item);
                console.log(index);
                alert(todoList[index].todoText);
            }
        });
    }

}

function deleteITem(el) {

    //closest ile bulundu yerden çıkıp üst elementten içindeki elementlere bakıyor.
    var parentElement = el.closest('li');

    //tagname'i input olanları input text olarak tut
    var inputText = parentElement.getElementsByTagName('input');
  
    //
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i].type == 'text') {
            var DeleteLıstItem = inputText[i].value;
        }
    }

    console.log('DeleteLıstItem' + DeleteLıstItem);

    todoList.forEach((item, index) => {
        if (item.todoText === DeleteLıstItem) {
            var index = todoList.indexOf(item);
            todoList.splice(index, 1)
        }
    })
    refreshList();

}



function refreshList() {

    var complateUL = document.getElementById("complateUL");
    var txtinput = document.getElementById("txtTodo");

    todoUL.innerHTML = "";
    complateUL.innerHTML = "";


    txtinput.innerHTML = txtTodo.value;
    txtTodo.value = "";

    todoList.forEach((item, index) => {
        if (item.iscomplate) {
            complateUL.appendChild(item.getHtml());

        } else {
            todoUL.appendChild(item.getHtml());
        }

    });
}
