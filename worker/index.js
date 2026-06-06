export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': 'https://pakalolo.garden',
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

        await env.pakalolo_db.prepare(
          'INSERT OR IGNORE INTO subscribers (email, source) VALUES (?, ?)'
        ).bind(email, body.source || 'website').run();

        return new Response(JSON.stringify({ success: true }), { status: 200, headers });

      } catch (err) {
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers });
      }
    }

    return new Response('Not found', { status: 404 });
  }
};
