# Turnos1

Sistema de gestión de turnos desarrollado en Laravel/Django (proximo a definir).

Pagina en vivo-> [Turnoz](https://turnoz.netlify.app/)

## 🚀 Características
- Registro y administración de turnos
- Gestión de clientes
- Reportes y estadísticas

## 🛠️ Tecnologías
- **React**
- **CSS Modules**
- **Vite** 
- **JavaScript**

- Python / Django o PHP / Laravel
- Bootstrap
- SQLite


## 🏗️ Estructura del Proyecto  Entrega 1
```
src/
├── components/
│ ├── Navbar.jsx      # Barra de navegación principal
│ ├── DoctorCard.jsx  # Tarjeta de doctor
│ ├── TurnoCard.jsx   # Tarjeta de turno
│ └── Container.jsx   # Contenedor general para la app
├── data/
│ ├── turnos.js       # Datos simulados (mock) de turnos
│ ├── funcionalidades.jsx 
│ └── doctores.jsx 
├── App.jsx           # 
├── main.jsx          # Punto de entrada (renderizado React)
├── styles/
│ └── App.module.css # Estilos con módulos CSS
```


## Entrega 2
### 📡 API utilizada

Este proyecto consume datos desde [MockAPI](https://mockapi.io/clone/691f29efbb52a1db22c0b7fd).

#### Recursos disponibles
- **Doctores**: CRUD completo (crear, editar, eliminar y listar doctores con nombre, especialidad, días disponibles y horarios).
- **Turnos**: CRUD completo (crear, editar, eliminar y listar turnos con paciente, fecha, hora y doctor asignado).

####  Funcionalidad
- Los datos ya no están hardcodeados: se obtienen dinámicamente desde la API.
- Se utiliza **React Query** para manejar las peticiones (loading, error, cache).
- Los formularios permiten crear y editar registros, con opción de cancelar.
- Al eliminar un registro, se solicita confirmación para mayor seguridad.
- La vista muestra todos los campos relevantes (`createdAt`, `id`, etc.), formateados para mejor legibilidad.

**NOTA**: Hoy los horarios y turnos están separados.
El proyecto ya cumple con la entrega (CRUD dinámico, API, formularios).
En el futuro se planea la integración con Google Calendar para un flujo más profesional.

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

