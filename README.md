# 🚀 Perseo Finance

Una plataforma financiera moderna construida con React, TypeScript y Tailwind CSS.

## ✨ Características

- **Frontend Moderno**: React 18 con TypeScript
- **Diseño Responsivo**: Tailwind CSS con componentes personalizados
- **Manejo de Estados**: Zustand para gestión global del estado
- **Tema Dinámico**: Soporte para modo claro/oscuro
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Animaciones**: Transiciones suaves y efectos visuales
- **Sistema de Notificaciones**: Feedback en tiempo real para el usuario

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework CSS utilitario
- **Zustand** - Gestión de estado ligera y eficiente
- **PostCSS** - Procesamiento de CSS
- **Vite** - Herramienta de construcción rápida

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd perseo-finance
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
perseo-finance/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── WelcomeView.tsx
│   │   └── NotificationSystem.tsx
│   ├── store/
│   │   └── useAppStore.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Componentes Principales

### Header
- Navegación principal
- Logo y branding
- Toggle de tema (claro/oscuro)
- Botones de autenticación

### WelcomeView
- Hero section con llamadas a la acción
- Grid de características principales
- Estadísticas de la plataforma
- Sección de CTA final

### NotificationSystem
- Sistema de notificaciones en tiempo real
- Posicionamiento fijo en la esquina superior derecha
- Animaciones de entrada/salida

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack

## 🎯 Estado Global (Zustand)

El store principal maneja:
- Estado de autenticación del usuario
- Información del usuario
- Tema de la aplicación
- Sistema de notificaciones
- Estado de carga

## 🌈 Personalización

### Colores
Los colores están definidos en `tailwind.config.js`:
- **Primary**: Azules para elementos principales
- **Secondary**: Grises para elementos secundarios
- **Accent**: Púrpuras para acentos y highlights

### Componentes
Los componentes personalizados están en `src/index.css`:
- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario
- `.card` - Tarjeta con sombra
- `.input-field` - Campo de entrada

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- Dispositivos móviles
- Tablets
- Escritorios
- Pantallas de alta resolución

## 🚀 Despliegue

Para construir y desplegar:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `build/`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: Perseo Finance
- **Desarrollador**: Tu Nombre
- **Email**: tu.email@ejemplo.com

---

¡Gracias por usar Perseo Finance! 🎉
