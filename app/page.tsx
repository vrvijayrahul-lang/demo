const features = [
  ["✓", "Workspace management", "Run multiple businesses from one secure platform."],
  ["▣", "CRM & projects", "Keep customers, projects, tasks and conversations connected."],
  ["◷", "Smart calendar", "Coordinate deadlines, meetings and follow-ups."],
  ["◉", "Finance & insights", "Track invoices, payments, expenses and business health."],
];

export default function Home() {
  return <main className="landing">
    <nav className="landingNav">
      <div className="landingBrand">◒ LuMekH<span style={{color:'#7042df'}}>™</span> <small style={{display:'block',fontSize:9,color:'#7f899a',letterSpacing:2}}>BUSINESS OS</small></div>
      <div className="landingLinks"><a href="#features">Features</a><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#about">About</a></div>
      <div><a className="btn btnGhost" href="/login">Log in</a><a className="btn btnPrimary" href="/signup">Start free →</a></div>
    </nav>
    <section className="landingHero">
      <div>
        <div className="eyebrow">✦ ALL-IN-ONE BUSINESS WORKSPACE</div>
        <h1>Plan smarter.<br/>Stay <span>organized.</span><br/><span>Grow faster.</span></h1>
        <p>LuMekH brings customers, projects, tasks, calendar, finance and automation into one calm, powerful workspace for modern businesses.</p>
        <div style={{marginTop:28}}><a className="btn btnPrimary" href="/signup">Get started for free →</a><a className="btn btnGhost" href="/admin">Explore demo</a></div>
      </div>
      <div className="mock">
        <div className="mockTop"><i className="dot"/><i className="dot"/><i className="dot"/></div>
        <div className="mockBody">
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:18}}><b style={{fontSize:18}}>Good morning, Lavan! ✦</b><span className="pill">● Live</span></div>
          <div className="mockStats"><div className="mini">Projects<b>24</b></div><div className="mini">Open tasks<b>18</b></div><div className="mini">Revenue<b>₹2.4L</b></div><div className="mini">Collected<b>₹1.8L</b></div></div>
          <div className="chart"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:12}}><div className="mini"><b style={{fontSize:14}}>Today</b><p style={{color:'#8792a5',fontSize:12}}>5 tasks · 2 meetings</p></div><div className="mini"><b style={{fontSize:14}}>Pipeline</b><p style={{color:'#8792a5',fontSize:12}}>₹84K active deals</p></div></div>
        </div>
      </div>
    </section>
    <section id="features" className="features">{features.map(([icon,title,text])=><div className="feature" key={title}><div style={{fontSize:22,color:'#7042df'}}>{icon}</div><h3>{title}</h3><p>{text}</p></div>)}</section>
    <footer className="footer">© 2026 LuMekH™ · Business workspace platform · Built for ambitious teams.</footer>
  </main>;
}
