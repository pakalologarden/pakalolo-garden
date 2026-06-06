export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const allowedOrigins = [
      'https://pakalolo.garden',
      'https://pakalolo-garden.pages.dev',
      'http://localhost:4321',
      'http://localhost:4322',
      'http://localhost:4323',
    ];

    const origin = request.headers.get('Origin');
    const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

    const headers = {
      'Access-Control-Allow-Origin': allowOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    if (url.pathname === '/subscribe' && request.method === 'POST') {
      try {
        const body = await request.json();
        const email = body.email?.trim().toLowerCase();

        if (!email || !email.includes('@')) {
          return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400, headers });
        }

        const result = await env.pakalolo_db.prepare(
          'INSERT OR IGNORE INTO subscribers (email, source) VALUES (?, ?)'
        ).bind(email, body.source || 'website').run();

        if (result.meta.changes > 0) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Michael <hello@pakalolo.garden>',
              to: email,
              subject: 'You are on the list',
              html: `
                <div style="max-width: 560px; margin: 0 auto; font-family: Georgia, serif; color: #2a3328; padding: 2rem;">
                  <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; color: #b8822a; margin-bottom: 2rem;">pakalolo.garden</p>
                  <h1 style="font-size: 1.8rem; font-weight: normal; margin-bottom: 1.5rem; line-height: 1.2;">Aloha.</h1>
                  <p style="line-height: 1.8; margin-bottom: 1rem;">I'm Michael.</p>
                  <p style="line-height: 1.8; margin-bottom: 1rem;">I grow and document KNF, living soil, AutoPots, breeding, and 329 home cultivation here on Oʻahu.</p>
                  <p style="line-height: 1.8; margin-bottom: 1rem;">You'll hear from me when there are new articles, garden updates, experiments, events, meetups, or community projects worth sharing.</p>
                  <p style="line-height: 1.8; margin-bottom: 2rem;">If you're local, reply and introduce yourself. Always good to know who's growing.</p>
                  <p style="line-height: 1.8;">— Michael</p>
                  <hr style="border: none; border-top: 1px solid #cec8b8; margin: 2rem 0;" />
                  <p style="font-size: 0.75rem; color: #6a7568; line-height: 1.7;">Educational content only. This list does not sell or distribute cannabis products.<br>Unsubscribe anytime by replying with "unsubscribe".</p>
                </div>
              `
            }),
          });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200, headers });

      } catch (err) {
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers });
      }
    }

    return new Response('Not found', { status: 404 });
  }
};
