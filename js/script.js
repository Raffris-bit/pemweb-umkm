/**
 * JavaScript Dasar untuk Website UMKM Kopi Starling Yanto
 * File: js/script.js
 * Pertemuan 9-10: JavaScript Dasar, Variabel, Operator, Percabangan, Perulangan, Fungsi
 */

// ==================== 
// ALERT SAMBUTAN
// ==================== 
// Menampilkan alert selamat datang saat halaman dimuat (hanya di index.html)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/website-umkm/')) {
    alert('Selamat datang di Website Profil UMKM Kopi Starling Yanto!');
}

// ==================== 
// VARIABEL DAN OPERATOR
// ==================== 

// Menggunakan const untuk nilai tetap (nama UMKM)
const namaUMKM = "Kopi Starling Yanto";
console.log("Nama UMKM: " + namaUMKM);

// Menggunakan let untuk nilai yang bisa diubah
let produkAwal = "Kopi Susu";
console.log("Produk Awal: " + produkAwal);

// Modifikasi dengan operator +=
produkAwal += " Gula Aren";
console.log("Produk setelah modifikasi: " + produkAwal);

// Contoh variabel lain
let hargaDefault = 15000; // Harga default dalam rupiah
console.log("Harga Default: Rp" + hargaDefault);

// ==================== 
// FUNGSI UNTUK PEMESANAN
// ==================== 

/**
 * Fungsi untuk menghitung total belanja
 * @param {number} harga - Harga per item
 * @param {number} jumlah - Jumlah item
 * @returns {number} Total harga
 */
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

/**
 * Fungsi untuk validasi form pemesanan
 * Dipanggil saat form pemesanan di-submit (produk.html)
 * @returns {boolean} true jika valid, false jika tidak
 */
function cekForm() {
    // Mengambil nilai input
    var namaProduk = document.getElementById('namaProduk').value.trim();
    var jumlah = document.getElementById('jumlah').value;

    // Validasi nama produk tidak kosong
    if (namaProduk === '') {
        alert('Error: Nama produk tidak boleh kosong!');
        return false; // Mencegah submit
    }

    // Validasi jumlah tidak kosong
    if (jumlah === '') {
        alert('Error: Jumlah tidak boleh kosong!');
        return false;
    }

    // Konversi jumlah ke number
    jumlah = parseInt(jumlah);

    // Validasi jumlah harus lebih dari 0
    if (jumlah <= 0) {
        alert('Error: Jumlah harus lebih dari 0!');
        return false;
    }

    // Jika semua validasi berhasil, hitung total
    var hargaPerItem = hargaDefault; // Menggunakan harga default
    var totalBelanja = hitungTotal(hargaPerItem, jumlah);

    // Tampilkan alert sukses dengan total
    alert('Pesanan berhasil!\n\n' +
          'Produk: ' + namaProduk + '\n' +
          'Jumlah: ' + jumlah + '\n' +
          'Harga per item: Rp' + hargaPerItem.toLocaleString('id-ID') + '\n' +
          'Total Belanja: Rp' + totalBelanja.toLocaleString('id-ID'));

    // Reset form setelah berhasil
    document.getElementById('formPemesanan').reset();

    return false; // Mencegah form submit ke server (karena ini contoh)
}

// ==================== 
// FUNGSI PERCABANGAN USIA
// ==================== 

/**
 * Fungsi untuk mengecek kategori usia pelanggan
 * Menggunakan if / else if / else
 */
function cekKategoriUsia() {
    // Mengambil nilai input usia
    var inputUsia = document.getElementById('inputUsia').value;
    var hasilElement = document.getElementById('hasilKategori');

    // Validasi input tidak kosong
    if (inputUsia === '') {
        hasilElement.innerText = 'Silakan masukkan usia terlebih dahulu!';
        return;
    }

    // Konversi ke number
    var usia = parseInt(inputUsia);

    // Validasi usia tidak negatif
    if (usia < 0) {
        hasilElement.innerText = 'Usia tidak boleh negatif!';
        return;
    }

    // Percabangan untuk menentukan kategori
    var kategori;
    var promo;

    if (usia < 13) {
        // Usia di bawah 13 tahun
        kategori = 'Anak-anak';
        promo = 'Dapatkan diskon 20% untuk menu anak!';
    } else if (usia >= 13 && usia <= 17) {
        // Usia 13-17 tahun
        kategori = 'Remaja';
        promo = 'Paket pelajar tersedia dengan harga spesial!';
    } else if (usia >= 18 && usia <= 60) {
        // Usia 18-60 tahun
        kategori = 'Dewasa';
        promo = 'Nikmati promo buy 1 get 1 setiap hari Jumat!';
    } else {
        // Usia di atas 60 tahun
        kategori = 'Lansia';
        promo = 'Dapatkan diskon khusus 15% untuk pelanggan senior!';
    }

    // Menampilkan hasil ke pengguna
    hasilElement.innerText = 'Kategori Anda: ' + kategori + '\n' + promo;
}

// ==================== 
// CONTOH PERULANGAN SEDERHANA
// ==================== 

/**
 * Fungsi untuk menampilkan daftar menu (contoh perulangan)
 */
function tampilkanDaftarMenu() {
    // Array berisi daftar menu
    var daftarMenu = [
        'Kopi Susu Gula Aren',
        'Es Kopi Signature',
        'Americano',
        'Cappuccino',
        'Kopi Tubruk'
    ];

    console.log('=== Daftar Menu Kopi Starling Yanto ===');
    
    // Perulangan menggunakan for
    for (var i = 0; i < daftarMenu.length; i++) {
        console.log((i + 1) + '. ' + daftarMenu[i]);
    }
}

// Jalankan fungsi untuk menampilkan menu di console
tampilkanDaftarMenu();

// ==================== 
// FUNGSI UTILITAS TAMBAHAN
// ==================== 

/**
 * Fungsi untuk format angka ke format rupiah
 * @param {number} angka - Angka yang akan diformat
 * @returns {string} String dalam format Rpxx.xxx
 */
function formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

// Contoh penggunaan
console.log('Contoh format harga: ' + formatRupiah(15000));
console.log('Contoh format harga: ' + formatRupiah(150000));

// ==================== 
// LOG INFO WEBSITE
// ==================== 

console.log('========================================');
console.log('Website Profil UMKM: ' + namaUMKM);
console.log('Dibuat untuk Tugas Pemrograman Web 1');
console.log('========================================');
