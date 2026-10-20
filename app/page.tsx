import Manuscript from "@/components/Manuscript";
import { path, principles, quotes, research, shelves, talks } from "@/lib/content";

const openCount = shelves.reduce((n, s) => n + s.apps.filter((a) => a.url).length, 0);

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#" className="top-name">정재환</a>
        <nav aria-label="페이지 안 이동">
          <a href="#path">걸어온 길</a>
          <a href="#principles">원칙</a>
          <a href="#made">만든 것</a>
          <a href="#work">연구와 강의</a>
        </nav>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-sheet">
            <Manuscript />
            <p className="pen pen-hero">4학년 담임이자, 교사 개발자</p>
          </div>
          <div className="hero-intro">
            <h1>
              <span className="who-school">서울창일초등학교 교사</span>
              <span className="who-name">정재환</span>
            </h1>
            <p>
              개념기반 탐구수업과 서술형 평가를 연구하고, 교실에 필요한 도구를 직접 만듭니다. 2024년 대학원 연구를 위해 처음
              AI 도구를 만든 뒤로 40개가 넘는 수업용 웹앱을 만들었고, 그중 {openCount}개는 누구나 바로 쓸 수 있게 열어 두었습니다.
            </p>
            <p>
              모든 도구는 같은 질문에서 출발합니다. 이게 자동으로 되면, 아이 입장에서 의미가 있을까?
            </p>
          </div>
        </section>

        <section id="path" className="wrap section">
          <h2 className="section-title">걸어온 길</h2>
          <ol className="path">
            {path.map((m) => (
              <li key={m.year} className="path-row">
                <span className="path-year">{m.year}</span>
                <div>
                  <h3>{m.title}</h3>
                  <ul>
                    {m.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="principles" className="wrap section">
          <h2 className="section-title">만들 때 지키는 세 가지</h2>
          <div className="principles">
            {principles.map((p) => (
              <article key={p.lead} className="principle">
                <h3>{p.lead}</h3>
                <p>{p.body}</p>
                <blockquote>
                  <p>{p.evidence}</p>
                  <cite className="pen">{p.source}</cite>
                </blockquote>
                <p className="principle-apps">이렇게 만든 앱: {p.apps.join(", ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="made" className="wrap section">
          <h2 className="section-title">만든 것들</h2>
          <p className="section-lead">
            지금 바로 열어 볼 수 있는 앱만 모았습니다. 학생은 대부분 가입 없이 선생님이 알려 준 코드로 들어옵니다.
          </p>
          {shelves.map((s) => (
            <div key={s.title} className="shelf">
              <div className="shelf-head">
                <h3>{s.title}</h3>
                <p>{s.note}</p>
              </div>
              <ul className="apps">
                {s.apps.map((a) => (
                  <li key={a.name} className="app">
                    <span className="app-name">{a.name}</span>
                    <span className="app-what">{a.what}</span>
                    <span className="app-who">{a.who}</span>
                    {a.url ? (
                      <a className="app-link" href={a.url} target="_blank" rel="noopener noreferrer">
                        열기<span className="sr-only">: {a.name} (새 창)</span>
                      </a>
                    ) : (
                      <span className="app-link app-link-off">학교 안에서 사용</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="wrap section quotes" aria-label="제가 쓴 문장들">
          {quotes.map((q) => (
            <figure key={q.text}>
              <blockquote>{q.text}</blockquote>
              <figcaption className="pen">{q.source}</figcaption>
            </figure>
          ))}
        </section>

        <section id="work" className="wrap section">
          <h2 className="section-title">연구와 강의</h2>
          <div className="work">
            <div>
              <h3 className="work-title">연구와 집필</h3>
              <ul className="research">
                {research.map((r) => (
                  <li key={r.text}>
                    <span className="research-year">{r.year}</span>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="work-title">선생님들과 만난 자리</h3>
              <p className="work-lead">2025년까지 20개가 넘는 학교에서 1,000명이 넘는 선생님을 만났습니다.</p>
              {talks.map((t) => (
                <div key={t.year} className="talk-year">
                  <span className="research-year">{t.year}</span>
                  <ul>
                    {t.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <p className="foot-line">수업에 써 보시고, 불편한 점을 알려 주시면 고칩니다.</p>
        <ul>
          <li>
            <a href="https://byteacher.vercel.app" target="_blank" rel="noopener noreferrer">T-APP: 선생님들이 만든 수업 앱 모음</a>
          </li>
          <li>
            <a href="https://ai-deep-rho.vercel.app" target="_blank" rel="noopener noreferrer">AI D.E.E.P. 탐구 질문 연구</a>
          </li>
          <li>
            <a href="https://github.com/woghks0524" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <p className="foot-small">© 2026 정재환</p>
      </footer>
    </>
  );
}
