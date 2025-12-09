/**
 * Module Form Handler untuk Website UMKM
 * File: js/form.js
 * Menangani validasi dan submit form kontak
 * Menggunakan ES6 Module System
 */

// Import fungsi dari utils.js
import { formatPesan, isValidEmail } from './utils.js';

// ==================== 
// EVENT LISTENER DOM CONTENT LOADED
// ==================== 

document.addEventListener('DOMContentLoaded', () => {
    // Log untuk debugging
    console.log('[form.js] Module loaded and DOM ready');

    // Ambil elemen form
    const formKontak = document.getElementById('formKontak');

    // Pastikan form ada di halaman ini
    if (formKontak) {
        // Tambahkan event listener untuk submit form
        formKontak.addEventListener('submit', handleFormSubmit);

        // Tambahkan validasi real-time untuk setiap field
        setupRealtimeValidation();
    }
});

// ==================== 
// HANDLER SUBMIT FORM
// ==================== 

/**
 * Fungsi untuk menangani submit form kontak
 * @param {Event} event - Event submit
 */
function handleFormSubmit(event) {
    // Mencegah submit default
    event.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const kategori = document.getElementById('kategori').value;
    const pesan = document.getElementById('pesan').value.trim();

    // Lakukan validasi
    let isValid = true;

    // Validasi nama
    if (nama === '') {
        showError('errorNama', 'Nama wajib diisi!');
        isValid = false;
    } else {
        clearError('errorNama');
    }

    // Validasi email
    if (email === '') {
        showError('errorEmail', 'Email wajib diisi!');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('errorEmail', 'Format email tidak valid!');
        isValid = false;
    } else {
        clearError('errorEmail');
    }

    // Validasi kategori
    if (kategori === '') {
        showError('errorKategori', 'Pilih kategori pesan!');
        isValid = false;
    } else {
        clearError('errorKategori');
    }

    // Validasi pesan (minimal 10 karakter)
    if (pesan === '') {
        showError('errorPesan', 'Pesan wajib diisi!');
        isValid = false;
    } else if (pesan.length < 10) {
        showError('errorPesan', 'Pesan minimal 10 karakter!');
        isValid = false;
    } else {
        clearError('errorPesan');
    }

    // Jika validasi berhasil
    if (isValid) {
        // Gunakan fungsi formatPesan dari utils.js
        const ringkasan = formatPesan(nama, kategori, pesan);
        
        // Tampilkan alert sukses
        alert('Pesan berhasil dikirim!\n\n' + ringkasan);

        // Tampilkan ringkasan di halaman
        tampilkanRingkasan(ringkasan);

        // Reset form
        document.getElementById('formKontak').reset();

        // Log ke console
        console.log('[form.js] Form submitted successfully');
        console.log(ringkasan);
    }
}

// ==================== 
// FUNGSI VALIDASI REAL-TIME
// ==================== 

/**
 * Setup validasi real-time untuk setiap field
 */
function setupRealtimeValidation() {
    // Validasi nama saat blur
    const namaInput = document.getElementById('nama');
    if (namaInput) {
        namaInput.addEventListener('blur', () => {
            if (namaInput.value.trim() === '') {
                showError('errorNama', 'Nama wajib diisi!');
            } else {
                clearError('errorNama');
            }
        });
    }

    // Validasi email saat blur
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const email = emailInput.value.trim();
            if (email === '') {
                showError('errorEmail', 'Email wajib diisi!');
            } else if (!isValidEmail(email)) {
                showError('errorEmail', 'Format email tidak valid!');
            } else {
                clearError('errorEmail');
            }
        });
    }

    // Validasi kategori saat change
    const kategoriSelect = document.getElementById('kategori');
    if (kategoriSelect) {
        kategoriSelect.addEventListener('change', () => {
            if (kategoriSelect.value === '') {
                showError('errorKategori', 'Pilih kategori pesan!');
            } else {
                clearError('errorKategori');
            }
        });
    }

    // Validasi pesan saat input
    const pesanTextarea = document.getElementById('pesan');
    if (pesanTextarea) {
        pesanTextarea.addEventListener('input', () => {
            const pesan = pesanTextarea.value.trim();
            if (pesan === '') {
                showError('errorPesan', 'Pesan wajib diisi!');
            } else if (pesan.length < 10) {
                showError('errorPesan', `Pesan minimal 10 karakter (${pesan.length}/10)`);
            } else {
                clearError('errorPesan');
            }
        });
    }
}

// ==================== 
// FUNGSI HELPER
// ==================== 

/**
 * Menampilkan pesan error pada span tertentu
 * @param {string} spanId - ID span untuk error
 * @param {string} message - Pesan error
 */
function showError(spanId, message) {
    const span = document.getElementById(spanId);
    if (span) {
        span.textContent = message;
    }
}

/**
 * Menghapus pesan error dari span tertentu
 * @param {string} spanId - ID span untuk error
 */
function clearError(spanId) {
    const span = document.getElementById(spanId);
    if (span) {
        span.textContent = '';
    }
}

/**
 * Menampilkan ringkasan pesan di halaman
 * @param {string} ringkasan - Teks ringkasan
 */
function tampilkanRingkasan(ringkasan) {
    const container = document.getElementById('ringkasanPesan');
    const isiRingkasan = document.getElementById('isiRingkasan');
    
    if (container && isiRingkasan) {
        // Ganti newline dengan <br> untuk tampilan HTML
        isiRingkasan.innerHTML = ringkasan.replace(/\n/g, '<br>');
        container.style.display = 'block';
    }
}

// Log bahwa modul berhasil dimuat
console.log('[form.js] Module initialized');
