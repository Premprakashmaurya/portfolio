import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#internships" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const ROLES = ["Finance Analyst", "Financial Analyst", "Business Analyst", "Data Analyst", "Marketing Analyst"];

const STATS = [
  { n: "5+", l: "Projects Built" },
  { n: "2", l: "Internships" },
  { n: "4+", l: "Certifications" },
  { n: "2", l: "Specializations" },
];

const SKILL_GROUPS = [
  {
    title: "Finance & Accounting",
    tags: ["Excel (Advanced)", "Financial Modeling", "DCF Valuation", "Ratio Analysis", "Tally ERP", "Business Feasibility", "SWOT Analysis"],
  },
  {
    title: "Data & BI Tools",
    tags: ["SQL", "Power BI", "Python (Basic)", "Dashboard Design", "Data Cleaning", "EDA"],
  },
  {
    title: "Marketing Analytics",
    tags: ["Market Research", "Customer Segmentation", "RFM Analysis", "Campaign Analytics", "STP Framework", "Marketing Mix"],
  },
  {
    title: "Platforms & Tools",
    tags: ["Microsoft Excel", "Power BI Desktop", "MySQL", "Canva", "GitHub", "Google Analytics"],
  },
];

type Proj = {
  cat: string;
  category: string;
  title: string;
  desc: string;
  tools: string[];
  links: { label: string; href: string }[];
  accent: string;
};

const PROJECTS: Proj[] = [
  {
    cat: "powerbi",
    category: "⚡ Power BI · Data Analytics",
    title: "Sales Analytics Dashboard",
    desc: "Interactive Power BI Sales Dashboard providing insights into sales performance, profitability, customer behavior, and regional trends through dynamic visualizations.",
    tools: ["Power BI", "DAX", "Excel"],
    links: [
      { label: "GitHub →", href: "https://github.com/Premprakashmaurya/PowerBI-Sales-Analytics-Dashboard" },
      { label: "View Dashboard", href: "https://github.com/Premprakashmaurya/PowerBI-Sales-Analytics-Dashboard/blob/main/Sales_Analytics_Dashboard.pbix" },
    ],
    accent: "from-[#2563EB] to-[#3B82F6]",
  },
  {
    cat: "finance",
    category: "📊 Finance · Financial Modeling",
    title: "Reliance Industries Financial Model",
    desc: "Complete 3-statement model (P&L, Balance Sheet, Cash Flow) with DCF valuation, sensitivity analysis, and ratio dashboard. Includes buy/hold/sell recommendation based on intrinsic value.",
    tools: ["Excel", "3-Statement Model", "DCF"],
    links: [
      { label: "View Project →", href: "https://github.com/Premprakashmaurya/Reliance-Financial-Model" },
      { label: "Excel File", href: "https://docs.google.com/spreadsheets/d/1ZjoreYcF8EvhYWdOcs_nFKJopeBTIcyp/edit?usp=drive_link" },
    ],
    accent: "from-[#3B82F6] to-[#1D4ED8]",
  },
  {
    cat: "sql",
    category: "🗄️ SQL · Database Design",
    title: "Library Management System — SQL",
    desc: "Full relational database schema with 5 normalized tables, 15+ business queries covering CRUD, joins, subqueries, and reporting views. Demonstrates operational database management.",
    tools: ["MySQL", "SQL Queries", "ERD Design"],
    links: [
      { label: "GitHub →", href: "https://github.com/Premprakashmaurya/Library-Management-System-SQL" },
      { label: "SQL Scripts →", href: "https://github.com/Premprakashmaurya/Library-Management-System-SQL/tree/main/Database" },
    ],
    accent: "from-[#1D4ED8] to-[#2563EB]",
  },
  {
    cat: "excel",
    category: "📈 Excel · Dashboard Design",
    title: "Blinkit Sales Intelligence Dashboard",
    desc: "Interactive Excel dashboard built to analyze Blinkit grocery sales using Pivot Tables, Charts, Slicers, and KPI metrics. Provides business insights into sales performance, outlet types, item categories, customer ratings, and overall operational trends.",
    tools: ["Excel", "Power Query", "Pivot Tables"],
    links: [
      { label: "GitHub →", href: "https://github.com/Premprakashmaurya/Blinkit-Excel-Sales-Dashboard" },
      { label: "View Dashboard", href: "https://github.com/Premprakashmaurya/Blinkit-Excel-Sales-Dashboard/blob/main/Blinkit_Excel_Dashboard.xlsx" },
    ],
    accent: "from-[#2563EB] to-[#1D4ED8]",
  },
];

