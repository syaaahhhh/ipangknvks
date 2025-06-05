document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Hamburger Menu (sudah ada sebelumnya)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const headerContent = document.querySelector('.header-content'); // Ambil elemen header-content

    if (hamburger && navLinks && headerContent) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            headerContent.classList.toggle('active'); // Toggle class 'active' pada header-content
        });

        // Close nav menu when a link is clicked (for single-page scroll or general ux)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                headerContent.classList.remove('active');
            });
        });
    }

    // --- Fungsionalitas Chatbot "Asisten Kang Ipang" ---

    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatCloseButton = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendButton = document.getElementById('chat-send');
    const chatQuickOptions = document.getElementById('chat-quick-options');

    // FAQ data (Pertanyaan dan Jawaban)
    const faqData = [
        {
            keywords: ['layanan', 'maklun', 'jasa', 'apa saja'],
            answer: "Ipangkonveksi menyediakan jasa Pola & Potong, Jahit Konveksi, Sablon/Bordir, dan Produksi Lengkap (Full Package). Anda bisa melihat detailnya di halaman <a href='services.html'>Layanan Maklun</a>."
        },
        {
            keywords: ['alamat', 'lokasi', 'dimana'],
            answer: "Kami berlokasi di Rancapanjang RT03/RW04 Desa. Sukamulya Kec. Rancaekek Kab. Bandung 40394. Anda bisa melihatnya di <a href='contact.html#map-section'>Peta Lokasi</a>."
        },
        {
            keywords: ['pesan', 'pemesanan', 'cara pesan'],
            answer: "Anda bisa memulai proyek dengan menghubungi tim kami melalui WhatsApp atau mengisi formulir di halaman <a href='contact.html'>Kontak</a>. Kami akan memandu Anda melalui prosesnya!"
        },
        {
            keywords: ['custom', 'desain'],
            answer: "Ya, tentu saja! Kami menerima custom desain sesuai kebutuhan brand Anda. Tim kami akan membantu Anda dalam tahap pengembangan desain hingga produksi."
        },
        {
            keywords: ['lama produksi', 'estimasi', 'berapa lama'],
            answer: "Estimasi waktu produksi bervariasi tergantung jenis produk dan kuantitas pesanan. Untuk estimasi lebih akurat, silakan sampaikan detail pesanan Anda kepada kami."
        },
        {
            keywords: ['sylna hijab', 'sylna', 'koleksi', 'brand'],
            answer: "Sylna Hijab adalah brand eksklusif Ipangkonveksi yang menghadirkan koleksi busana muslim dan hijab berkualitas tinggi. Anda bisa melihat koleksinya di halaman <a href='products.html'>Koleksi Kami</a>."
        },
        {
            keywords: ['contoh produk', 'portofolio', 'hasil produksi'],
            answer: "Tentu! Anda bisa melihat beberapa contoh produk yang pernah kami kerjakan dan klien kami di halaman <a href='clients.html'>Klien Kami</a>."
        },
        {
            keywords: ['terima kasih', 'makasih'],
            answer: "Sama-sama! Ada lagi yang bisa Asisten Kang Ipang bantu?"
        },
        {
            keywords: ['halo', 'hai', 'hi', 'salam'],
            answer: "Halo juga! Senang bisa membantu Anda. Ada pertanyaan seputar layanan kami?"
        },
        {
            keywords: ['tim', 'hubungi'],
            answer: "Tentu, Anda bisa menghubungi tim kami melalui WhatsApp di <a href='https://wa.me/62881023706063' target='_blank'>0881-0237-06063</a> atau mengisi formulir di halaman <a href='contact.html'>Kontak</a>."
        }
    ];

    // Opsi Cepat (untuk tombol-tombol)
    const quickOptions = [
        { text: "Layanan Maklun", value: "layanan maklun" },
        { text: "Koleksi Kami", value: "sylna hijab" },
        { text: "Tentang Ipangkonveksi", value: "tentang kami" },
        { text: "Hubungi Tim", value: "hubungi tim" },
        { text: "Lokasi Kami", value: "alamat" }
    ];

    // Fungsi untuk menambahkan pesan ke jendela chat
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        if (sender === 'bot') {
            messageElement.classList.add('bot-message');
            messageElement.innerHTML = text; // Gunakan innerHTML untuk tautan
        } else {
            messageElement.classList.add('user-message');
            messageElement.textContent = text;
        }
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll ke bawah
    }

    // Fungsi untuk menampilkan opsi cepat
    function showQuickOptions() {
        chatQuickOptions.innerHTML = ''; // Bersihkan opsi sebelumnya
        quickOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.addEventListener('click', () => {
                handleUserMessage(option.value);
                chatQuickOptions.innerHTML = ''; // Sembunyikan opsi setelah diklik
            });
            chatQuickOptions.appendChild(button);
        });
    }

    // Fungsi untuk memproses pesan pengguna
    function handleUserMessage(message) {
        addMessage(message, 'user');
        chatInput.value = ''; // Kosongkan input
        chatQuickOptions.innerHTML = ''; // Sembunyikan opsi cepat saat pengguna mengetik

        const lowerCaseMessage = message.toLowerCase();
        let botResponse = "Maaf, saya tidak mengerti pertanyaan Anda. Bisakah Anda mengulanginya atau pilih salah satu opsi di bawah ini?";
        let foundMatch = false;

        // Cari jawaban di FAQ
        for (const faq of faqData) {
            for (const keyword of faq.keywords) {
                if (lowerCaseMessage.includes(keyword)) {
                    botResponse = faq.answer;
                    foundMatch = true;
                    break; // Keluar dari loop keyword
                }
            }
            if (foundMatch) {
                break; // Keluar dari loop faqData
            }
        }

        // Tampilkan jawaban bot
        setTimeout(() => {
            addMessage(botResponse, 'bot');
            // Jika bot tidak menemukan jawaban, tawarkan opsi fallback atau opsi cepat
            if (!foundMatch || botResponse.includes("Maaf, saya tidak mengerti")) {
                setTimeout(showQuickOptions, 500); // Tampilkan opsi cepat lagi setelah sedikit delay
            }
        }, 500); // Delay simulasi bot berpikir
    }

    // Event listener untuk tombol toggle chatbot
    if (chatbotToggle && chatbotWindow && chatCloseButton && chatMessages && chatInput && chatSendButton && chatQuickOptions) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            if (!chatbotWindow.classList.contains('hidden')) {
                // Sapaan awal dan opsi cepat saat chat dibuka
                setTimeout(() => {
                    addMessage("Halo! Selamat datang di Ipangkonveksi. Saya Asisten Kang Ipang, ada yang bisa saya bantu?", 'bot');
                }, 300); // Delay sapaan awal
                setTimeout(showQuickOptions, 1000); // Tampilkan opsi cepat setelah sapaan
            } else {
                // Bersihkan chat dan opsi saat ditutup
                chatMessages.innerHTML = '';
                chatQuickOptions.innerHTML = '';
            }
        });

        // Event listener untuk tombol tutup chat
        chatCloseButton.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden');
            chatMessages.innerHTML = ''; // Bersihkan pesan saat ditutup
            chatQuickOptions.innerHTML = ''; // Bersihkan opsi saat ditutup
        });

        // Event listener untuk tombol kirim pesan
        chatSendButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                handleUserMessage(message);
            }
        });

        // Event listener untuk input field (tekan Enter)
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                chatSendButton.click(); // Picu klik tombol kirim
            }
        });
    } else {
        console.error("Chatbot elements not found. Please check your HTML structure.");
    }
});
