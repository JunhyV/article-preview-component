const shareButton = document.getElementById("btn");
const replaceButton = document.getElementById('btn3');
const closeButton = document.getElementById('btn2');
const hiddenContainer = document.getElementById('hidden');

shareButton.addEventListener("click", () => {
    hiddenContainer.classList.remove('hidden');
    replaceButton.classList.remove('hidden');
    
}
)
closeButton.addEventListener('click', () => {
    hiddenContainer.classList.add('hidden');
})
replaceButton.addEventListener('click', () => {
    hiddenContainer.classList.add('hidden');
    replaceButton.classList.add('hidden');
})