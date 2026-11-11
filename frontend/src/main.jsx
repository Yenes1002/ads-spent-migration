import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const steps = ["Destination & file", "Brand & market", "Channels", "Tax & expenses", "Preview & validation", "Migration"];
  return <main className="shell">
    <div className="eyebrow">INTERNAL TOOL</div>
    <h1>Databees Migration Tool</h1>
    <p className="sub">Prepare, map, validate and migrate legacy data safely.</p>
    <nav>{steps.map((s, i) => <div className={i === 0 ? "step active" : "step"} key={s}><b>{i + 1}</b>{s}</div>)}</nav>
    <section><h2>Welcome</h2><p>This is the starting point for your migration workflow.</p><p className="muted">Next, we will build the upload and mapping steps, then connect the backend to Supabase.</p><span className="status">● Starter project ready</span></section>
    <small>Databees Migration Tool · Internal use</small>
  </main>;
}
createRoot(document.getElementById("root")).render(<App />);
