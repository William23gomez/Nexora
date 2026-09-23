# NEXORA

## Configuracion de PQR por correo

El formulario PQR envia los mensajes a `oscarinogonzalino@gmail.com` usando la funcion `api/pqr.js`.

En Vercel configura estas variables de entorno:

- `RESEND_API_KEY`: clave API de Resend.
- `FROM_EMAIL`: opcional. Correo remitente verificado en Resend. Si no se configura, usa `NEXORA <onboarding@resend.dev>`.

Despues de guardar las variables, vuelve a desplegar el proyecto en Vercel.
