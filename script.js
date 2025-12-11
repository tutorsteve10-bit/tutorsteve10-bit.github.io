// --- 1. Contact Form Submission ---
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const formMessage = document.querySelector('.form-message');
    
    // Simple validation check
    if(name.length < 2) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid name.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    e.target.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => { formMessage.textContent = ''; }, 5000);
});

// --- 2. Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});

// --- 3. Dark/Light Mode with Local Storage ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- 4. Project Filtering ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        projectCards.forEach(card => {
            // Animation reset
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            }, 300); // Wait for fade out
        });
    });
});

// --- 5. Scroll Reveal Animation ---
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.15;
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < triggerBottom){ 
            reveal.classList.add('active'); 
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load in case elements are already visible
revealOnScroll();
                             
