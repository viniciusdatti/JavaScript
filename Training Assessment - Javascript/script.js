const homeLink = document.getElementById('home-link');
const counterElement = document.getElementById('counter');

homeLink.addEventListener('click', function() {
    counterElement.classList.toggle('hidden');
});

// Update
setInterval(function() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}, 1000);


// função para equipamentos aparecer após clicar em Equipment
const detailsButtons = document.querySelectorAll('.details-btn');

detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

function toggleEquipment() {
    let equipmentContainer = document.getElementById("equipment-container");
    if (equipmentContainer.style.display === "none") {
        equipmentContainer.style.display = "block";
    } else {
        equipmentContainer.style.display = "none";
    }
}
let equipmentBtn = document.getElementById("equipment-btn");
equipmentBtn.addEventListener("click", toggleEquipment);

// Seleciona todos os elementos com a classe "equipment-item"
const equipmentItems = document.querySelectorAll('.equipment-item');

// Adiciona um ouvinte de evento de clique a cada elemento
equipmentItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Seleciona a imagem e a descrição do equipamento
        const equipmentImg = item.querySelector('img');
        const equipmentDetails = item.querySelector('.equipment-details');

        // Alterna a exibição da imagem e da descrição do equipamento
        if (equipmentImg.style.display === 'none') {
            equipmentImg.style.display = 'block';
            equipmentDetails.style.display = 'none';
        } else {
            equipmentImg.style.display = 'none';
            equipmentDetails.style.display = 'block';
        }
    });
});


// faz com que o formulário apareça após clicar no menu "order"

const orderLink = document.getElementById("order-link");
const form = document.querySelector("form");

orderLink.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});


const addButton = document.getElementById("addButton");
const sendButton = document.getElementById("sendButton");
const itemList = document.getElementById("itemList");

const items = [];

addButton.addEventListener("click", () => {
    const equipamento = document.getElementById("equipamento");
    const quantidade = document.getElementById("quantidade");

    const item = {
        equipamento: equipamento.value,
        quantidade: quantidade.value
    };

    items.push(item);

    const listItem = document.createElement("li");

    const removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", () => {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
        itemList.removeChild(listItem);
    });
    listItem.appendChild(removeButton);

    listItem.appendChild(document.createTextNode(`${item.equipamento} (${item.quantidade})`));
    itemList.appendChild(listItem);

    equipamento.value = "";
    quantidade.value = "";
});

sendButton.addEventListener("click", () => {
    if (items.length === 0) {
        alert("Nenhum item foi selecionado!");
        return;
    }

    const confirmationMessage = items
        .map(item => `${item.equipamento} (${item.quantidade})`)
        .join("\n");

    if (confirm(`Tem certeza que deseja enviar o pedido?\n\n${confirmationMessage}`)) {
        items.length = 0;
        itemList.innerHTML = "";
        alert("Pedido enviado com sucesso!");
    }
});




