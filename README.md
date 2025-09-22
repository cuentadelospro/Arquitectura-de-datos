# Crochet Creativo - Aplicación Web

Una aplicación web sencilla desarrollada en Flask para mostrar servicios de bordados personalizados. La aplicación está diseñada para desplegarse en Azure App Service.

## Características

- **Página Principal**: Información básica y bienvenida a los servicios de crochet
- **Bordados Personalizados**: Explicación detallada de servicios de bordado personalizado
- **Precios**: Tabla completa de precios para diferentes tipos y tamaños de bordados

## Estructura del Proyecto

```
├── app.py                 # Aplicación principal Flask con rutas
├── requirements.txt       # Dependencias de Python (Flask)
├── templates/            # Plantillas HTML
│   ├── index.html        # Página de inicio
│   ├── bordados.html     # Página de bordados personalizados
│   └── precios.html      # Página de precios
└── README.md            # Este archivo
```

## Instalación y Uso

### Requisitos Previos
- Python 3.7 o superior
- pip (gestor de paquetes de Python)

### Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/cuentadelospro/Arquitectura-de-datos.git
cd Arquitectura-de-datos
```

2. Instala las dependencias:
```bash
pip install -r requirements.txt
```

3. Ejecuta la aplicación:
```bash
python app.py
```

4. Abre tu navegador y visita: `http://localhost:5000`

## Rutas Disponibles

- `/` - Página principal con bienvenida
- `/bordados` - Información sobre bordados personalizados
- `/precios` - Lista de precios de servicios

## Despliegue en Azure App Service

Esta aplicación está preparada para desplegarse directamente en Azure App Service. Los archivos `app.py` y `requirements.txt` contienen toda la configuración necesaria.

### Pasos para desplegar en Azure:

1. Crear un App Service en Azure Portal
2. Configurar el despliegue desde GitHub
3. La aplicación se ejecutará automáticamente

## Tecnologías Utilizadas

- **Flask**: Framework web de Python
- **HTML/CSS**: Para la interfaz de usuario
- **Responsive Design**: Compatible con dispositivos móviles

## Contenido de la Aplicación

- **Inicio**: "Bienvenido a Crochet Creativo. Descubre nuestros servicios!"
- **Bordados**: Información detallada sobre bordados personalizados para prendas, accesorios y más
- **Precios**: 
  - Bordado pequeño: $5
  - Bordado mediano: $10 
  - Bordado grande: $20
  - Servicios adicionales y opciones personalizadas

## Licencia

© 2024 Crochet Creativo. Todos los derechos reservados.
