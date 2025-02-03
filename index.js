
function flipCard(element) {
    element.classList.toggle('flipped');
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const totalImages = images.length;

    images.forEach((img, index) => {
        let percentage = (index / (totalImages - 1)) * 100; // Evenly distribute along path
        img.style.offsetDistance = percentage + "%";
    });
});

//question
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.question-btn-no');
    const yesButton = document.querySelector('.question-btn-yes');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


const yesButton = document.querySelector('.question-btn-yes');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti({canvas});

yesButton.addEventListener('click', () => { 
    jsConfetti.addConfetti();
});



