const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para servir archivos estáticos
app.use(express.static('public'));
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
                    margin: 0 auto; 
                    padding: 20px; 
                    background-color: #f5f5f5; 
                }
                .container { 
                    background: white; 
                    padding: 30px; 
                    border-radius: 8px; 
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
                }
                h1 { 
                    color: #333; 
                    text-align: center; 
                    border-bottom: 3px solid #007acc; 
                    padding-bottom: 10px; 
                }
                p { 
                    color: #666; 
                    line-height: 1.6; 
                    text-align: center; 
                }
                .status { 
                    background: #e7f3ff; 
                    border: 1px solid #007acc; 
                    padding: 15px; 
                    border-radius: 4px; 
                    margin-top: 20px; 
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Arquitectura de Datos</h1>
                <p>Aplicación para hacer las actividades de arquitectura de datos</p>
                <div class="status">
                    <strong>Estado:</strong> Aplicación ejecutándose correctamente en Azure App Service
                    <br><strong>Puerto:</strong> ${PORT}
                </div>
            </div>
        </body>
        </html>
    `);
});

// Ruta para health check (útil para Azure App Service)
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        port: PORT
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Página no encontrada</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #d32f2f; }
                a { color: #007acc; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>404 - Página no encontrada</h1>
            <p>La página que buscas no existe.</p>
            <a href="/">Volver al inicio</a>
        </body>
        </html>
    `);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
    console.log(`Aplicación disponible en: http://localhost:${PORT}`);
});

module.exports = app;