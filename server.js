// Archivo principal de tu app Node.js, configurado para Azure App Service
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Arquitectura de Datos</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="navbar">
                <h1>🏗️ Arquitectura de Datos</h1>
            </div>
            <div class="container">
                <div class="card">
                    <h2>¡Bienvenido!</h2>
                    <p>Aplicación Node.js para actividades de arquitectura de datos, desplegada en Azure App Service.</p>
                    <p>Estado de la aplicación: <span style="color: #27ae60; font-weight: bold;">✅ Funcionando correctamente</span></p>
                    <a href="/health" class="btn">Ver Estado de Salud</a>
                </div>
                <div class="card">
                    <h3>📋 Características</h3>
                    <ul>
                        <li>✅ Compatible con Azure App Service</li>
                        <li>✅ Puerto dinámico configurado</li>
                        <li>✅ Estructura estándar de Node.js</li>
                        <li>✅ Health check endpoint para monitoreo</li>
                        <li>✅ Despliegue automático desde GitHub</li>
                    </ul>
                </div>
            </div>
        </body>
        </html>
    `);
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
