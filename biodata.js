require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/biodata', function (req, res) {
    const nama = req.query.nama;
    const tempatLahir = req.query['tempat-lahir'];
    const tanggalLahir = req.query['tanggal-lahir'];
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    });
});

app.post('/biodata', function (req, res) {
    const nama = req.body.nama;
    const tempatLahir = req.body['tempat-lahir'];
    const tanggalLahir = req.body['tanggal-lahir'];
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);