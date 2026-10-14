
import { useState, useEffect, useRef } from "react";

const T = {
  en: {
    home: "Home", about: "About", start: "Build Your Profile",
    badge: "JORDAN'S TECH COMMUNITY",
    title: "Your skills. Your future.",
    subtitle: "Discover your career readiness, identify skill gaps, and take your next step into tech.",
    eyebrow: "CAREER READINESS",
    formTitle: "Build your career profile",
    formDesc: "Tell us about yourself to discover how your skills align with your dream role.",
    name: "Full name", namePlaceholder: "Enter your name",
    position: "Target position", location: "Preferred work location",
    experience: "Experience level", education: "Education level",
    work: "Preferred work arrangement", skills: "Your top 3 skills",
    skillHint: "Search and select exactly three skills.",
    confidence: "Rate your confidence in each skill",
    portfolio: "Portfolio / LinkedIn (optional)",
    submit: "Analyze my profile →",
    choose: "Choose an option...",
    search: "Type to search...",
    noResults: "No results found",
    selected: "selected", remove: "Remove",
    aboutTitle: "A stronger tech community starts with you.",
    aboutDesc: "Nashama IT helps aspiring tech professionals understand their strengths, discover the skills they need to develop, and build a practical learning plan.",
    results: "Your career snapshot",
    score: "Demo readiness indicator",
    strengths: "Your selected skills",
    gaps: "Skills to explore next",
    plan: "Your next steps",
    disclaimer: "This is a demonstration, not a real hiring probability or AI assessment. Connect validated job-market data and an AI backend for meaningful recommendations.",
    edit: "Edit profile",
    footer: "Built for ambitious minds.",
    confidenceOptions: ["Beginner", "Developing", "Comfortable", "Strong"],
    positions: ["Software Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Data Analyst", "Cybersecurity Specialist", "IT Support Specialist", "Project Manager", "AI Engineer", "Other"],
    locations: ["Amman", "Irbid", "Zarqa", "Aqaba", "Remote / Anywhere"],
    experiences: ["No experience yet", "Internship / Training", "Less than 2 years", "2–5 years", "5+ years"],
    educations: ["High school", "Diploma", "Bachelor's degree", "Master's degree or higher", "Self-taught / Certifications"],
    works: ["On-site", "Hybrid", "Remote", "Flexible"],
    skillOptions: ["JavaScript", "React", "HTML & CSS", "Python", "Java", "SQL", "Data Analysis", "UI/UX Design", "Figma", "Communication", "Problem Solving", "Teamwork", "Git & GitHub", "Cloud Computing", "Cybersecurity", "AI & Machine Learning", "Project Management", "Public Speaking"]
  },
  ar: {
    home: "الرئيسية", about: "عن المشروع", start: "أنشئ ملفك",
    badge: "مجتمع التقنية الأردني",
    title: "مهاراتك. مستقبلك.",
    subtitle: "اكتشف جاهزيتك المهنية، وحدّد المهارات التي تحتاج لتطويرها، وخطوتك التالية في عالم التقنية.",
    eyebrow: "الجاهزية المهنية",
    formTitle: "أنشئ ملفك المهني",
    formDesc: "أخبرنا عن نفسك لنساعدك على معرفة مدى توافق مهاراتك مع الوظيفة التي تطمح إليها.",
    name: "الاسم الكامل", namePlaceholder: "أدخل اسمك",
    position: "الوظيفة المستهدفة", location: "موقع العمل المفضّل",
    experience: "مستوى الخبرة", education: "المستوى التعليمي",
    work: "نمط العمل المفضّل", skills: "أفضل 3 مهارات لديك",
    skillHint: "ابحث واختر ثلاث مهارات بالضبط.",
    confidence: "حدّد مستوى ثقتك بكل مهارة",
    portfolio: "رابط معرض الأعمال / LinkedIn (اختياري)",
    submit: "حلّل ملفي المهني ←",
    choose: "اختر خيارًا...",
    search: "اكتب للبحث...",
    noResults: "لا توجد نتائج",
    selected: "محددة", remove: "إزالة",
    aboutTitle: "مجتمع تقني أقوى يبدأ منك.",
    aboutDesc: "يساعد مشروع نشامى IT المهتمين بالتقنية على اكتشاف نقاط قوتهم، وتحديد المهارات التي يحتاجون لتطويرها، وبناء خطة تعلم عملية.",
    results: "ملخّصك المهني",
    score: "مؤشر جاهزية تجريبي",
    strengths: "المهارات التي اخترتها",
    gaps: "مهارات يمكنك تطويرها",
    plan: "خطواتك القادمة",
    disclaimer: "هذه نتيجة تجريبية وليست احتمالًا حقيقيًا للتوظيف أو تحليلًا فعليًا بالذكاء الاصطناعي. نحتاج إلى بيانات موثوقة عن سوق العمل وربط نموذج AI للحصول على توصيات ذات معنى.",
    edit: "تعديل الملف",
    footer: "صُمّم للعقول الطموحة.",
    confidenceOptions: ["مبتدئ", "في طور التطور", "متمكّن", "متقدم"],
    positions: ["مطوّر برمجيات", "مطوّر واجهات أمامية", "مطوّر واجهات خلفية", "مصمّم UI/UX", "محلّل بيانات", "اختصاصي أمن سيبراني", "اختصاصي دعم تقني", "مدير مشاريع", "مهندس ذكاء اصطناعي", "أخرى"],
    locations: ["عمّان", "إربد", "الزرقاء", "العقبة", "عن بُعد / أي مكان"],
    experiences: ["لا توجد خبرة بعد", "تدريب / تأهيل", "أقل من سنتين", "من سنتين إلى 5 سنوات", "أكثر من 5 سنوات"],
    educations: ["الثانوية العامة", "دبلوم", "بكالوريوس", "ماجستير أو أعلى", "تعلم ذاتي / شهادات"],
    works: ["من مقر العمل", "هجين", "عن بُعد", "مرن"],
    skillOptions: ["جافاسكريبت", "React", "HTML وCSS", "بايثون", "جافا", "SQL", "تحليل البيانات", "تصميم UI/UX", "Figma", "التواصل", "حل المشكلات", "العمل الجماعي", "Git وGitHub", "الحوسبة السحابية", "الأمن السيبراني", "الذكاء الاصطناعي وتعلم الآلة", "إدارة المشاريع", "التحدث أمام الجمهور"]
  }
};

