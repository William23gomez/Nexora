const DESTINATION_EMAIL = 'oscarinogonzalino@gmail.com';

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Metodo no permitido' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return response.status(500).json({
      error: 'Falta configurar RESEND_API_KEY en Vercel.'
    });
  }

  const data = request.body || {};
  const submittedAt = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota'
  });

  const html = `
    <h2>Nueva PQR desde NEXORA</h2>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:Arial,sans-serif">
      <tr><th align="left">Fecha</th><td>${escapeHtml(submittedAt)}</td></tr>
      <tr><th align="left">Radicado</th><td>${escapeHtml(data.id || '')}</td></tr>
      <tr><th align="left">Nombre</th><td>${escapeHtml(data.nombre || '')}</td></tr>
      <tr><th align="left">Correo</th><td>${escapeHtml(data.email || '')}</td></tr>
      <tr><th align="left">Telefono</th><td>${escapeHtml(data.telefono || '')}</td></tr>
      <tr><th align="left">Tipo</th><td>${escapeHtml(data.tipo || '')}</td></tr>
      <tr><th align="left">Asunto</th><td>${escapeHtml(data.asunto || '')}</td></tr>
      <tr><th align="left">Descripcion</th><td>${escapeHtml(data.descripcion || '')}</td></tr>
    </table>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL || 'NEXORA <onboarding@resend.dev>',
      to: DESTINATION_EMAIL,
      reply_to: data.email || undefined,
      subject: `Nueva PQR NEXORA - ${data.asunto || 'Sin asunto'}`,
      html
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return response.status(502).json({
      error: 'No se pudo enviar el correo.',
      detail: errorText
    });
  }

  return response.status(200).json({ ok: true });
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
