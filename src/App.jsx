import { useEffect, useRef, useState } from "react";
import "./App.css";

const copy = {
  en: {
    navHome: "Home",
    navHow: "How it works",
    navAbout: "About us",
    navStart: "Check my fit",
    language: "العربية",
    badge: "BUILT FOR JORDAN'S NEXT GENERATION",
    heroA: "Your future in tech",
    heroB: "starts with you.",
    heroText:
      "Get a clearer picture of how your skills line up with the role you want — and what to learn next.",
    cta: "Find my career fit",
    explore: "Explore how it works",
    miniLabel: "YOUR NEXT CHAPTER",
    miniTitle: "Turn potential into a plan.",
    mini1: "Know your strengths",
    mini2: "Spot skills to grow",
    mini3: "Take your next step",
    proof1: "A profile built around you",
    proof2: "A practical next-step plan",
    proof3: "Made for students & graduates",
    howEyebrow: "A SIMPLE START",
    howTitle: "Your next step, in 3 stages.",
    howText:
      "No pressure, no perfect CV needed. Start with what you know today.",
    stage1: "Build your profile",
    stage1d: "Tell us about your goals, education, and preferred work style.",
    stage2: "Map your skills",
    stage2d: "Choose your strongest skills and rate your confidence in each.",
    stage3: "Get your direction",
    stage3d:
      "Review a starter snapshot and practical ideas for what to learn next.",
    formEyebrow: "YOUR CAREER, YOUR WAY",
    formTitle: "Let’s build your profile",
    formText:
      "A few quick steps can help you reflect on where you are and where you want to go.",
    step: "STEP",
    step1: "About you",
    step2: "Your skills",
    step3: "Confidence & links",
    name: "Full name",
    namePh: "e.g. Noor Ahmad",
    position: "Role you’re interested in",
    location: "Preferred location",
    experience: "Experience level",
    education: "Education level",
    work: "Work preference",
    choose: "Choose an option",
    search: "Search options…",
    noResults: "No matching options",
    next: "Continue",
    back: "Back",
    skills: "Pick your top 3 skills",
    skillHint:
      "Choose exactly three skills. Search to find a skill, then select it.",
    selected: "selected",
    remove: "Remove",
    confidence: "How confident do you feel in each?",
    portfolio: "Portfolio or LinkedIn link (optional)",
    portfolioPh: "https://…",
    submit: "Create my career snapshot",
    aboutEyebrow: "WHY NASHAMA IT",
    aboutTitle: "A clearer path into tech starts here.",
    aboutText:
      "Nashama IT is a student-focused career exploration experience designed to help aspiring tech professionals recognize their strengths, explore skill gaps, and take practical steps toward their goals.",
    aboutCardTitle: "Built to encourage progress",
    aboutCardText:
      "You don’t need to know everything yet. You just need a place to start.",
    resultTitle: "Your career snapshot",
    resultFor: "A starting point for",
    scoreTitle: "Skill confidence indicator",
    strengths: "Your selected strengths",
    gaps: "Skills to explore next",
    plan: "Your next steps",
    planText:
      "Choose one skill to practise, build a small project that demonstrates it, and compare your experience with current job descriptions for your target role.",
    disclaimer:
      "Demo only: this indicator reflects your self-rated confidence in the skills you selected. It is not a real hiring probability or a validated AI assessment.",
    edit: "Edit my profile",
    footerLine: "Big ambitions. Practical next steps.",
    footerAbout: "Helping students take their next step into tech.",
    footerExplore: "Explore",
    footerContact: "Keep growing",
    footerCopyright: "© 2026 Nashama IT. Made for the next generation.",
    confidenceLevels: ["Just starting", "Learning", "Comfortable", "Confident"],
    positions: [
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
      "Data Analyst",
      "Cybersecurity Specialist",
      "IT Support Specialist",
      "Project Manager",
      "AI Engineer",
      "Other",
    ],
    locations: ["Amman", "Irbid", "Zarqa", "Aqaba", "Remote / Anywhere"],
    experiences: [
      "No experience yet",
      "Internship / Training",
      "Less than 2 years",
      "2–5 years",
      "5+ years",
    ],
    educations: [
      "High school",
      "Diploma",
      "Bachelor’s degree",
      "Master’s degree or higher",
      "Self-taught / Certifications",
    ],
    works: ["On-site", "Hybrid", "Remote", "Flexible"],
    skillOptions: [
      "JavaScript",
      "React",
      "HTML & CSS",
      "Python",
      "Java",
      "SQL",
      "Data Analysis",
      "UI/UX Design",
      "Figma",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Git & GitHub",
      "Cloud Computing",
      "Cybersecurity",
      "AI & Machine Learning",
      "Project Management",
      "Public Speaking",
    ],
  },
  ar: {
    navHome: "الرئيسية",
    navHow: "كيف نعمل",
    navAbout: "من نحن",
    navStart: "اكتشف مدى توافقك",
    language: "English",
    badge: "نصنع مستقبل التقنية مع الجيل القادم",
    heroA: "مستقبلك في التقنية",
    heroB: "يبدأ منك.",
    heroText:
      "اكتشف مدى توافق مهاراتك مع الوظيفة التي تطمح إليها، وتعرّف على الخطوة التالية لتطوير نفسك.",
    cta: "اكتشف مسارك المهني",
    explore: "كيف تعمل المنصة؟",
    miniLabel: "فصلك القادم",
    miniTitle: "حوّل طموحك إلى خطة.",
    mini1: "اكتشف نقاط قوتك",
    mini2: "حدّد المهارات التي تطورها",
    mini3: "ابدأ خطوتك القادمة",
    proof1: "ملف مهني يناسبك",
    proof2: "خطوات عملية واضحة",
    proof3: "للطلاب والخريجين",
    howEyebrow: "بداية بسيطة",
    howTitle: "خطوتك القادمة في 3 مراحل.",
    howText: "لا تحتاج إلى سيرة ذاتية مثالية. ابدأ بما تعرفه اليوم.",
    stage1: "أنشئ ملفك",
    stage1d: "أخبرنا عن أهدافك وتعليمك ونمط العمل المفضل لديك.",
    stage2: "حدّد مهاراتك",
    stage2d: "اختر أقوى مهاراتك وحدد مستوى ثقتك بكل واحدة.",
    stage3: "اكتشف اتجاهك",
    stage3d: "راجع ملخصك الأولي وأفكارًا عملية لما يمكنك تعلمه لاحقًا.",
    formEyebrow: "مسارك المهني بطريقتك",
    formTitle: "لننشئ ملفك المهني",
    formText:
      "خطوات بسيطة تساعدك على معرفة مكانك الحالي والاتجاه الذي تريد الوصول إليه.",
    step: "الخطوة",
    step1: "عنك",
    step2: "مهاراتك",
    step3: "الثقة والروابط",
    name: "الاسم الكامل",
    namePh: "مثال: نور أحمد",
    position: "الوظيفة التي تهتم بها",
    location: "موقع العمل المفضل",
    experience: "مستوى الخبرة",
    education: "المستوى التعليمي",
    work: "نمط العمل المفضل",
    choose: "اختر خيارًا",
    search: "ابحث عن خيار…",
    noResults: "لا توجد خيارات مطابقة",
    next: "متابعة",
    back: "رجوع",
    skills: "اختر أفضل 3 مهارات لديك",
    skillHint: "اختر ثلاث مهارات بالضبط. ابحث عن المهارة ثم حددها.",
    selected: "محددة",
    remove: "إزالة",
    confidence: "ما مستوى ثقتك بكل مهارة؟",
    portfolio: "رابط معرض الأعمال أو LinkedIn (اختياري)",
    portfolioPh: "https://…",
    submit: "أنشئ ملخصي المهني",
    aboutEyebrow: "لماذا نشامى IT؟",
    aboutTitle: "طريق أوضح نحو عالم التقنية يبدأ هنا.",
    aboutText:
      "نشامى IT تجربة لاستكشاف المسارات المهنية، تساعد المهتمين بالتقنية على اكتشاف نقاط قوتهم وتحديد المهارات التي يمكن تطويرها واتخاذ خطوات عملية نحو أهدافهم.",
    aboutCardTitle: "مصممة لتشجيع التقدم",
    aboutCardText: "ليس عليك أن تعرف كل شيء الآن. يكفي أن تبدأ من مكان ما.",
    resultTitle: "ملخصك المهني",
    resultFor: "نقطة بداية لمسار",
    scoreTitle: "مؤشر الثقة بالمهارات",
    strengths: "نقاط قوتك المختارة",
    gaps: "مهارات يمكنك استكشافها",
    plan: "خطواتك القادمة",
    planText:
      "اختر مهارة واحدة للتدرب عليها، وأنجز مشروعًا صغيرًا يوضحها، ثم قارن خبرتك بمتطلبات إعلانات الوظائف الحديثة.",
    disclaimer:
      "للتجربة فقط: يعكس هذا المؤشر مستوى ثقتك الذي حددته للمهارات المختارة. إنه ليس احتمالًا حقيقيًا للتوظيف ولا تقييمًا موثوقًا بالذكاء الاصطناعي.",
    edit: "تعديل ملفي",
    footerLine: "طموح كبير. وخطوات عملية.",
    footerAbout: "نساعد الطلاب على اتخاذ خطوتهم التالية في عالم التقنية.",
    footerExplore: "استكشف",
    footerContact: "واصل التطور",
    footerCopyright: "© 2026 نشامى IT. للمستقبل القادم.",
    confidenceLevels: ["في البداية", "أتعلم", "متمكن إلى حد ما", "واثق"],
    positions: [
      "مطوّر برمجيات",
      "مطوّر واجهات أمامية",
      "مطوّر واجهات خلفية",
      "مصمم UI/UX",
      "محلل بيانات",
      "اختصاصي أمن سيبراني",
      "اختصاصي دعم تقني",
      "مدير مشاريع",
      "مهندس ذكاء اصطناعي",
      "أخرى",
    ],
    locations: ["عمّان", "إربد", "الزرقاء", "العقبة", "عن بُعد / أي مكان"],
    experiences: [
      "لا توجد خبرة بعد",
      "تدريب / تأهيل",
      "أقل من سنتين",
      "من سنتين إلى 5 سنوات",
      "أكثر من 5 سنوات",
    ],
    educations: [
      "الثانوية العامة",
      "دبلوم",
      "بكالوريوس",
      "ماجستير أو أعلى",
      "تعلم ذاتي / شهادات",
    ],
    works: ["من مقر العمل", "هجين", "عن بُعد", "مرن"],
    skillOptions: [
      "جافاسكريبت",
      "React",
      "HTML وCSS",
      "بايثون",
      "جافا",
      "SQL",
      "تحليل البيانات",
      "تصميم UI/UX",
      "Figma",
      "التواصل",
      "حل المشكلات",
      "العمل الجماعي",
      "Git وGitHub",
      "الحوسبة السحابية",
      "الأمن السيبراني",
      "الذكاء الاصطناعي وتعلم الآلة",
      "إدارة المشاريع",
      "التحدث أمام الجمهور",
    ],
  },
};

