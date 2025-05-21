// Deteksi halaman aktif dan beri class 'active' ke link navbar
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#navbar-slide .custom-nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (href === "index.html" && currentPath === "")) {
            link.classList.add('active-link'); // pastikan ada style untuk 'active-link' di CSS
        }
    });
});

// Fungsi hamburger menu
function hamburger(element) {
    const slide = document.getElementById("navbar-slide");
    slide.classList.toggle("active-slide"); // pastikan di CSS ada .active-slide yang show/hide menu
}
