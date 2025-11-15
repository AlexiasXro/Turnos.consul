# Turnos1

Sistema de gestión de turnos desarrollado en Laravel/Django (proximo a definir).

Pagina en vivo-> [Turnoz](https://turnoz.netlify.app/)

## 🚀 Características
- Registro y administración de turnos
- Gestión de clientes
- Reportes y estadísticas
## 🚀 Características Tecnicas
Autenticación segura con OAuth2 + PKCE
Entorno dev/prod
Supabase como backend auxiliar
React Query
consumo dinámico de datos desde una API externa.

## 🛠️ Tecnologías
- **React**
- **CSS Modules**
- **Vite** 
- **JavaScript**

- Python / Django o PHP / Laravel
- Bootstrap
- SQLite


## 🏗️ Estructura del Proyecto
```

src/
├─ components/
│   ├─ Loader.jsx
│   ├─ Container.jsx
│   ├─ DoctorCard.jsx
│   ├─ LandingPage.jsx
│   ├─ Navbar.jsx
│   ├─ ErrorMessage.jsx
│   └─ TurnoCard.jsx
├─ hooks/
│   ├─ useAuth.js
│   ├─ useCalendarEvents.js
│   └─ useTurnos.js
├─ services/
│   ├─ googleAuth.js
│   ├─ googleCalendar.js
│   └─ tokenService.js
├─ pages/
│   ├─ Login.jsx
│   ├─ AuthCallback.jsx
│   ├─ CalendarEvents.jsx
│   └─ Turnos.jsx
├─ utils/
│    └─ formatDate.js
├── data/
│ ├── turnos.js       # Datos simulados (mock) de turnos - Remplazado por google calendar
│ ├── funcionalidades.jsx 
│ └── doctores.jsx 
├── App.jsx           # 
├── main.jsx          # Punto de entrada (renderizado React)
├── styles/
│ └── App.module.css # Estilos con módulos CSS
```
## 📦 Instalación
1. Clonar el repositorio
2. Instalar dependencias
```
npm install
npm run dev


```
3. Ejecutar el servidor local
```
http://localhost:5173
```

## Captura de Pantalla
![Vista de Turnos1](./public/screenshot.png)

## Autores
💼 Desarrolladora de software | Alejandra Romina Cáceres

💼 Desarrollador de software | Ezequiel Nicolas Fogar

