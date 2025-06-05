document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const headerContent = document.querySelector('.header-content'); 

    if (hamburger && navLinks && headerContent) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            headerContent.classList.toggle('active'); 
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                headerContent.classList.remove('active');
            });
        });
    }

    // --- Fungsionalitas Chatbot "Asisten Kang Ipang" ---

    // Mengambil referensi elemen-elemen chatbot dari HTML berdasarkan ID mereka.
    // Penting: Pastikan ID ini PERSIS sama di file HTML Anda.
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatCloseButton = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendButton = document.getElementById('chat-send');
    const chatQuickOptions = document.getElementById('chat-quick-options');

    // TEST INI UNTUK MEMASTIKAN JS BERJALAN DAN ELEMEN DITEMUKAN
    // Jika Anda tidak melihat pesan ini di Console, berarti ada masalah lebih awal.
    if (chatbotToggle && chatbotWindow) {
        console.log("Chatbot elements found! JavaScript is likely running.");
    } else {
        console.error("ERROR: Chatbot elements NOT found. Check HTML IDs or script loading.");
    }

    // Data Pertanyaan dan Jawaban Umum (FAQ) untuk bot
    const faqData = [
        {
            keywords: ['layanan', 'maklun', 'jasa', 'apa saja'],
            answer: "Ipangkonveksi menyediakan jasa Pola & Potong, Jahit Konveksi, Sablon/Bordir, dan Produksi Lengkap (Full Package). Anda bisa melihat detailnya di halaman <a href='services.html'>Layanan Maklun</a>."
        },
        {
            keywords: ['alamat', 'lokasi', 'dimana', 'tempat'],
            answer: "Kami berlokasi di Rancapanjang RT03/RW04 Desa. Sukamulya Kec. Rancaekek Kab. Bandung 40394. Anda bisa melihatnya di <a href='contact.html#map-section'>Peta Lokasi</a>."
        },
        {
            keywords: ['pesan', 'pemesanan', 'cara pesan', 'order'],
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
            keywords: ['contoh produk', 'portofolio', 'hasil produksi', 'klien'],
            answer: "Tentu! Anda bisa melihat beberapa contoh produk yang pernah kami kerjakan dan klien kami di halaman <a href='clients.html'>Klien Kami</a>."
        },
        {
            keywords: ['terima kasih', 'makasih', 'oke'],
            answer: "Sama-sama! Ada lagi yang bisa Asisten Kang Ipang bantu?"
        },
        {
            keywords: ['halo', 'hai', 'hi', 'salam'],
            answer: "Halo juga! Senang bisa membantu Anda. Ada pertanyaan seputar layanan kami?"
        },
        {
            keywords: ['tim', 'hubungi', 'whatsapp', 'email', 'kontak'],
            answer: "Tentu, Anda bisa menghubungi tim kami melalui WhatsApp di <a href='https://wa.me/62881023706063' target='_blank'>0881-0237-06063</a> atau mengisi formulir di halaman <a href='contact.html'>Kontak</a>."
        },
        {
            keywords: ['tentang kami', 'profil', 'sejarah'],
            answer: "Ipangkonveksi adalah mitra maklun konveksi terkemuka di Bandung, berkomitmen pada kualitas dan presisi jahitan. Didirikan dengan fokus pada kepuasan klien dan kualitas terbaik. Selengkapnya di halaman <a href='about.html'>Tentang Kami</a>."
        }
    ];

    // Opsi Cepat untuk tombol-tombol yang muncul di chat
    const quickOptions = [
        { text: "Layanan Maklun", value: "layanan maklun" },
        { text: "Koleksi Kami", value: "sylna hijab" },
        { text: "Tentang Ipangkonveksi", value: "tentang kami" },
        { text: "Hubungi Tim", value: "hubungi tim" },
        { text: "Lokasi Kami", value: "alamat" }
    ];

    // Fungsi untuk menambahkan pesan ke jendela chat (baik dari bot maupun pengguna)
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        if (sender === 'bot') {
            messageElement.classList.add('bot-message');
            // Menggunakan innerHTML agar tautan HTML bisa dirender
            messageElement.innerHTML = text;
        } else {
            messageElement.classList.add('user-message');
            // Menggunakan textContent untuk mencegah injeksi HTML dari input pengguna
            messageElement.textContent = text;
        }
        chatMessages.appendChild(messageElement);
        // Otomatis scroll ke bawah agar pesan terbaru terlihat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Fungsi untuk menampilkan tombol-tombol opsi cepat
    function showQuickOptions() {
        chatQuickOptions.innerHTML = ''; // Bersihkan opsi sebelumnya
        quickOptions.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = option.text;
            button.addEventListener('click', () => {
                // Saat tombol opsi cepat diklik, proses seperti pesan pengguna
                handleUserMessage(option.value);
                chatQuickOptions.innerHTML = ''; // Sembunyikan opsi setelah diklik
            });
            chatQuickOptions.appendChild(button);
        });
    }

    // Fungsi utama untuk memproses pesan yang dikirim pengguna
    function handleUserMessage(message) {
        addMessage(message, 'user'); // Tampilkan pesan pengguna di chat
        chatInput.value = ''; // Kosongkan area input
        chatQuickOptions.innerHTML = ''; // Sembunyikan opsi cepat saat pengguna mengetik/mengirim pesan

        const lowerCaseMessage = message.toLowerCase();
        let botResponse = "Maaf, Asisten Kang Ipang tidak mengerti pertanyaan Anda. Bisakah Anda mengulanginya atau pilih salah satu opsi di bawah ini?";
        let foundMatch = false;

        // Iterasi melalui data FAQ untuk mencari kata kunci yang cocok
        for (const faq of faqData) {
            for (const keyword of faq.keywords) {
                // Periksa apakah pesan pengguna mengandung kata kunci
                if (lowerCaseMessage.includes(keyword)) {
                    botResponse = faq.answer;
                    foundMatch = true;
                    break; // Keluar dari loop keyword setelah menemukan kecocokan
                }
            }
            if (foundMatch) {
                break; // Keluar dari loop faqData setelah menemukan kecocokan
            }
        }

        // Tampilkan jawaban bot setelah sedikit delay untuk simulasi "berpikir"
        setTimeout(() => {
            addMessage(botResponse, 'bot');
            // Jika bot tidak menemukan jawaban yang spesifik, tampilkan lagi opsi cepat
            if (!foundMatch || botResponse.includes("Maaf, Asisten Kang Ipang tidak mengerti")) {
                setTimeout(showQuickOptions, 500); // Tampilkan opsi cepat lagi setelah sedikit delay
            }
        }, 500); 
    }

    // Mengatur Event Listeners untuk interaksi chatbot
    // Memastikan semua elemen ada sebelum menambahkan event listener
    if (chatbotToggle && chatbotWindow && chatCloseButton && chatMessages && chatInput && chatSendButton && chatQuickOptions) {
        // Event listener untuk tombol toggle (membuka/menutup chatbot)
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden'); // Mengubah visibilitas jendela chat
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

        // Event listener untuk tombol tutup chat (di dalam jendela chat)
        chatCloseButton.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden'); // Sembunyikan jendela chat
            chatMessages.innerHTML = ''; // Bersihkan pesan saat ditutup
            chatQuickOptions.innerHTML = ''; // Bersihkan opsi saat ditutup
        });

        // Event listener untuk tombol kirim pesan
        chatSendButton.addEventListener('click', () => {
            const message = chatInput.value.trim(); // Ambil teks dari input
            if (message) {
                handleUserMessage(message); // Proses pesan jika tidak kosong
            }
        });

        // Event listener untuk input field (mendengarkan tombol Enter)
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                chatSendButton.click(); // Picu klik tombol kirim saat Enter ditekan
            }
        });
    } else {
        // Pesan error di console jika ada elemen HTML chatbot yang tidak ditemukan
        console.error("Chatbot elements not found. Please check your HTML structure or ensure scripts.js is loaded correctly.");
    }
});
