const input = document.getElementById("addItem");
const submit = document.getElementById("submit");
const list = document.querySelector(".list");
const refreshButton = document.getElementById("delete");

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
        removeButton.classList.add("removeButton");
        list.appendChild(removeButton);
        
        const br = document.createElement("br");
        listItem.appendChild(br);

        removeButton.addEventListener("click", function() {
            listItem.remove();
            removeButton.remove();
        });

        listItem.addEventListener("click", function() {
            listItem.innerHTML = `<s>${listItem.innerHTML}</s>`;
            listItem.style.color = "#801f1f";
        });
    };
};

submit.addEventListener("click", printToList);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        printToList();
    };
});

refreshButton.addEventListener("click", function() {
    window.location.reload();
});
