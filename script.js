// Function to send email using SMTP
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "vinaykumar05111978@gmail.com",
        Password: "DF7D94F95A7379E4CBCA89A3D0F815BE2FBC",
        To: 'anishkaran15@gmail.com',
        From: document.getElementById("emailInput").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

// JavaScript function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the back-to-top button based on the scroll position
window.onscroll = function () {
    var scrollBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

// Typed.js effect for changing text dynamically
document.addEventListener("DOMContentLoaded", function() {
    var typingEffect = new Typed(".multiText", {
        strings: ["MERN Developer...", "Coder...", "CyberSecurity Enthusiast..."],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    });
});


// Dark mode toggle functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const toggleBtn = document.getElementById('darkModeToggleBtn');
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = '<i class="fa fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa fa-adjust"></i>';
    }
}
