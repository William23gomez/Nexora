# NEXORA

## Configuracion de PQR por correo

El formulario PQR envia los mensajes a `nexora36336@gmail.com` usando la funcion `api/pqr.js`.

En Vercel configura estas variables de entorno:

- `RESEND_API_KEY`: clave API de Resend.
- `PQR_TO_EMAIL`: correo que recibira las PQR. Si no se configura, usa `nexora36336@gmail.com`.
- `FROM_EMAIL`: opcional. Correo remitente verificado en Resend. Si no se configura, usa `NEXORA <onboarding@resend.dev>`.

Despues de guardar las variables, vuelve a desplegar el proyecto en Vercel.