const palette = {
  navy: "#102746",
  blue: "#1C4D83",
  gold: "#C9A34B",
  pale: "#EFF5FC",
  white: "#FFFFFF",
  muted: "#6C7D93",
  border: "#DCE5F0"
};

const fieldStyle = {
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  padding: "13px 14px",
  borderRadius: 12,
  border: `1px solid ${palette.border}`,
  background: "#F8FAFE",
  color: palette.navy,
  fontSize: 14,
  outlineColor: palette.gold
};

function SearchSelect({
  label, options, value, onChange, t, multiple = false,
  selected = [], max = 3
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (root.current && !root.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const filtered = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  const toggle = (option) => {
    if (multiple) {
      if (selected.includes(option)) {
        onChange(selected.filter((item) => item !== option));
      } else if (selected.length < max) {
        onChange([...selected, option]);
      }
    } else {
      onChange(option);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div ref={root} style={{ position: "relative", minWidth: 0 }}>
      <label
        style={{
          display: "block", fontSize: 13, fontWeight: 750,
          color: palette.navy, marginBottom: 9
        }}
      >
        {label}
      </label>

      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          ...fieldStyle,
          minHeight: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          textAlign: "start",
          cursor: "pointer",
          borderColor: open ? palette.gold : palette.border,
          background: "#FFFFFF"
        }}
      >
        <span style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: (multiple ? selected.length > 0 : !!value)
            ? palette.navy : palette.muted
        }}>
          {multiple
            ? `${selected.length} / ${max} ${t.selected}`
            : value || t.choose}
        </span>
        <span style={{ color: palette.gold, flexShrink: 0 }}>
          {open ? "⌃" : "⌄"}
        </span>
      </button>

      {multiple && selected.length > 0 && (
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 7, marginTop: 9
        }}>
          {selected.map((item) => (
            <span key={item} style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "6px 9px", borderRadius: 30,
              background: palette.pale, color: palette.blue,
              fontSize: 12, fontWeight: 700, maxWidth: "100%"
            }}>
              <span style={{ overflowWrap: "anywhere" }}>{item}</span>
              <button
                type="button"
                aria-label={`${t.remove} ${item}`}
                onClick={() => toggle(item)}
                style={{
                  border: 0, background: "transparent",
                  color: palette.blue, cursor: "pointer",
                  fontWeight: 800, padding: 0
                }}
              >×</button>
            </span>
          ))}
        </div>
      )}

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 7px)",
          left: 0, right: 0,
          zIndex: 20,
          background: "#FFFFFF",
          border: `1px solid ${palette.border}`,
          borderRadius: 14,
          boxShadow: "0 16px 40px rgba(16,39,70,0.16)",
          padding: 9
        }}>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute", left: 12, top: 12,
              color: palette.muted
            }}>⌕</span>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              style={{
                ...fieldStyle,
                paddingLeft: 34,
                background: palette.pale,
                border: 0
              }}
            />
          </div>

          <div style={{
            maxHeight: 220, overflowY: "auto",
            marginTop: 7
          }}>
            {filtered.map((option) => {
              const active = multiple
                ? selected.includes(option)
                : value === option;

              const disabled = multiple &&
                !active && selected.length >= max;

              return (
                <button
                  type="button"
                  key={option}
                  disabled={disabled}
                  onClick={() => toggle(option)}
                  style={{
                    display: "flex", width: "100%",
                    alignItems: "center", justifyContent: "space-between",
                    gap: 8, textAlign: "start",
                    border: 0, borderRadius: 9,
                    padding: "11px 10px",
                    background: active ? palette.pale : "#FFFFFF",
                    color: disabled ? "#A8B2C0" : palette.navy,
                    cursor: disabled ? "not-allowed" : "pointer",
                    fontSize: 13
                  }}
                >
                  <span>{option}</span>
                  <span style={{ color: palette.gold }}>
                    {active ? "✓" : ""}
                  </span>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p style={{
                textAlign: "center", color: palette.muted,
                padding: 12, fontSize: 13
              }}>{t.noResults}</p>
            )}
          </div>

          {multiple && (
            <div style={{
              borderTop: `1px solid ${palette.border}`,
              padding: "10px 4px 2px",
              fontSize: 11, color: palette.muted
            }}>
              {selected.length} / {max}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const [mobile, setMobile] = useState(false);
  const [result, setResult] = useState(false);
  const [form, setForm] = useState({
    name: "", position: "", location: "",
    experience: "", education: "", work: "",
    skills: [], confidence: {}, portfolio: ""
  });

  const t = T[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    const resize = () => setMobile(window.innerWidth < 720);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const set = (key, value) =>
    setForm((old) => ({ ...old, [key]: value }));

  const inputStyle = {
    ...fieldStyle,
    marginTop: 9,
    background: "#FFFFFF"
  };

  const labelStyle = {
    display: "block",
    color: palette.navy,
    fontWeight: 750,
    fontSize: 13,
    marginBottom: 18
  };

  const cardStyle = {
    background: "#FFFFFF",
    border: `1px solid ${palette.border}`,
    borderRadius: 18,
    padding: mobile ? 18 : 28,
    boxShadow: "0 12px 35px rgba(16,39,70,0.05)",
    minWidth: 0
  };

  function submit(e) {
    e.preventDefault();
    if (form.skills.length !== 3) return;

    const average = form.skills.reduce(
      (sum, skill) => sum + Number(form.confidence[skill] ?? 0), 0
    ) / 3;

    // Placeholder demonstration only, NOT a real hiring probability.
    const demoScore = Math.round(35 + average * 15);
    setForm((old) => ({ ...old, demoScore }));
    setResult(true);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({
        behavior: "smooth", block: "start"
      });
    }, 50);
  }

  const gapSkills = t.skillOptions
    .filter((skill) => !form.skills.includes(skill))
    .slice(0, 3);

  return (
    <div dir={rtl ? "rtl" : "ltr"} style={{
      minHeight: "100vh",
      background: "#F7F9FD",
      color: palette.navy,
      fontFamily: rtl
        ? "Tahoma, Arial, sans-serif"
        : "Inter, Arial, sans-serif",
      overflowWrap: "anywhere"
    }}>
      <header style={{
        background: "#FFFFFF",
        borderBottom: `1px solid ${palette.border}`,
        position: "sticky", top: 0, zIndex: 30
      }}>
        <nav style={{
          maxWidth: 1160, margin: "auto",
          padding: mobile ? "14px 16px" : "18px 24px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 14, flexWrap: "wrap"
        }}>
          <a href="#home" style={{
            textDecoration: "none", display: "flex",
            alignItems: "center", gap: 10, color: palette.navy,
            fontWeight: 900, fontSize: 19
          }}>
            <span style={{
              background: palette.navy, color: palette.gold,
              borderRadius: 10, padding: "8px 10px"
            }}>N</span>
            Nashama <span style={{ color: palette.gold }}>IT</span>
          </a>

          <div style={{
            display: "flex", alignItems: "center",
            gap: mobile ? 10 : 22, flexWrap: "wrap"
          }}>
            {!mobile && <>
              <a href="#home" style={linkStyle}>{t.home}</a>
              <a href="#about" style={linkStyle}>{t.about}</a>
            </>}
            <button
              type="button"
              onClick={() => setLang(rtl ? "en" : "ar")}
              style={{
                border: `1px solid ${palette.border}`,
                background: "#FFFFFF", color: palette.navy,
                padding: "9px 12px", borderRadius: 9,
                cursor: "pointer", fontWeight: 750
              }}
            >{rtl ? "English" : "العربية"}</button>
            <a href="#profile" style={{
              textDecoration: "none", color: "#FFFFFF",
              background: palette.navy, padding: "11px 15px",
              borderRadius: 10, fontSize: 12, fontWeight: 750
            }}>{t.start}</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" style={{
          background: `linear-gradient(130deg, ${palette.navy}, #1A4778)`,
          color: "#FFFFFF",
          padding: mobile ? "58px 20px" : "90px 28px"
        }}>
          <div style={{
            maxWidth: 1100, margin: "auto",
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1.2fr 0.8fr",
            alignItems: "center", gap: 34
          }}>
            <div>
              <div style={{
                color: palette.gold, fontSize: 11,
                letterSpacing: 2, fontWeight: 850, marginBottom: 22
              }}>{t.badge}</div>
              <h1 style={{
                fontSize: "clamp(36px, 5.5vw, 66px)",
                lineHeight: 1.12, letterSpacing: -1.5,
                margin: "0 0 22px", maxWidth: 650
              }}>
                {t.title.split(". ")[0]}.
                <br />
                <span style={{ color: palette.gold }}>
                  {rtl ? "خطوتك القادمة." : "Your next chapter."}
                </span>
              </h1>
              <p style={{
                color: "#D5E2F2", lineHeight: 1.9,
                maxWidth: 510, fontSize: 15, marginBottom: 30
              }}>{t.subtitle}</p>
              <a href="#profile" style={{
                display: "inline-block",
                background: palette.gold, color: palette.navy,
                textDecoration: "none", borderRadius: 10,
                padding: "14px 20px", fontWeight: 850, fontSize: 13
              }}>{t.start} ↗</a>
            </div>

            <div style={{
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.06)",
              padding: mobile ? 22 : 30, borderRadius: 22
            }}>
              <div style={{ color: palette.gold, fontSize: 12 }}>
                ✦ &nbsp; NASHAMA IT
              </div>
              <h2 style={{ fontSize: 25, lineHeight: 1.4 }}>
                {rtl ? "اكتشف إمكانياتك" : "Discover your potential"}
              </h2>
              {[
                rtl ? "مهاراتك تصنع الفرق" : "Skills that set you apart",
                rtl ? "خطوات تعلّم واضحة" : "A clearer learning path",
                rtl ? "مستقبل تقني أقوى" : "A stronger tech future"
              ].map((item, i) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 0",
                  borderTop: "1px solid rgba(255,255,255,.12)"
                }}>
                  <span style={{
                    background: "rgba(201,163,75,.15)",
                    color: palette.gold, padding: 10, borderRadius: 9
                  }}>{["✦", "↗", "◎"][i]}</span>
                  <span style={{ fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="profile" style={{
          padding: mobile ? "48px 14px" : "76px 24px"
        }}>
          <div style={{ maxWidth: 900, margin: "auto" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{
                color: "#A27B25", letterSpacing: 2,
                fontSize: 11, fontWeight: 850
              }}>{t.eyebrow}</div>
              <h2 style={{
                fontSize: "clamp(25px, 4vw, 38px)",
                margin: "12px 0"
              }}>{t.formTitle}</h2>
              <p style={{
                color: palette.muted, fontSize: 14,
                lineHeight: 1.8, maxWidth: 600, margin: "auto"
              }}>{t.formDesc}</p>
            </div>

            <form onSubmit={submit} style={cardStyle}>
              <div style={{
                display: "grid",
                gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                gap: 20
              }}>
                <label style={labelStyle}>
                  {t.name}
                  <input
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder={t.namePlaceholder}
                    style={inputStyle}
                  />
                </label>

                <div style={labelStyle}>
                  <SearchSelect label={t.position}
                    options={t.positions} value={form.position}
                    onChange={(v) => set("position", v)} t={t}/>
                </div>

                <div style={labelStyle}>
                  <SearchSelect label={t.location}
                    options={t.locations} value={form.location}
                    onChange={(v) => set("location", v)} t={t}/>
                </div>

                <div style={labelStyle}>
                  <SearchSelect label={t.experience}
                    options={t.experiences} value={form.experience}
                    onChange={(v) => set("experience", v)} t={t}/>
                </div>

                <div style={labelStyle}>
                  <SearchSelect label={t.education}
                    options={t.educations} value={form.education}
                    onChange={(v) => set("education", v)} t={t}/>
                </div>

                <div style={labelStyle}>
                  <SearchSelect label={t.work}
                    options={t.works} value={form.work}
                    onChange={(v) => set("work", v)} t={t}/>
                </div>
              </div>

              <div style={{
                marginTop: 8, paddingTop: 22,
                borderTop: `1px solid ${palette.border}`
              }}>
                <SearchSelect
                  label={t.skills}
                  options={t.skillOptions}
                  selected={form.skills}
                  onChange={(v) => {
                    set("skills", v);
                    set("confidence", Object.fromEntries(
                      v.map((skill) => [
                        skill, form.confidence[skill] ?? 1
                      ])
                    ));
                  }}
                  multiple max={3} t={t}
                />
                <p style={{
                  fontSize: 12, color: palette.muted,
                  marginTop: 10, lineHeight: 1.7
                }}>{t.skillHint}</p>
              </div>

              {form.skills.length > 0 && (
                <div style={{
                  marginTop: 24, padding: 18,
                  background: palette.pale, borderRadius: 14
                }}>
                  <h3 style={{ fontSize: 14, marginTop: 0 }}>
                    {t.confidence}
                  </h3>
                  {form.skills.map((skill) => (
                    <label key={skill} style={{
                      display: "grid",
                      gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
                      alignItems: "center", gap: 12, padding: "9px 0",
                      fontSize: 13, fontWeight: 700
                    }}>
                      <span>{skill}</span>
                      <select
                        value={form.confidence[skill] ?? 1}
                        onChange={(e) => set("confidence", {
                          ...form.confidence, [skill]: Number(e.target.value)
                        })}
                        style={inputStyle}
                      >
                        {t.confidenceOptions.map((option, i) => (
                          <option key={option} value={i}>{option}</option>
                        ))}
                      </select>
                    </label>
                  ))}
                </div>
              )}

              <label style={{ ...labelStyle, marginTop: 22 }}>
                {t.portfolio}
                <input
                  type="url"
                  value={form.portfolio}
                  onChange={(e) => set("portfolio", e.target.value)}
                  placeholder="https://..."
                  style={inputStyle}
                />
              </label>

              <button type="submit" disabled={form.skills.length !== 3}
                style={{
                  width: "100%", padding: 16, borderRadius: 11,
                  border: 0, marginTop: 8,
                  background: form.skills.length === 3
                    ? palette.navy : "#A8B6C8",
                  color: "#FFFFFF", fontWeight: 850,
                  fontSize: 14, cursor: form.skills.length === 3
                    ? "pointer" : "not-allowed"
                }}>
                {t.submit}
              </button>
            </form>
          </div>
        </section>

        {result && (
          <section id="results" style={{
            padding: mobile ? "10px 14px 50px" : "10px 24px 70px"
          }}>
            <div style={{ ...cardStyle, maxWidth: 844, margin: "auto" }}>
              <div style={{
                color: "#A27B25", fontSize: 11,
                fontWeight: 850, letterSpacing: 1
              }}>{t.results}</div>
              <h2 style={{ fontSize: 26 }}>
                {rtl ? `أهلًا ${form.name}` : `Welcome, ${form.name}`}
              </h2>
              <p style={{ color: palette.muted, fontSize: 13 }}>
                {form.position} · {form.location}
              </p>

              <div style={{
                background: palette.pale, borderRadius: 16,
                padding: 22, margin: "22px 0",
                display: "flex", alignItems: "center",
                gap: 20, flexWrap: "wrap"
              }}>
                <div style={{
                  width: 100, height: 100, borderRadius: "50%",
                  border: `7px solid ${palette.gold}`,
                  display: "grid", placeItems: "center",
                  fontSize: 26, fontWeight: 900
                }}>{form.demoScore}%</div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <h3>{t.score}</h3>
                  <p style={{
                    color: palette.muted, fontSize: 12, lineHeight: 1.8
                  }}>{t.disclaimer}</p>
                </div>
              </div>

              <h3>{t.strengths}</h3>
              <p>{form.skills.join(" · ")}</p>

              <h3>{t.gaps}</h3>
              <ul>{gapSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>

              <h3>{t.plan}</h3>
              <p style={{ color: palette.muted, lineHeight: 1.9 }}>
                {rtl
                  ? "اختر مهارة واحدة لتطويرها، أنجز مشروعًا تطبيقيًا صغيرًا، ثم قارن مهاراتك بمتطلبات إعلانات الوظائف الحديثة."
                  : "Choose one skill to improve, build a small practical project, and compare your skills against current job descriptions."}
              </p>

              <button onClick={() => {
                setResult(false);
                document.getElementById("profile")?.scrollIntoView({
                  behavior: "smooth"
                });
              }} style={{
                ...fieldStyle, width: "auto", cursor: "pointer",
                fontWeight: 800, marginTop: 12
              }}>{t.edit}</button>
            </div>
          </section>
        )}

        <section id="about" style={{
          background: "#EDF3FA",
          padding: mobile ? "48px 20px" : "72px 24px"
        }}>
          <div style={{ maxWidth: 850, margin: "auto", textAlign: "center" }}>
            <div style={{
              color: "#A27B25", fontSize: 11,
              fontWeight: 850, letterSpacing: 2
            }}>{t.about}</div>
            <h2 style={{ fontSize: "clamp(25px, 4vw, 36px)" }}>
              {t.aboutTitle}
            </h2>
            <p style={{
              color: palette.muted, lineHeight: 2,
              fontSize: 14, maxWidth: 680, margin: "auto"
            }}>{t.aboutDesc}</p>
          </div>
        </section>
      </main>

      <footer style={{
        background: palette.navy, color: "#FFFFFF",
        padding: "28px 20px",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", gap: 14, flexWrap: "wrap",
        fontSize: 12
      }}>
        <strong>Nashama <span style={{ color: palette.gold }}>IT</span></strong>
        <span style={{ color: "#C8D6E7" }}>{t.footer}</span>
        <span style={{ color: "#C8D6E7" }}>© 2026 Nashama IT</span>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "#526780",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700
};

export default App;