function SearchSelect({
  label,
  options,
  value,
  onChange,
  t,
  multiple = false,
  selected = [],
  max = 3,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (root.current && !root.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const filtered = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase()),
  );
  const toggle = (option) => {
    if (multiple) {
      if (selected.includes(option))
        onChange(selected.filter((item) => item !== option));
      else if (selected.length < max) onChange([...selected, option]);
    } else {
      onChange(option);
      setOpen(false);
      setQuery("");
    }
  };
  return (
    <div className="field" ref={root}>
      <label className="field-label">{label}</label>
      <button
        className={`select-trigger ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span
          className={
            (multiple ? selected.length > 0 : !!value) ? "" : "placeholder"
          }
        >
          {multiple
            ? `${selected.length} / ${max} ${t.selected}`
            : value || t.choose}
        </span>
        <span className="chevron">{open ? "−" : "+"}</span>
      </button>
      {multiple && selected.length > 0 && (
        <div className="chips">
          {selected.map((item) => (
            <span className="chip" key={item}>
              {item}
              <button
                type="button"
                aria-label={`${t.remove} ${item}`}
                onClick={() => toggle(item)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      {open && (
        <div className="select-menu">
          <div className="search-wrap">
            <span>⌕</span>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
            />
          </div>
          <div className="option-list">
            {filtered.map((option) => {
              const active = multiple
                ? selected.includes(option)
                : value === option;
              const disabled = multiple && !active && selected.length >= max;
              return (
                <button
                  type="button"
                  className={`option ${active ? "active" : ""}`}
                  key={option}
                  disabled={disabled}
                  onClick={() => toggle(option)}
                >
                  <span>{option}</span>
                  <span>{active ? "✓" : ""}</span>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="no-results">{t.noResults}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(false);
  const [form, setForm] = useState({
    name: "",
    position: "",
    location: "",
    experience: "",
    education: "",
    work: "",
    skills: [],
    confidence: {},
    portfolio: "",
  });
  const t = copy[lang];
  const rtl = lang === "ar";
  const set = (key, value) => setForm((old) => ({ ...old, [key]: value }));
  const score = form.skills.length
    ? Math.round(
        (form.skills.reduce(
          (sum, skill) => sum + Number(form.confidence[skill] ?? 0),
          0,
        ) /
          form.skills.length /
          3) *
          100,
      )
    : 0;
  const gaps = t.skillOptions
    .filter((skill) => !form.skills.includes(skill))
    .slice(0, 3);
  const stepNames = [t.step1, t.step2, t.step3];
  const goToForm = () =>
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  const next = () => {
    setStep((current) => Math.min(3, current + 1));
  };
  const submit = (event) => {
    event.preventDefault();
    if (form.skills.length !== 3) return;
    setResult(true);
    setTimeout(
      () =>
        document
          .getElementById("results")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  };
  return (
    <div className={`app ${rtl ? "rtl" : ""}`} dir={rtl ? "rtl" : "ltr"}>
      <header className="site-header">
        <nav className="nav-shell">
          <a href="#home" className="brand" aria-label="Nashama IT home">
            <span className="brand-mark">
              N<span>.</span>
            </span>
            <span>
              Nashama <b>IT</b>
            </span>
          </a>
          <div className="nav-links">
            <a href="#home">{t.navHome}</a>
            <a href="#how-it-works">{t.navHow}</a>
            <a href="#about">{t.navAbout}</a>
          </div>
          <div className="nav-actions">
            <button
              className="language-btn"
              type="button"
              onClick={() => setLang(rtl ? "en" : "ar")}
            >
              {t.language}
            </button>
            <a className="nav-cta" href="#profile">
              {t.navStart}
              <span>↗</span>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-grid" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                {t.badge}
              </div>
              <h1>
                {t.heroA}
                <br />
                <em>{t.heroB}</em>
              </h1>
              <p className="hero-text">{t.heroText}</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#profile">
                  {t.cta}
                  <span>↗</span>
                </a>
                <a className="text-link" href="#how-it-works">
                  {t.explore}
                  <span>↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <span>
                  <i>✓</i>
                  {t.proof1}
                </span>
                <span>
                  <i>✓</i>
                  {t.proof2}
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-ring ring-a" />
              <div className="visual-ring ring-b" />
              <div className="floating-tag tag-top">
                <span className="tag-icon">✦</span>
                <span>
                  <small>CAREER PATH</small>
                  <b>{t.mini1}</b>
                </span>
              </div>
              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="live-dot" /> <span>YOUR POTENTIAL</span>
                  <span className="sparkle">✳</span>
                </div>
                <div className="potential-number">
                  1<span>/3</span>
                </div>
                <h3>{t.miniTitle}</h3>
                <div className="progress-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="card-bottom">
                  <span className="avatar-stack">
                    <i>N</i>
                    <i>IT</i>
                    <i>+</i>
                  </span>
                  <span>{t.proof3}</span>
                </div>
              </div>
              <div className="floating-tag tag-bottom">
                <span className="tag-icon green">↗</span>
                <span>
                  <small>KEEP MOVING</small>
                  <b>{t.mini3}</b>
                </span>
              </div>
              <div className="visual-star star-one">✳</div>
              <div className="visual-star star-two">✦</div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>1 — DISCOVER</span>
            <span className="bottom-line" />
            <span>MADE FOR YOUR NEXT STEP</span>
          </div>
        </section>
        <section className="how-section section-pad" id="how-it-works">
          <div className="section-heading">
            <div className="eyebrow light-eyebrow">{t.howEyebrow}</div>
            <h2>{t.howTitle}</h2>
            <p>{t.howText}</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <div className="step-top">
                <span className="step-number">1</span>
                <span className="step-icon">◎</span>
              </div>
              <h3>{t.stage1}</h3>
              <p>{t.stage1d}</p>
              <div className="step-line">
                <span />
              </div>
            </article>
            <article className="step-card featured-step">
              <div className="step-top">
                <span className="step-number">2</span>
                <span className="step-icon">✳</span>
              </div>
              <h3>{t.stage2}</h3>
              <p>{t.stage2d}</p>
              <div className="step-line">
                <span />
              </div>
            </article>
            <article className="step-card">
              <div className="step-top">
                <span className="step-number">3</span>
                <span className="step-icon">↗</span>
              </div>
              <h3>{t.stage3}</h3>
              <p>{t.stage3d}</p>
              <div className="step-line">
                <span />
              </div>
            </article>
          </div>
        </section>
        <section className="profile-section section-pad" id="profile">
          <div className="profile-heading">
            <div className="eyebrow light-eyebrow">{t.formEyebrow}</div>
            <h2>{t.formTitle}</h2>
            <p>{t.formText}</p>
          </div>
          <div className="form-layout">
            <aside className="form-aside">
              <div className="aside-orb" />
              <span className="aside-kicker">
                NASHAMA <b>IT</b> / 2026
              </span>
              <h3>
                {rtl
                  ? "كل خطوة تقرّبك من هدفك."
                  : "Every step brings you closer."}
              </h3>
              <p>
                {rtl
                  ? "تعرّف على مهاراتك، ثم اختر ما تريد تطويره."
                  : "Get to know your skills, then choose what you want to grow."}
              </p>
              <div className="aside-progress">
                <span style={{ width: `${step * 33.333}%` }} />
              </div>
              <div className="aside-step-label">
                {t.step} {step} / 3
              </div>
              <div className="vertical-steps">
                {stepNames.map((name, i) => (
                  <div
                    key={name}
                    className={`vertical-step ${step === i + 1 ? "current" : ""} ${step > i + 1 ? "done" : ""}`}
                  >
                    <span className="vertical-dot">
                      {step > i + 1 ? "✓" : `${i + 1}`}
                    </span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <div className="aside-note">
                <span>✦</span>
                <p>
                  {rtl
                    ? "لا توجد إجابات صحيحة أو خاطئة — هذه رحلتك."
                    : "No right or wrong answers — this is your journey."}
                </p>
              </div>
            </aside>
            <form className="profile-form" onSubmit={submit}>
              <div className="form-topline">
                <div>
                  <span className="form-step-label">
                    {t.step} {step}
                  </span>
                  <h3>{stepNames[step - 1]}</h3>
                </div>
                <span className="form-count">
                  0{step} <i>/ 3</i>
                </span>
              </div>
              <div className="form-progress">
                <span style={{ width: `${step * 33.333}%` }} />
              </div>
              {step === 1 && (
                <div className="form-fields step-enter">
                  <div className="field full-field">
                    <label className="field-label">{t.name}</label>
                    <input
                      className="text-input"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder={t.namePh}
                    />
                  </div>
                  <SearchSelect
                    label={t.position}
                    options={t.positions}
                    value={form.position}
                    onChange={(v) => set("position", v)}
                    t={t}
                  />
                  <SearchSelect
                    label={t.location}
                    options={t.locations}
                    value={form.location}
                    onChange={(v) => set("location", v)}
                    t={t}
                  />
                  <SearchSelect
                    label={t.experience}
                    options={t.experiences}
                    value={form.experience}
                    onChange={(v) => set("experience", v)}
                    t={t}
                  />
                  <SearchSelect
                    label={t.education}
                    options={t.educations}
                    value={form.education}
                    onChange={(v) => set("education", v)}
                    t={t}
                  />
                  <div className="full-field">
                    <SearchSelect
                      label={t.work}
                      options={t.works}
                      value={form.work}
                      onChange={(v) => set("work", v)}
                      t={t}
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="step-enter">
                  <SearchSelect
                    label={t.skills}
                    options={t.skillOptions}
                    selected={form.skills}
                    onChange={(v) => {
                      set("skills", v);
                      set(
                        "confidence",
                        Object.fromEntries(
                          v.map((skill) => [
                            skill,
                            form.confidence[skill] ?? 1,
                          ]),
                        ),
                      );
                    }}
                    multiple
                    max={3}
                    t={t}
                  />
                  <p className="field-hint">✦ {t.skillHint}</p>
                  <div className="skill-tip">
                    <span>✳</span>
                    <div>
                      <b>{rtl ? "نصيحة صغيرة" : "A little tip"}</b>
                      <p>
                        {rtl
                          ? "اختر المهارات التي تستطيع إعطاء أمثلة عنها، حتى لو كنت لا تزال تتعلم."
                          : "Choose skills you can give examples of, even if you are still learning."}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="step-enter">
                  {form.skills.length > 0 ? (
                    <div className="confidence-block">
                      <p className="field-label">{t.confidence}</p>
                      {form.skills.map((skill) => (
                        <div className="confidence-row" key={skill}>
                          <div className="confidence-skill">
                            <span className="skill-bullet">✳</span>
                            <b>{skill}</b>
                          </div>
                          <select
                            className="text-input confidence-select"
                            value={form.confidence[skill] ?? 1}
                            onChange={(e) =>
                              set("confidence", {
                                ...form.confidence,
                                [skill]: Number(e.target.value),
                              })
                            }
                          >
                            {t.confidenceLevels.map((option, i) => (
                              <option value={i} key={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="inline-warning">
                      {rtl
                        ? "ارجع إلى الخطوة السابقة واختر ثلاث مهارات أولًا."
                        : "Go back and select three skills first."}
                    </div>
                  )}
                  <div className="field full-field portfolio-field">
                    <label className="field-label">{t.portfolio}</label>
                    <input
                      className="text-input"
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => set("portfolio", e.target.value)}
                      placeholder={t.portfolioPh}
                    />
                  </div>
                  <div className="privacy-note">
                    <span>↗</span>
                    {rtl
                      ? "أضف رابطًا عامًا فقط إذا رغبت بذلك."
                      : "Only add a public link if you want to share one."}
                  </div>
                </div>
              )}
              <div className="form-actions">
                {step > 1 && (
                  <button
                    type="button"
                    className="button button-back"
                    onClick={() => setStep(step - 1)}
                  >
                    ← <span>{t.back}</span>
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    className="button button-primary"
                    disabled={
                      (step === 1 &&
                        (!form.name.trim() ||
                          !form.position ||
                          !form.location ||
                          !form.experience ||
                          !form.education ||
                          !form.work)) ||
                      (step === 2 && form.skills.length !== 3)
                    }
                    onClick={next}
                  >
                    {t.next}
                    <span>↗</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="button button-primary"
                    disabled={form.skills.length !== 3}
                  >
                    {t.submit}
                    <span>↗</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
        {result && (
          <section id="results" className="results-section section-pad">
            <div className="results-card">
              <div className="results-top">
                <div>
                  <div className="eyebrow light-eyebrow">{t.resultTitle}</div>
                  <h2>
                    {rtl
                      ? `أهلًا ${form.name}`
                      : `Nice to meet you, ${form.name}.`}
                  </h2>
                  <p>
                    {t.resultFor} <b>{form.position || "your target role"}</b>
                    {form.location ? ` · ${form.location}` : ""}
                  </p>
                </div>
                <button
                  className="button button-back"
                  type="button"
                  onClick={() => {
                    setResult(false);
                    setStep(1);
                    goToForm();
                  }}
                >
                  {t.edit}
                </button>
              </div>
              <div className="result-score-row">
                <div
                  className="score-circle"
                  style={{ "--score": `${score}%` }}
                >
                  <div>
                    <strong>{score}%</strong>
                    <span>{rtl ? "مؤشر تجريبي" : "DEMO INDICATOR"}</span>
                  </div>
                </div>
                <div className="score-copy">
                  <h3>{t.scoreTitle}</h3>
                  <p>{t.disclaimer}</p>
                </div>
              </div>
              <div className="result-columns">
                <div>
                  <h3>
                    <span>✳</span>
                    {t.strengths}
                  </h3>
                  <div className="result-tags">
                    {form.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>
                    <span>↗</span>
                    {t.gaps}
                  </h3>
                  <div className="result-tags muted-tags">
                    {gaps.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="plan-box">
                <div className="plan-icon">✦</div>
                <div>
                  <h3>{t.plan}</h3>
                  <p>{t.planText}</p>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="about-section section-pad" id="about">
          <div className="about-mark">
            N<span>.</span>
          </div>
          <div className="about-copy">
            <div className="eyebrow light-eyebrow">{t.aboutEyebrow}</div>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <a className="text-link dark-link" href="#profile">
              {t.cta}
              <span>↗</span>
            </a>
          </div>
          <div className="about-note">
            <span className="about-note-icon">✳</span>
            <h3>{t.aboutCardTitle}</h3>
            <p>{t.aboutCardText}</p>
            <div className="note-decoration">
              NASHAMA IT · KEEP GROWING · NASHAMA IT ·
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-col">
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">
                N<span>.</span>
              </span>
              <span>
                Nashama <b>IT</b>
              </span>
            </a>
            <p>{t.footerAbout}</p>
          </div>
          <div className="footer-col">
            <b>{t.footerExplore}</b>
            <a href="#home">{t.navHome}</a>
            <a href="#how-it-works">{t.navHow}</a>
            <a href="#about">{t.navAbout}</a>
          </div>
          <div className="footer-col">
            <b>{t.footerContact}</b>
            <a href="#profile">{t.cta}</a>
            <span>{t.footerLine}</span>
          </div>
          <div className="footer-stamp">
            <span>✳</span>
            <b>
              YOUR FUTURE
              <br />
              IS IN MOTION.
            </b>
            <small>AMMAN · JORDAN</small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footerCopyright}</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  );
}
export default App;
