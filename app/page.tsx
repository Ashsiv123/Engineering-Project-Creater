'use client';

import { useMemo, useRef, useState } from 'react';
import { buildStyles, createProjectBrief, disciplines, filterProjects, modules } from './projects';

export default function Home() {
  const [discipline, setDiscipline] = useState('Any');
  const [module, setModule] = useState('Any');
  const [budget, setBudget] = useState(40);
  const [weeks, setWeeks] = useState(4);
  const [style, setStyle] = useState('Any');
  const [seed, setSeed] = useState(0);
  const [saved, setSaved] = useState(false);
  const resultRef = useRef<HTMLElement>(null);
  const matches = useMemo(
    () => filterProjects({ discipline, module, budget, weeks, style }),
    [discipline, module, budget, weeks, style],
  );
  const project = matches.length > 0 ? matches[seed % matches.length] : null;

  function generate() {
    setSeed((currentSeed) => currentSeed + 1);
    setSaved(false);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      resultRef.current?.focus({ preventScroll: true });
    });
  }

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top"><span className="brand-mark">∑</span> Buildfolio</a>
        <a href="#how">How it works</a><a href="#generator">Idea generator</a>
        <span className="nav-pill">Made for year one</span>
      </nav>
      <section className="hero" id="top">
        <div className="eyebrow"><span /> FROM MODULE TO PORTFOLIO</div>
        <h1>Build something<br /><em>worth talking about.</em></h1>
        <p className="hero-copy">Turn the subjects you are already learning into a practical engineering project—complete with a build plan, parts list and CV-ready story.</p>
        <a className="primary" href="#generator">Find my project <span>↘</span></a>
        <div className="hero-stats"><div><strong>8</strong><span>curated ideas</span></div><div><strong>£15+</strong><span>student budgets</span></div><div><strong>2–5</strong><span>week builds</span></div></div>
        <div className="orbit" aria-hidden="true"><div className="orbital o1" /><div className="orbital o2" /><div className="planet">PROJECT<br /><b>01</b></div><span className="tag t1">DESIGN</span><span className="tag t2">TEST</span><span className="tag t3">ITERATE</span></div>
      </section>
      <section className="how" id="how">
        <p className="section-label">A BETTER STARTING POINT</p>
        <div className="how-grid"><h2>Your coursework is<br />full of good ideas.</h2><p>You do not need to invent the next rocket company. A strong first-year project shows curiosity, a clear process and evidence that you can turn theory into something real.</p></div>
        <div className="steps"><article><b>01</b><h3>Choose your context</h3><p>Tell us your discipline, current module, time and budget.</p></article><article><b>02</b><h3>Get a buildable brief</h3><p>Receive a scoped idea with materials and measurable outcomes.</p></article><article><b>03</b><h3>Tell the story</h3><p>Use the milestones and CV sentence to document your work.</p></article></div>
      </section>
      <section className="generator" id="generator">
        <div className="generator-head"><p className="section-label light">PROJECT GENERATOR / BETA</p><h2>What do you want<br />to make real?</h2></div>
        <div className="controls">
          <label>Engineering discipline<select value={discipline} onChange={(event) => setDiscipline(event.target.value)}>{disciplines.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Module to connect<select value={module} onChange={(event) => setModule(event.target.value)}>{modules.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Build style<select value={style} onChange={(event) => setStyle(event.target.value)}>{buildStyles.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Maximum budget <output>£{budget}</output><input aria-label="Maximum budget" type="range" min="15" max="75" step="5" value={budget} onChange={(event) => setBudget(Number(event.target.value))} /></label>
          <label>Time available <output>{weeks} weeks</output><input aria-label="Time available" type="range" min="2" max="6" value={weeks} onChange={(event) => setWeeks(Number(event.target.value))} /></label>
          <button className="generate" type="button" onClick={generate}>Generate my idea <span>→</span></button>
        </div>
      </section>
      <section className="result-wrap" id="result" ref={resultRef} tabIndex={-1} aria-live="polite">
        {project ? <article className="result-card">
          <div className="result-top"><div><p className="section-label">YOUR PROJECT MATCH / {String(seed % matches.length + 1).padStart(2, '0')}</p><h2>{project.title}</h2><p className="summary">{project.summary}</p></div><button className={saved ? 'save saved' : 'save'} type="button" aria-pressed={saved} onClick={() => setSaved((isSaved) => !isSaved)}>{saved ? '✓ Saved' : '♡ Save idea'}</button></div>
          <div className="chips"><span>{project.difficulty}</span><span>{project.weeks} weeks</span><span>≈ £{project.cost}</span><span>{project.style}</span></div>
          <div className="outcome"><b>THE FINISH LINE</b><p>{project.outcome}</p></div>
          <div className="detail-grid"><div><h3>Build milestones</h3><ol>{project.milestones.map((milestone, index) => <li key={milestone}><b>{index + 1}</b>{milestone}</li>)}</ol></div><div><h3>Starter parts</h3><ul>{project.parts.map((part) => <li key={part}>↳ {part}</li>)}</ul><h3 className="skill-title">Skills you will prove</h3><div className="skill-list">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div>
          <blockquote><span>CV STARTER</span>“{project.cv}”</blockquote>
          <div className="result-actions"><button type="button" onClick={generate}>Try another idea ↻</button><a href={`data:text/plain;charset=utf-8,${encodeURIComponent(createProjectBrief(project))}`} download={`${project.title.toLowerCase().replaceAll(' ', '-')}.txt`}>Download brief ↓</a></div>
        </article> : <div className="empty"><p className="section-label">NO EXACT MATCH — YET</p><h2>Give the project a little more room.</h2><p>Try increasing your budget or time, or choose “Any” for one of the filters.</p></div>}
      </section>
      <footer><a className="brand" href="#top"><span className="brand-mark">∑</span> Buildfolio</a><p>Small projects. Serious potential.</p><span>Built for curious engineers.</span></footer>
    </main>
  );
}
