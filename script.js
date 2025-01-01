function my(event) {
    var password = document.querySelector('input[name="password"]').value;

    if (password === '') {
        alert('Silahkan masukan kata sandi terlebih dahulu');
        event.preventDefault(); // Mencegah pengalihan ke link home.html
    } else {
        document.querySelector('input[name="email"]').value = '';
        document.querySelector('input[name="password"]').value = '';
        alert('Selamat Datang di Website Kami');
    }
}