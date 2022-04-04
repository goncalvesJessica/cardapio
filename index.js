const foods = ["bife", "frango", "feijoada", "farofa", "salada", "torresmo"];

function Mais(id) {
    var count = document.getElementById(id);
    count.textContent = parseInt(count.textContent) + 1;
}

function Menos(id) {
    var count = document.getElementById(id);
    if (parseInt(count.textContent) - 1 != -1) {
        count.textContent = parseInt(count.textContent) - 1;
    }
}

function Calcular() {
    var total = 0;

    for (let i = 0; i < foods.length; i++) {
        var itemCount = document.getElementById(foods[i]);
        var itemPrice = document.getElementById(foods[i] + "Price");
        total += parseInt(itemPrice.textContent) * parseInt(itemCount.textContent);
    }

    var nome = document.getElementById("nome").value;

    if (total == 0 || nome == "") {
        alert("Selecione pelo menos uma opcao");
        return;
    }

    document.getElementById("totalPrice").innerHTML = "<strong>Preço Total R$: " + total + "</strong>";

    var dear = document.getElementById("dear");

    dear.textContent = "Caro, " + nome;

    document.getElementById("info-pedido").style.display = "block";
}