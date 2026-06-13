"use client";
import { useState } from "react";

/* ───────── Dummy Data ───────── */

const TODOS = [
  { id: "tk1", text: "Fix UI spacing issues", done: false },
  { id: "tk2", text: "Update dashboard cards", done: true },
  { id: "tk3", text: "Review team feedback", done: false },
];

const SESSIONS = [
  { id: "s1", name: "Design Review", active: true },
  { id: "s2", name: "Sprint Planning", active: false },
  { id: "s3", name: "Client Call", active: false },
];

const NOTIFICATIONS = [
  {
    id: "n1",
    user: "John Doe",
    action: "commented on your task",
    time: "2m ago",
    initials: "JD",
    color: "#1565c0",
  },
  {
    id: "n2",
    user: "Sarah Lee",
    action: "joined the workspace",
    time: "1h ago",
    initials: "SL",
    color: "#198754",
  },
];

const CALL_LOGS = [
  {
    id: "c1",
    name: "Michael Scott",
    duration: "12 min",
    missed: false,
    type: "audio",
    initials: "MS",
    color: "#6f42c1",
  },
  {
    id: "c2",
    name: "Pam Beesly",
    duration: "missed call",
    missed: true,
    type: "video",
    initials: "PB",
    color: "#dc3545",
  },
];

const AVAILABILITY = [
  { day: "Monday", from: "09:00", to: "18:00" },
  { day: "Tuesday", from: "09:00", to: "18:00" },
  { day: "Wednesday", from: "10:00", to: "18:00" },
  { day: "Thursday", from: "09:00", to: "18:00" },
  { day: "Friday", from: "09:00", to: "17:00" },
];

const TICKETS = [
  { id: "t1", title: "New ticket created", label: "New" },
  { id: "t2", title: "Build landing page", label: "In Progress" },
  { id: "t3", title: "Deploy backend API", label: "Done" },
];

const PROFILE_ROWS = [
  { icon: "🎙", label: "Mic", value: "On" },
  { icon: "🎨", label: "Theme", value: "Dark" },
  { icon: "🔊", label: "Speaker", value: "Default" },
  { icon: "🤖", label: "Agent mode", value: "Quick share" },
  { icon: "🖼", label: "Virtual Bg", value: "Blur" },
  { icon: "📝", label: "Nickname", value: "Alex" },
];

/* ───────── Component ───────── */

export default function Dashboard() {
  const [todos, setTodos] = useState(TODOS);

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f6f8", minHeight: "100vh" }}>

      {/* ───────── TOP BAR ───────── */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        background: "#fff",
        borderBottom: "1px solid #eee"
      }}>
        <div>
          <h3 style={{ margin: 0 }}>Welcome, Alex</h3>
          <p style={{ margin: 0, fontSize: 12, color: "#666" }}>
            Your collaboration dashboard
          </p>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button>👥 Invite</button>
          <button>📅 Plan</button>
          <button>🎥 Session</button>
        </div>
      </div>

      {/* ───────── MAIN GRID ───────── */}
      <div style={{ display: "flex", gap: 16, padding: 16 }}>

        {/* ───── COLUMN 1 ───── */}
        <div style={{ flex: 5 }}>

          {/* Profile */}
          <div style={card}>
            <h4>Profile</h4>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={avatar}>AR</div>
              <div>
                <h4>Angel Sawyer</h4>
                <p style={{ margin: 0, color: "#666" }}>angel@company.com</p>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              {PROFILE_ROWS.map((r) => (
                <div key={r.label} style={row}>
                  <span>{r.icon} {r.label}</span>
                  <span>{r.value} ➜</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div style={card}>
            <h4>Languages</h4>
            <span>🇬🇧 English</span> &nbsp;
            <span>🇩🇪 German</span>
          </div>

          {/* Availability */}
          <div style={card}>
            <h4>Availability</h4>
            {AVAILABILITY.map((a) => (
              <div key={a.day}>
                {a.day}: {a.from} - {a.to}
              </div>
            ))}
          </div>

          {/* Tour */}
          <div style={{ ...card, background: "#eef5ff" }}>
            <h4>Collaboration Hub</h4>
            <p>Manage sessions, tasks, and meetings in one place.</p>
            <button>Take Tour</button>
          </div>
        </div>

        {/* ───── COLUMN 2 ───── */}
        <div style={{ flex: 4 }}>

          {/* Todos */}
          <div style={card}>
            <h4>To Do</h4>
            {todos.map((t) => (
              <div
                key={t.id}
                onClick={() => toggle(t.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: t.done ? "line-through" : "none",
                  color: t.done ? "#999" : "#000",
                  marginBottom: 6
                }}
              >
                {t.done ? "✅" : "⬜"} {t.text}
              </div>
            ))}
          </div>

          {/* Tickets */}
          <div style={card}>
            <h4>Tickets</h4>
            {TICKETS.map((t) => (
              <div key={t.id}>
                🎫 {t.title} — {t.label}
              </div>
            ))}
          </div>

          {/* Sessions */}
          <div style={card}>
            <h4>Sessions</h4>
            {SESSIONS.map((s) => (
              <div key={s.id}>
                {s.active ? "🟢" : "⚪"} {s.name}
                {s.active && " (Live)"}
              </div>
            ))}
          </div>
        </div>

        {/* ───── COLUMN 3 ───── */}
        <div style={{ flex: 3 }}>

          {/* Notifications */}
          <div style={card}>
            <h4>Notifications</h4>
            {NOTIFICATIONS.map((n) => (
              <div key={n.id}>
                🟢 {n.user} {n.action} ({n.time})
              </div>
            ))}
          </div>

          {/* Call Logs */}
          <div style={card}>
            <h4>Call Logs</h4>
            {CALL_LOGS.map((c) => (
              <div key={c.id}>
                {c.missed ? "📵" : "📞"} {c.name} — {c.duration}
              </div>
            ))}
          </div>

          {/* Globe */}
          <div style={{ ...card, background: "#eef5ff" }}>
            <h4>🌍 Global Presence</h4>
            <p>Team across multiple time zones</p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ───────── Simple Styles ───────── */

const card = {
  background: "#fff",
  padding: 12,
  borderRadius: 8,
  marginBottom: 12,
  border: "1px solid #eee",
};

const avatar = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "#1565c0",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "4px 0",
  fontSize: 13,
};