const CASE_STUDIES = [
  { title: "Why Reliance Outperformed Competitors — A 5-Year Financial Analysis", desc: "Revenue growth drivers, margin expansion strategy, and capital allocation decisions that separated Reliance from Bharti and Adani in the same period." },
  { title: "Blinkit Unit Economics — Is Quick Commerce Profitable?", desc: "LTV/CAC analysis, contribution margin per order, and the break-even thesis for India's quick commerce model using public data." },
  { title: "Zomato vs Swiggy — FY2024 Financial Comparison", desc: "Revenue trends, burn rate analysis, path to profitability, and which platform is better positioned for the next 3 years." },
];

const INTERNSHIPS = [
  {
    co: "Estate Plus CRM",
    role: "Finance / Business Analyst Intern",
    date: "2025 – Present",
    bullets: [
      "Analyzed CRM data to identify sales pipeline gaps and customer conversion trends",
      "Built Excel dashboards to track agent performance and monthly revenue targets",
      "Supported financial reporting and data preparation for management reviews",
      "Conducted market research to assist business development strategy",
    ],
    tools: ["Excel", "CRM Analytics", "Data Reporting"],
  },
  {
    co: "INSANSA Techknowledge (Gyapak)",
    role: "Business / Marketing Analyst Intern",
    date: "2025",
    bullets: [
      "Supported marketing analytics and user data analysis for the Gyapak EdTech platform",
      "Built performance reports tracking user acquisition and engagement metrics",
      "Assisted with market research and competitive landscape analysis",
      "Contributed to business strategy documentation and stakeholder presentations",
    ],
    tools: ["Marketing Analytics", "Excel", "Market Research", "PowerPoint"],
  },
];

const LEARNING = [
  { h: "SQL — Intermediate", p: "Complex queries, stored procedures, database optimization" },
  { h: "Power BI PL-300", p: "Advanced DAX, data modeling, Microsoft certification" },
  { h: "Financial Modeling", p: "3-Statement Models, DCF, LBO — NSE Academy" },
  { h: "Python for Analytics", p: "pandas, matplotlib, basic EDA and visualization" },
  { h: "CFA Level 1", p: "Self-study — concepts, ethics, fixed income, equity" },
  { h: "Google Analytics 4", p: "GA4 certification — Skillshop (in progress)" },
];

const CERTS = [
  { icon: "📊", name: "Microsoft Excel — Advanced Level", issuer: "Certified · Financial Modeling, Pivot, Power Query", date: "Completed · 2024" },
  { icon: "📒", name: "Tally ERP — Accounting & Finance", issuer: "Certified · GST, Payroll, Ledger Management", date: "Completed · 2024" },
  { icon: "💻", name: "ADCA — Advanced Diploma in Computer Applications", issuer: "Certified · Computer Applications & Office Tools", date: "Completed · 2023" },
  { icon: "🤖", name: "Anthropic Claude AI — Practical Applications", issuer: "Anthropic · AI-Augmented Business Analysis", date: "Completed · 2025" },
  { icon: "📈", name: "Power BI Data Analyst (PL-300)", issuer: "Microsoft · Advanced BI & Data Modeling", wip: "IN PROGRESS" },
  { icon: "🏦", name: "NSE — Financial Modeling & Valuation", issuer: "NSE Academy · DCF, 3-Statement Models", wip: "IN PROGRESS" },
  { icon: "📉", name: "Google Analytics 4 (GA4)", issuer: "Google Skillshop · Marketing Analytics", wip: "IN PROGRESS" },
  { icon: "🎯", name: "CFA Level 1", issuer: "CFA Institute · Finance & Investment Analysis", wip: "SELF-STUDYING" },
] as const;

