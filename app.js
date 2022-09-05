const initialPriceRef = document.querySelector("#initial-price-input");
const stocksQuantityRef = document.querySelector("#stocks-quantity-input");
const currentPriceRef = document.querySelector("#current-price-input");
const submitBtnRef = document.querySelector("#submit-btn");
const outputRef = document.querySelector("#output-div");

function calculateProfitOrLoss(initial, quantity, current) {
    if (current > initial) {
        var profitValue = (current - initial) * quantity;
        var profitPercentage = (profitValue / initial) * 100;

        const message = `Whoa! You invested in great stocks. 💯\nThe profit is ${profitValue.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}% 📈`;

        document.getElementById("output-background-div").style.backgroundImage = "url('/background-images/stonks_profit.png')";

        document.getElementById("output-background-div").style.padding = "4rem";

        document.getElementById("output-div").style.boxShadow = "0px 0px 20px black";

        document.getElementById("output-div").style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

        document.getElementById("output-div").style.color = "black";

        showOutputMessage(message);

    } else if (initial > current) {
        var lossValue = (initial - current) * quantity;
        var lossPercentage = (lossValue / initial) * 100;

        const message = `Oops! You should look for some good stocks 😔.\nThe loss is ${lossValue.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}% 📉`;

        document.getElementById("output-background-div").style.backgroundImage = "url('/background-images/stonks_loss.jpg')";

        document.getElementById("output-background-div").style.padding = "4rem";

        document.getElementById("output-div").style.boxShadow = "0px 0px 20px black";

        document.getElementById("output-div").style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

        document.getElementById("output-div").style.color = "black";

        showOutputMessage(message);

    } else {
        const message = "Please don't invest in dead stocks. 🪦"
        showOutputMessage(message);
    }
}

function showOutputMessage(message) {
    outputRef.innerText = message;
}

function clickHandler() {
    const initial = Number(initialPriceRef.value);
    const quantity = Number(stocksQuantityRef.value);
    const current = Number(currentPriceRef.value);

    showOutputMessage("");

    document.getElementById("output-background-div").style.backgroundImage = "";

    document.getElementById("output-background-div").style.color = "";

    document.getElementById("output-background-div").style.padding = "";

    document.getElementById("output-div").style.boxShadow = "";

    document.getElementById("output-div").style.backgroundColor = "";

    document.getElementById("output-div").style.color = "";

    if (initial && quantity && current) {
        if(initial < 0 || quantity < 0 || current < 0) {
            const message = "Please be positive & enter positive values 😀"
            showOutputMessage(message);
        } else {
            calculateProfitOrLoss(initial, quantity, current);
        }
    } else {
        const message = "Please enter all the values."
        showOutputMessage(message);
    }
}

submitBtnRef.addEventListener("click", clickHandler);