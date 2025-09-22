// Archivo principal de tu app Node.js, configurado para Azure App Service
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(/* ... código HTML ... */);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        port: port,
        uptime: process.uptime()
    });
});

app.use('*', (req, res) => {
    res.status(404).send("404 - Página no encontrada");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    console.log(`Aplicación disponible en: http://localhost:${port}`);
});
