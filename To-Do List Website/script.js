const input = document.getElementById("addItem");
const submit = document.getElementById("submit");
const list = document.querySelector(".list");

function getInput() {
    return input.value;
};

function printToList() {
    const inputText = getInput();
    if (inputText) {
        const listItem = document.createElement("li");
        listItem.innerText = inputText;
        list.appendChild(listItem);

        input.value = "";

        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.id = "removeButton";
        list.appendChild(removeButton);

        removeButton.addEventListener("click", function() {
            listItem.remove();
            removeButton.remove();
        });
    };
};

submit.addEventListener("click", printToList);