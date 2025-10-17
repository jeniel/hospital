const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const SERVICE_NAME = process.env.SERVICE_NAME || "gateway-service";

app.get("/", (req, res) => {
  const html = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hospital Dashboard</title>
    <style>
      :root { --bg:#f6f8fb; --card:#ffffff; --primary:#2563eb; --accent:#0ea5a4; --text:#0f172a; --muted:#6b7280; }
      body{ margin:0; font-family:Inter,Segoe UI,Roboto,Arial,sans-serif; background:var(--bg); color:var(--text); }
      .container{ max-width:960px; margin:48px auto; padding:24px; }
      header{ display:flex; align-items:center; gap:16px; margin-bottom:18px; }
      .logo{ font-size:36px; }
      h1{ margin:0; font-size:28px; }
      p.lead{ margin:6px 0 0; color:var(--muted); }
      .card{ background:var(--card); border-radius:12px; padding:28px; box-shadow:0 6px 18px rgba(15,23,42,0.06); }
      .grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px; margin-top:18px; }
      .btn{
        display:flex; gap:12px; align-items:center; justify-content:center;
        padding:14px 16px; border-radius:10px; text-decoration:none; color:white; font-weight:600;
        box-shadow:0 6px 12px rgba(37,99,235,0.12); transition:transform .12s ease, box-shadow .12s ease;
      }
      .btn:hover{ transform:translateY(-3px); box-shadow:0 10px 20px rgba(37,99,235,0.16); }
      .patients{ background: linear-gradient(135deg, #60a5fa, #3b82f6); }
      .doctors{ background: linear-gradient(135deg, #34d399, #059669); }
      .appointments{ background: linear-gradient(135deg, #f59e0b, #d97706); }
      .billing{ background: linear-gradient(135deg, #f97316, #ef4444); }
      .icon{ font-size:20px; opacity:0.96; }
      footer{ margin-top:18px; color:var(--muted); font-size:13px; text-align:center; }
      @media (max-width:420px){ .container{ margin:20px 12px; padding:16px; } .card{ padding:18px; } }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <div class="logo">🏥</div>
        <div>
          <h1>Hospital Dashboard</h1>
          <p class="lead">Welcome! Choose a microservice to explore.</p>
        </div>
      </header>

      <div class="card">
        <div class="grid">
          <a class="btn patients" href="/patients">
            <span class="icon">🧍</span>
            <span>Patients</span>
          </a>

          <a class="btn doctors" href="/doctors">
            <span class="icon">🧑‍⚕️</span>
            <span>Doctors</span>
          </a>

          <a class="btn appointments" href="/appointments">
            <span class="icon">📅</span>
            <span>Appointments</span>
          </a>

          <a class="btn billing" href="/billing">
            <span class="icon">💰</span>
            <span>Billing</span>
          </a>
        </div>
      </div>

      <footer>
        Demo hospital microservices — links go to other services routed via Ingress at <strong>hospital.local</strong>
      </footer>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.get("/health", (req, res) => {
  res.json({status: "ok", service: SERVICE_NAME});
});

// keep simple root greeting if accessed on service port directly
app.get("/info", (req, res) => {
  res.send(`Gateway: ${SERVICE_NAME}`);
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
