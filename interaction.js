const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeButton() {
    button.style.backgroundImage = "url('Alice.svg')";
    

    button.style.backgroundSize = "100% 100%"; 
    button.style.backgroundRepeat = "no-repeat";
    button.style.backgroundPosition = "center";
}

function changeMessage() {
    message.textContent = "Oh no!";
} 

button.addEventListener("click", changeButton);
button.addEventListener("click", changeMessage);