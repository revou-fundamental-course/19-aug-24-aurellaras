const form = document.getElementById('contact-form'); 
const resultDiv = document.getElementById('form-result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tanggalLahir = document.getElementById('tanggallahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('message').value;

    resultDiv.innerHTML = `
        <p>Nama: ${name}</p>
        <p>Tanggal Lahir: ${tanggalLahir}</p>
        <p>Jenis Kelamin: ${jenisKelamin}</p>
        <p>Pesan: ${pesan}</p>
    `;
});