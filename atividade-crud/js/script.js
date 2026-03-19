var totalSequence = 0;

function save() {
    // obtém dados do formulário
    let selectedItem = document.getElementById("selectedItem");
    let operation = document.getElementById("operation").value;

    let inputId = document.getElementById("id");
    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputIngredients = document.getElementById("ingredients");

    let idCount;

    // Se for edição, mantém o mesmo id
    if (operation === "edit") {
        idCount = parseInt(selectedItem.value);
    } else {
        idCount = parseInt(inputId.value) + 1;
    }

    inputId.value = idCount;

    if (idCount > totalSequence) {
        totalSequence = idCount;
    }

    // Monta a lista
    let contentItem =
        '<div id="lancheItem' + idCount + '">' +
            '<span>Pedido Num.: ' + idCount + '</span> - ' +
            '<span>' + inputName.value + '</span> - ' +
            '<span>' + inputPrice.value + '</span> - ' +
            '<span>' + inputIngredients.value + '</span> ' +

            '<span><input type="button" value="editar" onclick="edit(' + idCount + ')" /></span>' +

            '<span><input type="button" value="remover" onclick="deleteItem(' + idCount + ')" /></span>' +


            '<input type="hidden" id="id' + idCount + '" value="' + idCount + '" />' +
            '<input type="hidden" id="name' + idCount + '" value="' + inputName.value + '" />' +
            '<input type="hidden" id="price' + idCount + '" value="' + inputPrice.value + '" />' +
            '<input type="hidden" id="ingredients' + idCount + '" value="' + inputIngredients.value + '" />' +
        '</div>';

    // Se for edição, remove o item anterior
    if (operation === "edit") {
        let oldItem = document.getElementById("lancheItem" + selectedItem.value);
        if (oldItem) {
            oldItem.remove();
        }
    }

    let lancheListDiv = document.getElementById("lancheList");
    lancheListDiv.innerHTML += contentItem;

    // volta para modo insert
    document.getElementById("operation").value = "insert";
    document.getElementById("selectedItem").value = "0";

    clear();
}

function clear() {
    let inputId = document.getElementById("id");
    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputIngredients = document.getElementById("ingredients");

    // limpa o formulário
    inputName.value = "";
    inputPrice.value = "";
    inputIngredients.value = "";
    inputId.value = totalSequence;

    console.log(totalSequence);
}

function insert() {
    clear();
    document.getElementById("operation").value = "insert";
    document.getElementById("selectedItem").value = "0";

    let inputId = document.getElementById("id");
    inputId.value = totalSequence;
}

function edit(id) {
    document.getElementById("operation").value = "edit";

    // busca os dados do item selecionado
    let inputIdItem = document.getElementById("id" + id);
    let inputNameItem = document.getElementById("name" + id);
    let inputPriceItem = document.getElementById("price" + id);
    let inputIngredientsItem = document.getElementById("ingredients" + id);

    let inputId = document.getElementById("id");
    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputIngredients = document.getElementById("ingredients");

    // joga no formulário
    inputId.value = inputIdItem.value;
    inputName.value = inputNameItem.value;
    inputPrice.value = inputPriceItem.value;
    inputIngredients.value = inputIngredientsItem.value;

    document.getElementById("selectedItem").value = id;
}

function deleteItem(id) {
    let oldItem = document.getElementById("lancheItem" + id);
    if (oldItem) {
        oldItem.remove();
    }
}