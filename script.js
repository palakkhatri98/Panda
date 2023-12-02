function waveHands() {
    const message = document.getElementById('message');
    message.textContent = 'Hi';

    // Reset message after 2 seconds
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}
function createHeart(container) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    container.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

