const express = require('express');
const path = require('path');

const app = express();

// Configurar el puerto usando la variable de entorno para Azure App Service
const port = process.env.PORT || 8080;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Arquitectura de Datos</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .container {
                    background-color: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                    text-align: center;
                }
                .info {
                    background-color: #e3f2fd;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🏗️ Arquitectura de Datos</h1>
                <p>Bienvenido a la aplicación para realizar actividades de arquitectura de datos.</p>
                
                <div class="info">
                    <h3>ℹ️ Información del Servidor</h3>
                    <p><strong>Puerto:</strong> ${port}</p>
                    <p><strong>Entorno:</strong> ${process.env.NODE_ENV || 'development'}</p>
                    <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
                </div>
                
                <h3>🚀 Estado de la Aplicación</h3>
                <p>✅ Servidor ejecutándose correctamente</p>
                <p>✅ Compatible con Azure App Service</p>
                <p>✅ Puerto dinámico configurado</p>
            </div>
        </body>
        </html>
    `);
});

// Ruta de salud para Azure
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        port: port,
        uptime: process.uptime()
    });
});

// Manejar rutas no encontradas
app.use('*', (req, res) => {
    res.status(404).send(`
        <h1>404 - Página no encontrada</h1>
        <p><a href="/">Volver al inicio</a></p>
    `);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    console.log(`Aplicación disponible en: http://localhost:${port}`);
});