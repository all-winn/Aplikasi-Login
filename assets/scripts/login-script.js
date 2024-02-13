/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat variabel untuk setiap element */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /* Mendapatkan nilai dari masing-masing input ketika tombol ditekan*/
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value; 
  
    /* Memastikan nilai email dan password sesuai nilai yang tersimpan */
    if (email == expectedEmail && password == expectedPassword){

      /* Jika sesuai maka program akan berpindah ke halaman home */
      goToHome();
    } else {

      /* Namun jika tidak sesuai maka menampilkan informasi input salah */
      showPopUp();
    }
});
