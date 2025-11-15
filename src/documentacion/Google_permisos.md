### Modo de prueba (rápido para desarrollo)
✅
- En la consola de Google Cloud, en tu pantalla de OAuth consent screen, **agrega** tu correo (name@gmail.com) y los de cualquier tester en la sección Test users.
✅
- Así podrás usar la app sin verificación completa, pero solo esas cuentas podrán iniciar sesión.

### 🔐Verificación completa (para producción)

💸Si querés que cualquier usuario pueda usar TurnosG, tenés que iniciar el proceso de verificación de OAuth en Google Cloud.

💸Esto implica:
- Proveer un **dominio** público y accesible (no solo localhost).
- Configurar un logo y nombre claros de la app.
- Justificar los permisos solicitados (ej. acceso a Calendar).
- Enviar la app a revisión de Google.
- Google revisa que tu aplicación cumpla con sus políticas de   seguridad y privacidad.