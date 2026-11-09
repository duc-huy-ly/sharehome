export default function Home() {
  return (
    <main className="welcome">
      <div className="welcome-card">
        <p className="eyebrow">ShareHome</p>
        <h1>Everything your sharehouse needs, in one place.</h1>
        <p className="intro">
          Group chat, household chores, and shared finances are coming
          together here.
        </p>
        <div className="pill-row" aria-label="Planned features">
          <span>Chat</span>
          <span>Chores</span>
          <span>Common pot</span>
        </div>
      </div>
    </main>
  );
}
