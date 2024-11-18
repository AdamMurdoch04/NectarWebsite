let customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    customCursor.style.left = `${x}px`;
    customCursor.style.top = `${y}px`;
}

let Buttons = document.querySelectorAll('.PrimaryButton, .SecondaryButton, .LogoButton, #HamburgerIcon');

Buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        customCursor.classList.add('grow');
    });
    
    button.addEventListener('mouseleave', () => {
        customCursor.classList.remove('grow');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));