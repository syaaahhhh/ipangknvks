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
    const headerContent = document.querySelector('.header-content'); // Ambil elemen header-content
    const ctaButton = document.querySelector('.btn-cta-header'); // Dapatkan tombol CTA terpisah

    if (hamburger && navLinks && headerContent) { // Pastikan semua elemen ditemukan
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            headerContent.classList.toggle('active'); // Penting: toggle class 'active' di header-content juga

            // Toggle 'hidden' class pada tombol CTA terpisah
            if (ctaButton) {
                ctaButton.classList.toggle('hidden');
            }
        });

        // Tutup menu navigasi saat link diklik (untuk mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    headerContent.classList.remove('active'); // Hapus kelas 'active' dari header-content

                    // Jika menu aktif dan ditutup, pastikan tombol CTA terlihat
                    if (ctaButton && ctaButton.classList.contains('hidden')) {
                        ctaButton.classList.remove('hidden');
                    }
                }
            });
        });
    }

    // Portfolio filtering (hanya jika Anda masih memiliki halaman portofolio)
    // Jika Anda sudah menghapus portfolio.html, Anda bisa menghapus bagian ini
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Hapus kelas 'active' dari semua tombol
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Tambahkan kelas 'active' ke tombol yang diklik
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block'; // Tampilkan item
                    } else {
                        item.style.display = 'none'; // Sembunyikan item
                    }
                });
            });
        });
        // Trigger 'all' filter on page load to show all items initially
        document.querySelector('.filter-buttons .btn[data-filter="all"]')?.click();
    }
});
