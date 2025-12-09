/**
 * Module Newsletter Handler untuk Website UMKM
 * File: js/newsletter.js
 * Menangani interaksi checkbox langganan newsletter
 * Menggunakan ES6 Module System
 */

// ==================== 
// EVENT LISTENER DOM CONTENT LOADED
// ==================== 

document.addEventListener('DOMContentLoaded', () => {
    // Log untuk debugging
    console.log('[newsletter.js] Module loaded and DOM ready');

    // Ambil elemen checkbox newsletter
    const checkboxNewsletter = document.getElementById('newsletter');

    // Pastikan checkbox ada di halaman ini
    if (checkboxNewsletter) {
        // Tambahkan event listener untuk perubahan checkbox
        checkboxNewsletter.addEventListener('change', handleNewsletterChange);
        
        console.log('[newsletter.js] Newsletter checkbox event listener attached');
    }
});

// ==================== 
// HANDLER CHECKBOX CHANGE
// ==================== 

/**
 * Fungsi untuk menangani perubahan checkbox newsletter
 * @param {Event} event - Event change
 */
function handleNewsletterChange(event) {
    // Cek apakah checkbox dicentang atau tidak
    const isChecked = event.target.checked;

    if (isChecked) {
        // Checkbox dicentang - user berlangganan
        alert('Terima kasih telah berlangganan newsletter Kopi Starling Yanto!\n\nAnda akan menerima update terbaru tentang produk dan promo kami.');
        console.log('[newsletter.js] User subscribed to newsletter');
    } else {
        // Checkbox di-uncheck - user batal berlangganan
        alert('Langganan newsletter dibatalkan.\n\nAnda tidak akan menerima email promo dari kami.');
        console.log('[newsletter.js] User unsubscribed from newsletter');
    }
}

// Log bahwa modul berhasil dimuat
console.log('[newsletter.js] Module initialized');
