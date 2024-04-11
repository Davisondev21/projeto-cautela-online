document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cautela-form");
    const itemContainer = document.querySelector('.item-list');
    let itens = [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.responsavel.value) {
            alert("Responsável é um campo obrigatório.");
            return;
        }

        if (!form.data.value) {
            alert("Data é um campo obrigatório.");
            return;
        }

        if (!form.descricao.value) {
            alert("Descrição/Anotação é um campo obrigatório.");
            return;
        }

        if (!form.hora.value) {
            alert("Hora é um campo obrigatório.");
            return;
        }

        if (itens.length === 0) {
            alert("Por favor, adicione itens ao formulário.");
            return;
        }

        // Perform form submission or any other action here
        console.log("Form submitted with data:", Object.fromEntries(new FormData(form)));

        // Reset the form
        form.reset();

        // Clear the itens array and remove existing items from the DOM
        itens = [];
        itemContainer.innerHTML = "";
    });

    function createItemElement(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemSpan = document.createElement('span');
        itemSpan.textContent = item;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', removeItem);

        itemDiv.appendChild(itemSpan);
        itemDiv.appendChild(deleteBtn);

        return itemDiv;
    }

    function removeItem(event) {
        const itemToRemove = event.target.parentElement;
        itemContainer.removeChild(itemToRemove);

        const itemIndex = itens.indexOf(itemToRemove.querySelector("span").textContent);
        itens.splice(itemIndex, 1);
    }

    function renderItems() {
        itemContainer.innerHTML = '';
        const itemList = document.querySelectorAll('.item-input');
        itemList.forEach((input, index) => {
            if (input.value.trim() !== '') {
                const item = createItemElement(input.value);
                itemContainer.appendChild(item);
                itens.push(input.value);
            }
        });
    }

    const addItemBtn = document.querySelector(".add-item-btn");
    addItemBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const itemInput = document.querySelector(".item-input");
        const itemValue = itemInput.value.trim();

        if (itemValue !== "") {
            const newItem = createItemElement(itemValue);
            itens.push(itemValue);
            itemInput.value = "";
            itemContainer.appendChild(newItem);
        }
    });

    const itemInput = document.querySelector(".item-input");
    itemInput.addEventListener("input", renderItems);
});