const RESUME_LINK = "https://drive.google.com/your-resume-link";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "powerbi", label: "Power BI" },
  { id: "finance", label: "Finance" },
  { id: "sql", label: "SQL" },
  { id: "excel", label: "Excel" },
];

function Portfolio() {
  const [active, setActive] = useState("hero");
  const [filter, setFilter] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let curr = "hero";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) curr = el.id;
      });
      setActive(curr);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      setParallax({ x, y });
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", onMove);
    return () => el?.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button[type=submit]") as HTMLButtonElement;
    const orig = btn.textContent;
    btn.textContent = "✅ Message Sent!";
    btn.style.background = "linear-gradient(135deg,#22c55e,#16a34a)";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = "";
      (e.target as HTMLFormElement).reset();
    }, 2500);
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
        .nav-link { position: relative; }
        .nav-link.active { color: oklch(0.68 0.18 38); }
        .nav-link.active::after {
          content: ""; position: absolute; left: 12px; right: 12px; bottom: -4px; height: 2px;
          background: oklch(0.68 0.18 38); border-radius: 2px;
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="glass-strong flex items-center gap-1 pl-5 pr-2 py-2 rounded-full max-w-[min(96vw,980px)] w-full sm:w-auto shadow-[0_10px_40px_-20px_rgba(124,92,255,0.5)]">
          <a href="#hero" className="font-display font-bold tracking-tight text-sm sm:text-base whitespace-nowrap mr-2">
            Prem<span className="gradient-text">.</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`nav-link px-3 py-2 rounded-full text-xs font-medium text-foreground/70 hover:text-foreground transition ${active === n.href.slice(1) ? "active" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="ml-auto md:ml-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white btn-glow whitespace-nowrap"
          >
            Resume
          </a>
          <button
            aria-label="Menu"
            className="md:hidden ml-1 p-2 rounded-full text-foreground/80"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </nav>
        {mobileOpen && (
          <div className="absolute top-20 left-4 right-4 glass-strong rounded-3xl p-4 md:hidden flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-2xl text-sm text-foreground/80 hover:bg-foreground/5">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-hero)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }} />
        <div className="relative mx-auto max-w-[1280px] w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-foreground/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              MBA Finance &amp; Marketing · Prayagraj, India
            </div>
            <h1 className="display-heavy mt-6 text-[clamp(2.8rem,8vw,5.5rem)]">
              Prem Prakash<br />
              <span className="gradient-text">Maurya</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/85 max-w-xl font-medium">
              Finance &amp; Analytics Professional — Turning Data into Business Decisions
            </p>
            <p className="mt-4 text-sm sm:text-base text-foreground/60 max-w-xl leading-relaxed">
              MBA student specializing in Finance and Marketing. I build financial models, design analytics dashboards, and translate data into actionable insights using Excel, SQL, and Power BI.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <span key={r} className="text-[11px] font-medium px-3 py-1.5 rounded-full glass text-foreground/80">{r}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#3B82F6] text-white btn-glow">
                View My Projects ↓
              </a>
              <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full text-sm font-semibold glass text-white hover:bg-foreground/10 transition">
                Download Resume
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {STATS.map((s) => (
                <div key={s.l} className="glass px-4 py-3 rounded-2xl">
                  <div className="font-display font-bold text-2xl gradient-text">{s.n}</div>
                  <div className="text-[11px] text-foreground/60 mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="reveal relative flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{ transform: `translate3d(${parallax.x * 14}px, ${parallax.y * 14}px, 0)`, transition: "transform .2s ease-out" }}
            >
              <div className="absolute -inset-10 rounded-[3rem] blur-3xl opacity-70"
                   style={{ background: "conic-gradient(from 120deg, #2563EB, #3B82F6, #1D4ED8, #2563EB)" }} />
              <div className="relative glass-strong rounded-[2rem] p-6 w-[min(90vw,420px)] aspect-[4/5] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 20%, #2563EB66, transparent 50%), radial-gradient(circle at 80% 90%, #1D4ED855, transparent 50%)" }} />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-40 h-40 rounded-full grid place-items-center text-5xl font-display font-bold text-white bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#1D4ED8] shadow-[0_20px_60px_-10px_rgba(124,92,255,0.7)]">
                    PPM
                  </div>
                  <div className="text-center">
                    <div className="font-display font-semibold text-lg">Prem Prakash Maurya</div>
                    <div className="text-xs text-foreground/60 mt-1">MBA · Finance &amp; Marketing</div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/10 border border-foreground/10">Available</span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/10 border border-foreground/10">India</span>
                  </div>
                </div>
              </div>

              {/* floating badges */}
              <div className="absolute -left-6 top-8 glass rounded-2xl px-3 py-2 text-xs font-medium animate-floaty" style={{ animationDelay: "0s" }}>
                📊 Power BI
              </div>
              <div className="absolute -right-4 top-24 glass rounded-2xl px-3 py-2 text-xs font-medium animate-floaty" style={{ animationDelay: "1.2s" }}>
                💹 DCF Model
              </div>
              <div className="absolute -left-4 bottom-24 glass rounded-2xl px-3 py-2 text-xs font-medium animate-floaty" style={{ animationDelay: "0.6s" }}>
                🗄️ SQL
              </div>
              <div className="absolute -right-6 bottom-10 glass rounded-2xl px-3 py-2 text-xs font-medium animate-floaty" style={{ animationDelay: "1.8s" }}>
                📈 Excel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y border-foreground/5 py-4 overflow-hidden bg-foreground/[0.02]">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...ROLES, ...ROLES, ...ROLES].map((r, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.25em] text-foreground/40 flex items-center gap-10">
              <span>Open to → {r}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60" />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" tag="About Me" title="Finance Meets Analytics">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 reveal">
          <div className="glass-strong rounded-3xl p-8">
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>I am an MBA student specializing in Finance and Marketing at United Institute of Management, Prayagraj. With a B.Sc. in Mathematics and Chemistry from PRSU, I bring strong quantitative thinking to every business and financial problem.</p>
              <p>I work with Excel, SQL, Power BI, and Financial Modeling to analyze data, build dashboards, and support business decisions. My goal is to bridge the gap between numbers and strategy — helping organizations understand their financial health and market opportunities through clear analytical insight.</p>
              <p>Currently building a portfolio that demonstrates real-world skills in financial analysis, data analytics, and marketing analytics — ready to contribute from Day 1 in any Finance or Analytics role.</p>
            </div>
            <div className="mt-6 space-y-3">
              <EduCard icon="🎓" title="MBA — Finance & Marketing" sub="United Institute of Management, Prayagraj · Jul 2025 – May 2027" />
              <EduCard icon="🎓" title="B.Sc. — Mathematics & Chemistry" sub="PRSU (Rajju Bhaiya University), Prayagraj · Aug 2021 – Aug 2024" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title} className="glass rounded-3xl p-5 lift">
                <h4 className="font-display font-semibold text-sm mb-3 gradient-text">{g.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/75">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" tag="Portfolio" title="Projects & Case Studies" sub="Real projects, real data, real insights — finance, analytics, and marketing work built from scratch.">
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition ${filter === f.id ? "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white btn-glow" : "glass text-foreground/70 hover:text-foreground"}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.filter((p) => filter === "all" || p.cat === filter).map((p) => (
            <article key={p.title} className="reveal group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/15 lift">
              <div className="rounded-[calc(1.5rem-1px)] h-full bg-[#141414]/80 backdrop-blur-xl p-6 flex flex-col">
                <div className={`h-40 rounded-2xl mb-5 relative overflow-hidden bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/90 font-semibold">{p.category}</span>
                  </div>
                </div>
                <h3 className="font-display uppercase tracking-tight text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 flex-1 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/75">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l, i) => (
                    <a
                      key={l.href}
                      href={l.href.trim()}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs font-semibold px-4 py-2 rounded-full transition ${i === 0 ? "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white btn-glow" : "glass text-white hover:bg-foreground/10"}`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display font-bold text-2xl mb-2 reveal">Business Case Studies</h3>
          <p className="text-sm text-foreground/55 mb-6 reveal">Analytical thinking applied to real Indian business scenarios — strategy, finance, and market analysis.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {CASE_STUDIES.map((c) => (
              <div key={c.title} className="reveal glass rounded-3xl p-6 lift">
                <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#1D4ED8]/15 text-[#1D4ED8] border border-[#1D4ED8]/25">COMING SOON</span>
                <h4 className="font-display font-semibold text-base mt-3 leading-snug">{c.title}</h4>
                <p className="text-xs text-foreground/60 mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INTERNSHIPS */}
      <Section id="internships" tag="Experience" title="Internship Experience" sub="Hands-on experience in finance, analytics, and business operations.">
        <div className="grid md:grid-cols-2 gap-6">
          {INTERNSHIPS.map((it) => (
            <div key={it.co} className="reveal glass-strong rounded-3xl p-7 lift">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-display font-bold text-lg gradient-text truncate">{it.co}</div>
                  <div className="text-sm text-foreground/70 mt-0.5">{it.role}</div>
                </div>
                <span className="shrink-0 text-[11px] font-semibold px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">{it.date}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/70"><span className="text-[#2563EB] mt-1">▹</span><span>{b}</span></li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {it.tools.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/75">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display font-semibold text-lg mb-4 reveal">Currently Building</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEARNING.map((l) => (
              <div key={l.h} className="reveal glass rounded-2xl p-5 lift">
                <h4 className="font-display font-semibold text-sm gradient-text">{l.h}</h4>
                <p className="text-xs text-foreground/60 mt-1.5 leading-relaxed">{l.p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" tag="Credentials" title="Certifications" sub="Continuous learning across finance, data analytics, and business tools.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CERTS.map((c) => (
            <div key={c.name} className={`reveal glass rounded-3xl p-6 lift relative ${"wip" in c ? "opacity-90" : ""}`}>
              <div className="text-3xl">{c.icon}</div>
              <h4 className="font-display font-semibold text-sm mt-3 leading-snug">{c.name}</h4>
              <p className="text-xs text-foreground/55 mt-2 leading-relaxed">{c.issuer}</p>
              {"date" in c && c.date && (
                <div className="mt-3 text-[10px] font-bold tracking-widest text-[#8A5A00] uppercase">{c.date}</div>
              )}
              {"wip" in c && (
                <div className="mt-3 inline-block text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#2563EB]/15 text-[#1D4ED8] border border-[#2563EB]/30">{c.wip}</div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" tag="Resume / CV" title="Download My Resume" sub="1-page professional CV — Finance & Analytics focused. Last updated: 2025">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { h: "Education", p: "MBA Finance + Marketing · B.Sc. Mathematics & Chemistry · United Institute of Management & PRSU" },
            { h: "Top Skills", p: "Excel · SQL · Power BI · Financial Modeling · Python (Basic) · Tally · Business Analysis" },
            { h: "Experience", p: "2 Internships · Estate Plus CRM · INSANSA Techknowledge (Gyapak) · 5+ Portfolio Projects" },
          ].map((r) => (
            <div key={r.h} className="reveal glass rounded-3xl p-6 lift">
              <h4 className="font-display font-semibold text-sm gradient-text">{r.h}</h4>
              <p className="text-xs text-foreground/65 mt-2 leading-relaxed">{r.p}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center reveal">
          <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#3B82F6] text-white btn-glow">
            ⬇ &nbsp; Download Resume (PDF)
          </a>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" tag="Get In Touch" title="Let's Connect">
        <div className="reveal glass-strong rounded-3xl px-6 py-4 mb-8 flex items-center gap-3 text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-foreground/80"><strong className="text-white">Currently Available</strong> — Actively seeking Finance Analyst, Business Analyst &amp; Data Analyst roles in India. Open to remote and hybrid opportunities.</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ContactCard href="mailto:premprakashmaurya517@gmail.com" icon="📧" label="Email" value="premprakashmaurya517@gmail.com" />
            <ContactCard href="https://www.linkedin.com/in/prem-prakash-maurya-finance" icon="💼" label="LinkedIn" value="prem-prakash-maurya-finance" />
            <ContactCard href="https://github.com/your-username" icon="💻" label="GitHub" value="github.com/your-username" />
            <ContactCard icon="📍" label="Location" value="Prayagraj, Uttar Pradesh · Open to relocation" />
          </div>
          <form onSubmit={handleContact} className="reveal glass-strong rounded-3xl p-6 space-y-4">
            <Field label="Your Name"><input type="text" required placeholder="Full name" className="field-input" /></Field>
            <Field label="Email Address"><input type="email" required placeholder="your@email.com" className="field-input" /></Field>
            <Field label="Subject">
              <select className="field-input">
                <option className="bg-white text-foreground">Job Opportunity</option>
                <option className="bg-white text-foreground">Internship</option>
                <option className="bg-white text-foreground">Collaboration</option>
                <option className="bg-white text-foreground">Other</option>
              </select>
            </Field>
            <Field label="Message"><textarea required placeholder="Your message..." rows={4} className="field-input resize-none" /></Field>
            <button type="submit" className="w-full px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#3B82F6] text-white btn-glow">
              Send Message →
            </button>
            <style>{`
              .field-input {
                width: 100%;
                background: rgba(0,0,0,0.03);
                border: 1px solid rgba(0,0,0,0.12);
                border-radius: 14px;
                padding: 12px 14px;
                font-size: 14px;
                color: #141414;
                outline: none;
                transition: border-color .2s, background .2s;
              }
              .field-input:focus { border-color: #2563EB; background: rgba(255,255,255,0.8); }
              .field-input::placeholder { color: rgba(0,0,0,0.35); }
            `}</style>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-foreground/5 text-center">
        <p className="text-xs text-foreground/50">
          © 2025 <span className="gradient-text font-semibold">Prem Prakash Maurya</span> · MBA Finance &amp; Marketing · Built for Finance &amp; Analytics Roles in India
        </p>
      </footer>
    </div>
  );
}

function Section({ id, tag, title, sub, children }: { id: string; tag: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/70 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            {tag}
          </div>
          <h2 className="reveal display-heavy text-[clamp(2rem,5vw,3.75rem)] mt-4">
            {title.split(" ").map((w, i, arr) => i === arr.length - 1 ? <span key={i} className="gradient-text">{w}</span> : <span key={i}>{w} </span>)}
          </h2>
          {sub && <p className="reveal max-w-2xl mx-auto mt-4 text-sm text-foreground/60">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function EduCard({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="glass rounded-2xl p-4 flex gap-3 items-start">
      <div className="text-2xl">{icon}</div>
      <div>
        <div className="font-display font-semibold text-sm">{title}</div>
        <div className="text-xs text-foreground/55 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function ContactCard({ href, icon, label, value }: { href?: string; icon: string; label: string; value: string }) {
  const Cmp: any = href ? "a" : "div";
  return (
    <Cmp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="reveal glass rounded-2xl p-5 flex items-center gap-4 lift"
    >
      <div className="text-2xl w-12 h-12 grid place-items-center rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/20 border border-foreground/10 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">{label}</div>
        <div className="text-sm text-foreground truncate font-semibold">{value}</div>
      </div>
    </Cmp>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
