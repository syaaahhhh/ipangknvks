document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links (if you have anchor links like <a href="#section-id">)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && document.querySelector(targetId)) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

   // Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const ctaButton = document.querySelector('.btn-cta-header'); // Tambahkan baris ini untuk mendapatkan tombol CTA

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Tambahkan baris ini: Toggle 'hidden' class pada tombol CTA
        if (ctaButton) { // Pastikan tombol CTA ada
            ctaButton.classList.toggle('hidden');
        }
    });

    // Close nav menu when a link is clicked (for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');

                // Tambahkan baris ini: Pastikan tombol CTA terlihat ketika menu ditutup melalui klik link
                if (ctaButton && ctaButton.classList.contains('hidden')) {
                    ctaButton.classList.remove('hidden');
                }
            }
        });
    });
}
    // Portfolio filtering (for portfolio.html)
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block'; // Show item
                    } else {
                        item.style.display = 'none'; // Hide item
                    }
                });
            });
        });
        // Trigger 'all' filter on page load to show all items initially
        document.querySelector('.filter-buttons .btn[data-filter="all"]')?.click();
    }
});
