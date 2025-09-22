# Arquitectura de Datos

Aplicación Node.js para realizar actividades de arquitectura de datos, compatible con Azure App Service.

## 🚀 Características

- ✅ Compatible con Azure App Service
- ✅ Puerto dinámico configurado con `process.env.PORT`
- ✅ Estructura estándar de Node.js
- ✅ Health check endpoint para monitoreo
- ✅ Interfaz web básica incluida

## 📦 Instalación

```bash
npm install
```

## 🏃‍♂️ Ejecución

### Desarrollo local
```bash
npm start
```

### Con puerto personalizado
```bash
PORT=3000 npm start
```

## 🏗️ Estructura del Proyecto

```
├── server.js          # Servidor principal
├── package.json       # Configuración del proyecto
├── public/            # Archivos estáticos
│   └── style.css     # Estilos CSS
├── web.config        # Configuración IIS para Azure
└── README.md         # Este archivo
```

## 🌐 Endpoints

- `GET /` - Página principal de la aplicación
- `GET /health` - Health check endpoint
- `GET /public/*` - Archivos estáticos

## ☁️ Despliegue en Azure

Esta aplicación está configurada para ser compatible con Azure App Service:

1. La aplicación utiliza `process.env.PORT` para el puerto
2. Incluye `web.config` para configuración de IIS
3. Tiene un health check endpoint en `/health`
4. Los archivos estáticos se sirven desde `/public`

## 📋 Requisitos

- Node.js >= 14.0.0
- npm
