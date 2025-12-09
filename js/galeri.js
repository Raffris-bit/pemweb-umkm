/**
 * Module Galeri untuk Website UMKM
 * File: js/galeri.js
 * Menangani interaksi galeri gambar dengan fitur ES6
 * Minimal 5 fitur ES6: let/const, arrow function, template literal, destructuring, spread/rest
 */

// ==================== 
// FITUR ES6 #1: const dan let
// ==================== 

// Data produk galeri menggunakan const (tidak akan di-reassign)
const dataProduk = [
    { id: 1, nama: 'Kopi Susu Gula Aren', deskripsi: 'Perpaduan espresso, susu segar, dan gula aren asli' },
    { id: 2, nama: 'Es Kopi Signature', deskripsi: 'Racikan khas dengan sentuhan rempah Indonesia' },
    { id: 3, nama: 'Americano', deskripsi: 'Espresso murni dengan air panas' },
    { id: 4, nama: 'Cappuccino', deskripsi: 'Espresso dengan foam susu lembut' },
    { id: 5, nama: 'Kopi Tubruk', deskripsi: 'Kopi tradisional dengan cita rasa autentik' },
    { id: 6, nama: 'Latte Art', deskripsi: 'Espresso dengan susu dan seni foam' }
];

// ==================== 
// FITUR ES6 #2: Arrow Function
// ==================== 

// Event listener menggunakan arrow function
document.addEventListener('DOMContentLoaded', () => {
    console.log('[galeri.js] Module loaded and DOM ready');
    
    // Inisialisasi galeri
    initGaleri();
});

/**
 * Fungsi inisialisasi galeri
 * Menggunakan arrow function untuk callback
 */
const initGaleri = () => {
    // Ambil semua item galeri
    const galeriItems = document.querySelectorAll('.galeri-item');
    
    // Pastikan ada item galeri
    if (galeriItems.length === 0) {
        console.log('[galeri.js] No gallery items found');
        return;
    }

    // ==================== 
    // FITUR ES6 #5: Spread Operator
    // ==================== 
    
    // Konversi NodeList ke Array menggunakan spread operator
    const itemsArray = [...galeriItems];
    
    console.log(`[galeri.js] Found ${itemsArray.length} gallery items`);

    // Tambahkan event listener untuk setiap item
    itemsArray.forEach((item, index) => {
        // Event click - tampilkan nama produk
        item.addEventListener('click', () => handleItemClick(item, index));
        
        // Event mouseenter - tambah kelas aktif
        item.addEventListener('mouseenter', () => handleMouseEnter(item));
        
        // Event mouseleave - hapus kelas aktif
        item.addEventListener('mouseleave', () => handleMouseLeave(item));
    });
};

// ==================== 
// HANDLER FUNCTIONS (Arrow Functions)
// ==================== 

/**
 * Handler untuk klik pada item galeri
 * @param {HTMLElement} item - Elemen yang diklik
 * @param {number} index - Index item
 */
const handleItemClick = (item, index) => {
    // Ambil nama produk dari data attribute
    const namaProduk = item.dataset.nama;
    
    // ==================== 
    // FITUR ES6 #3: Template Literal
    // ==================== 
    
    // Ambil info produk dari dataProduk menggunakan find
    const infoProduk = dataProduk.find(produk => produk.nama === namaProduk);
    
    // Buat pesan menggunakan template literal
    let pesanInfo;
    
    if (infoProduk) {
        // ==================== 
        // FITUR ES6 #4: Destructuring
        // ==================== 
        
        // Destructuring object untuk mengambil properti
        const { nama, deskripsi } = infoProduk;
        
        pesanInfo = `
            <h4>${nama}</h4>
            <p>${deskripsi}</p>
            <small>Klik untuk melihat detail produk di halaman Produk</small>
        `;
    } else {
        pesanInfo = `<p>Produk: ${namaProduk}</p>`;
    }
    
    // Tampilkan info di area info-produk
    const infoProdukDiv = document.getElementById('info-produk');
    if (infoProdukDiv) {
        infoProdukDiv.innerHTML = pesanInfo;
    }
    
    // Log ke console menggunakan template literal
    console.log(`[galeri.js] Clicked: ${namaProduk} (index: ${index})`);
};

/**
 * Handler untuk mouse masuk ke item galeri
 * Menambahkan kelas 'aktif' menggunakan classList
 * @param {HTMLElement} item - Elemen target
 */
const handleMouseEnter = (item) => {
    // Tambah kelas 'aktif' untuk efek visual
    item.classList.add('aktif');
    
    // Log untuk debugging
    const namaProduk = item.dataset.nama;
    console.log(`[galeri.js] Mouse enter: ${namaProduk}`);
};

/**
 * Handler untuk mouse keluar dari item galeri
 * Menghapus kelas 'aktif' menggunakan classList
 * @param {HTMLElement} item - Elemen target
 */
const handleMouseLeave = (item) => {
    // Hapus kelas 'aktif'
    item.classList.remove('aktif');
    
    // Log untuk debugging
    const namaProduk = item.dataset.nama;
    console.log(`[galeri.js] Mouse leave: ${namaProduk}`);
};

// ==================== 
// FUNGSI TAMBAHAN DENGAN ES6
// ==================== 

/**
 * Fungsi untuk mendapatkan semua nama produk
 * Menggunakan spread operator dan map
 * @returns {Array} Array nama produk
 */
const getAllProductNames = () => {
    // Menggunakan map dengan arrow function
    return dataProduk.map(produk => produk.nama);
};

/**
 * Fungsi untuk filter produk
 * Menggunakan rest parameter
 * @param {...string} keywords - Kata kunci untuk filter
 * @returns {Array} Array produk yang sesuai
 */
const filterProducts = (...keywords) => {
    // Filter produk yang mengandung salah satu keyword
    return dataProduk.filter(produk => {
        return keywords.some(keyword => 
            produk.nama.toLowerCase().includes(keyword.toLowerCase())
        );
    });
};

// Test fungsi di console
console.log('[galeri.js] All products:', getAllProductNames());
console.log('[galeri.js] Filter "kopi":', filterProducts('kopi'));

// ==================== 
// RINGKASAN FITUR ES6 YANG DIGUNAKAN
// ==================== 
/*
 * 1. let / const - Deklarasi variabel modern
 * 2. Arrow function - Sintaks fungsi singkat (=>)
 * 3. Template literal - String dengan backtick dan ${interpolasi}
 * 4. Destructuring - Ekstrak nilai dari object/array
 * 5. Spread operator - Menyebar array/object (...)
 * 6. Rest parameter - Mengumpulkan argumen menjadi array (...args)
 * 7. Array methods (find, filter, map, some) - Method ES6 untuk array
 * 8. addEventListener - Event listener modern
 * 9. classList - Manipulasi class CSS modern
 */

// Log bahwa modul berhasil dimuat
console.log('[galeri.js] Module initialized with ES6 features');
