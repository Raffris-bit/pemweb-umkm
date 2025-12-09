/**
 * Module Utility Functions untuk Website UMKM
 * File: js/utils.js
 * Berisi fungsi-fungsi utilitas yang dapat digunakan di berbagai modul lain
 * Menggunakan ES6 Module System
 */

// ==================== 
// FUNGSI FORMAT HARGA
// ==================== 

/**
 * Fungsi untuk memformat harga ke format Rupiah Indonesia
 * Contoh: 15000 -> "Rp15.000"
 * @param {number} harga - Nilai harga dalam angka
 * @returns {string} String harga dalam format Rpxx.xxx
 */
export function formatHarga(harga) {
    // Validasi input
    if (typeof harga !== 'number' || isNaN(harga)) {
        return 'Rp0';
    }

    // Format angka dengan titik sebagai pemisah ribuan
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    // Mengembalikan hasil format (Intl.NumberFormat menghasilkan "Rp xx.xxx", kita hapus spasi)
    return formatter.format(harga).replace(/\s/g, '');
}

// ==================== 
// FUNGSI FORMAT PESAN
// ==================== 

/**
 * Fungsi untuk memformat ringkasan pesan kontak
 * Menggunakan template literal ES6
 * @param {string} nama - Nama pengirim
 * @param {string} kategori - Kategori pesan
 * @param {string} pesan - Isi pesan
 * @returns {string} Ringkasan pesan yang sudah diformat
 */
export function formatPesan(nama, kategori, pesan) {
    // Menggunakan template literal untuk membuat string ringkasan
    const ringkasan = `
===== RINGKASAN PESAN =====
Nama Pengirim : ${nama}
Kategori      : ${kategori}
Isi Pesan     : ${pesan}
===========================
Tanggal       : ${getCurrentDate()}
===========================
    `;

    return ringkasan.trim();
}

// ==================== 
// FUNGSI HELPER TAMBAHAN
// ==================== 

/**
 * Fungsi untuk mendapatkan tanggal saat ini dalam format Indonesia
 * @returns {string} Tanggal dalam format DD/MM/YYYY
 */
export function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    return `${day}/${month}/${year}`;
}

/**
 * Fungsi untuk validasi format email sederhana
 * @param {string} email - Alamat email yang akan divalidasi
 * @returns {boolean} true jika format email valid
 */
export function isValidEmail(email) {
    // Regex sederhana untuk validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Fungsi untuk memotong teks yang terlalu panjang
 * @param {string} text - Teks yang akan dipotong
 * @param {number} maxLength - Panjang maksimal
 * @returns {string} Teks yang sudah dipotong dengan "..."
 */
export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}

// Log untuk memastikan modul dimuat dengan benar
console.log('[utils.js] Module loaded successfully');
