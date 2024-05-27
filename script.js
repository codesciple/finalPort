function scrollProjects(direction) {
    const container = document.getElementById('projects-list');
    const scrollAmount = 220; // Adjust this value as needed
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function updateArrows() {
    const container = document.getElementById('projects-list');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Check if there is more content to scroll to the right
    if (container.scrollWidth > container.clientWidth + container.scrollLeft) {
        rightArrow.style.display = 'block';
    } else {
        rightArrow.style.display = 'none';
    }

    // Check if there is more content to scroll to the left
    if (container.scrollLeft > 0) {
        leftArrow.style.display = 'block';
    } else {
        leftArrow.style.display = 'none';
    }
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Dark Mode';
    } else {
        themeToggle.textContent = 'Light Mode';
    }
});

document.getElementById('projects-list').addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

// Initial check
updateArrows();

// Typing animation for title
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('animated-title');
    const fullText = title.textContent;
    let currentIndex = 0;

    function type() {
        if (currentIndex < fullText.length) {
            title.textContent = fullText.substring(0, currentIndex + 1);
            currentIndex++;
            setTimeout(type, 100);
        } else {
            title.style.borderRight = '0.15em solid var(--text-color)';
            setInterval(() => {
                title.style.borderRight = title.style.borderRight === '0.15em solid transparent' ? '0.15em solid var(--text-color)' : '0.15em solid transparent';
            }, 500);
        }
    }

    title.textContent = '';
    type();
});


