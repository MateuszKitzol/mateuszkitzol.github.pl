let ramartButtonDown = document.getElementById('ramart_button_down');
let radioButtonDown = document.getElementById('radio_button_down');
let memoryButtonDown = document.getElementById('memory_button_down');
let ramartButtonUp = document.getElementById('ramart_button_up');
let radioButtonUp = document.getElementById('radio_button_up');
let memoryButtonUp = document.getElementById('memory_button_up')

let ramartClickDown = () => {
    document.getElementById('ramart_image').style.display = "block";
    document.getElementById('ramart_text').style.display = "block";
    ramartButtonDown.style.display = "none";
    ramartButtonUp.style.display = "inline";
}

let radioClickDown = () => {
    document.getElementById('radio_image').style.display = "block";
    document.getElementById('radio_text').style.display = "block";
    radioButtonDown.style.display = "none";
    radioButtonUp.style.display = "inline";
}

let memoryClickDown = () => {
    document.getElementById('memory_image').style.display = "block";
    document.getElementById('memory_text').style.display = "block";
    memoryButtonDown.style.display = "none";
    memoryButtonUp.style.display = "inline";
}

let ramartClickUp = () => {
    document.getElementById('ramart_image').style.display = "none";
    document.getElementById('ramart_text').style.display = "none";
    ramartButtonDown.style.display = "inline";
    ramartButtonUp.style.display = "none";
}

let radioClickUp = () => {
    document.getElementById('radio_image').style.display = "none";
    document.getElementById('radio_text').style.display = "none";
    radioButtonDown.style.display = "inline";
    radioButtonUp.style.display = "none";
}

let memoryClickUp = () => {
    document.getElementById('memory_image').style.display = "none";
    document.getElementById('memory_text').style.display = "none";
    memoryButtonDown.style.display = "inline";
    memoryButtonUp.style.display = "none";
}

ramartButtonDown.addEventListener('click', ramartClickDown);
radioButtonDown.addEventListener('click', radioClickDown);
memoryButtonDown.addEventListener('click', memoryClickDown);
ramartButtonUp.addEventListener('click', ramartClickUp);
radioButtonUp.addEventListener('click', radioClickUp);
memoryButtonUp.addEventListener('click', memoryClickUp);