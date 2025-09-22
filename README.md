# Arquitectura-de-datos

Aplicación Node.js para hacer las actividades de arquitectura de datos, configurada para desplegarse en Azure.

## 🚀 Características

- ✅ Servidor Express.js configurado
- ✅ Escucha en `process.env.PORT` (compatible con Azure)
- ✅ Endpoints de API básicos
- ✅ Manejo de errores y middlewares
- ✅ Archivos estáticos servidos desde `/public`
- ✅ Configuración para entornos de desarrollo y producción
- ✅ GitHub Actions para CI/CD en Azure

## 📋 Requisitos

- Node.js >= 18.0.0
- npm >= 8.0.0

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/cuentadelospro/Arquitectura-de-datos.git
cd Arquitectura-de-datos
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo de configuración de entorno:
```bash
cp .env.example .env
```

4. Configura las variables de entorno en `.env` según tus necesidades.

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000` (o en el puerto especificado en `PORT`).

## 📡 Endpoints disponibles

- `GET /` - Página principal con información de la aplicación
- `GET /health` - Health check del servicio
- `GET /api/data` - Endpoint para datos de arquitectura (placeholder)

## 🏗️ Estructura del proyecto

```
├── public/          # Archivos estáticos (HTML, CSS, JS, imágenes)
├── views/           # Templates de vistas (EJS)
├── routes/          # Definición de rutas
├── .github/         # Configuración de GitHub Actions
├── server.js        # Archivo principal del servidor
├── package.json     # Configuración del proyecto Node.js
├── .env.example     # Template de variables de entorno
└── README.md        # Este archivo
```

## 🌐 Despliegue en Azure

La aplicación está configurada para desplegarse automáticamente en Azure Web App Service mediante GitHub Actions cuando se hace push a la rama `main`.

### Variables de entorno en Azure

Asegúrate de configurar las siguientes variables en tu Azure Web App:

- `NODE_ENV=production`
- Cualquier otra variable específica de tu aplicación

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.
