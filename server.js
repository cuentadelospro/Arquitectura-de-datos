require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de vistas (opcional, usando EJS por defecto)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas principales
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la aplicación de Arquitectura de Datos',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});

// Ruta para renderizar vista EJS (ejemplo)
app.get('/dashboard', (req, res) => {
    res.render('index', {
        title: 'Dashboard - Arquitectura de Datos',
        message: 'Bienvenido al dashboard de arquitectura de datos',
        uptime: Math.floor(process.uptime()),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Ruta para información de salud
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Importar rutas
const dataRoutes = require('./routes/data');

// Usar rutas organizadas
app.use('/api/data', dataRoutes);

// Ruta para datos de arquitectura (mantenida para compatibilidad)
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Endpoint para actividades de arquitectura de datos',
        data: [],
        available_endpoints: [
            '/api/data/schemas',
            '/api/data/metrics',
            '/api/data/validate (POST)'
        ]
    });
});

// Middleware para manejar rutas no encontradas
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        path: req.originalUrl
    });
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Error interno del servidor'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
    console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;