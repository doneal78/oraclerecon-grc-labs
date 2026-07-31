import { FaGithub, FaGitlab, FaLinkedin, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import './App.css'

const builds = [
  {
    num: '01',
    tag: 'FLAGSHIP BUILD',
    name: 'Compliance Automation Lab',
    metric: '40% AT RISK → 78% NEEDS IMPROVEMENT',
    desc: 'A live GRC engineering build on AWS following the AJ Yawn curriculum. Python control mapping across NIST 800-53, ISO 27001, and SOC 2. Flask risk scoring app. boto3 AWS Config compliance checker. Terraform baseline deployed to a live account. Security Hub CSPM with FSBP and CIS v1.2.0. GitHub Actions CI/CD gate blocking non-compliant configs before merge. Cosign keyless signing with tamper verification on infrastructure artifacts.',
    tags: ['Python', 'Terraform', 'AWS Security Hub', 'boto3', 'GitHub Actions', 'NIST 800-53', 'OSCAL'],
    links: [
      { label: 'GitLab', href: 'https://gitlab.com/doneal78-group', icon: 'gitlab', primary: false }
    ]
  },
  {
    num: '02',
    tag: 'LIVE TOOL',
    name: 'OracleRecon Shield',
    metric: 'Assessment time: days → under 30 minutes',
    desc: 'AI-powered SMB risk assessment platform built on Google Gemini 2.5 Flash. Business owners answer 25 questions across 6 security domains and receive a risk grade, prioritized vulnerabilities, and a remediation roadmap. Concept to live in under 8 hours, built solo.',
    tags: ['Gemini 2.5 Flash', 'React', 'AI Risk Assessment', 'Prompt Engineering'],
    links: [
      { label: 'Launch app', href: 'https://shield.davidoneal.dev', icon: 'ext', primary: true }
    ]
  },
  {
    num: '03',
    tag: 'WEEKLY CHALLENGES',
    name: 'GRC Engineering Club Builds',
    metric: 'CGE-AUD certified · July 2026',
    desc: 'Five weekly challenge builds completed in public on LinkedIn. GitHub Actions CI/CD gate that blocks non-compliant Terraform configs before merge. Cosign keyless signing with tamper verification on infrastructure artifacts. NIST 800-53 Rev 5 baseline deployed into a live Security Hub account alongside FSBP and CIS v1.2.0.',
    tags: ['GitHub Actions', 'Cosign', 'NIST 800-53 Rev 5', 'Policy-as-Code', 'CI/CD'],
    links: [
      { label: 'Club profile', href: 'https://directory.grcengclub.com/engineers/doneal78/', icon: 'ext', primary: false },
      { label: 'GitLab', href: 'https://gitlab.com/doneal78-group', icon: 'gitlab', primary: false }
    ]
  },
  {
    num: '04',
    tag: 'DETECTION LAB',
    name: 'Cybersecurity Home Lab',
    metric: 'TCM Security PSAA curriculum',
    desc: 'VirtualBox lab with Windows and Ubuntu workstations standing in for a small enterprise network. Hands-on IR, log analysis, and detection engineering practice outside of work. Supporting PSAA certification preparation.',
    tags: ['VirtualBox', 'Windows Server', 'Ubuntu', 'Splunk', 'Detection Engineering'],
    links: []
  }
]

const methods = [
  {
    num: '01',
    title: 'Build the control in code',
    desc: 'Policy-as-code, Infrastructure-as-Code, and compliance automation replace manual checklists with reproducible, version-controlled evidence.'
  },
  {
    num: '02',
    title: 'Prove it in production',
    desc: 'Real AWS accounts, live Security Hub findings, and CI/CD gates that enforce compliance before anything merges. Not a lab screenshot.'
  },
  {
    num: '03',
    title: 'Ship the evidence',
    desc: 'Signed artifacts, audit-ready documentation, and automated evidence collection that survives the next assessor who has never met you.'
  }
]

function LinkIcon({ type }) {
  if (type === 'gitlab') return <FaGitlab size={13} />
  if (type === 'github') return <FaGithub size={13} />
  return <FaExternalLinkAlt size={11} />
}

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a href="#top" className="nav-brand">
          OracleRecon <span>GRC Labs</span>
        <div className="nav-links">
          <a href="#builds">Builds</a>
          <a href="#method">Method</a>
          <a href="#about">About</a>
          <a href="https://davidoneal.dev" className="nav-ext" target="_blank" rel="noopener noreferrer">
            davidoneal.dev ↗
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-label">OracleRecon GRC Labs</div>
        <h1>
          GRC engineering built in code.<br />
          Compliance posture <em>proven in production.</em>
        </h1>
        <p className="hero-sub">
          A public build log of GRC engineering work on AWS. Real accounts, live findings,
          signed artifacts, and automated evidence. Not described — deployed.
        </p>
        <div className="hero-actions">
          <a href="#builds" className="btn-primary">
            View the builds <FaArrowRight size={13} />
          <a href="https://davidoneal.dev" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Full portfolio ↗
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="terminal-dot" style={{background:'#FF5F57'}} />
            <div className="terminal-dot" style={{background:'#FFBD2E'}} />
            <div className="terminal-dot" style={{background:'#28C840'}} />
            <span className="terminal-title">compliance-automation-lab — aws-security-hub</span>
          </div>
          <div className="terminal-body">
            <div><span className="t-cmd">$</span> <span className="t-comment"># Security Hub CSPM baseline — live account</span></div>
            <div><span className="t-cmd">$</span> terraform apply -auto-approve</div>
            <div style={{marginTop:'0.5rem'}}><span className="t-key">aws_securityhub_standards_subscription</span><span className="t-val"> FSBP </span>→ <span className="t-good">created</span></div>
            <div><span className="t-key">aws_securityhub_standards_subscription</span><span className="t-val"> CIS v1.2.0 </span>→ <span className="t-good">created</span></div>
            <div><span className="t-key">aws_securityhub_standards_subscription</span><span className="t-val"> NIST 800-53 Rev 5 </span>→ <span className="t-good">created</span></div>
            <div style={{marginTop:'0.5rem'}}><span className="t-comment"># Compliance posture delta</span></div>
            <div><span className="t-key">BEFORE</span>  <span className="t-warn">40% AT RISK</span></div>
            <div><span className="t-key">AFTER </span>  <span className="t-good">78% NEEDS IMPROVEMENT</span></div>
            <div style={{marginTop:'0.5rem'}}><span className="t-cmd">$</span> <span className="t-cursor" /></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">4</span>
          <span className="stat-label">Builds in production</span>
        </div>
        <div className="stat">
          <span className="stat-num">3</span>
          <span className="stat-label">AWS frameworks active</span>
        </div>
        <div className="stat">
          <span className="stat-num">5</span>
          <span className="stat-label">GRC Club challenges</span>
        </div>
        <div className="stat">
          <span className="stat-num">CGE-AUD</span>
          <span className="stat-label">Certified 2026</span>
        </div>
      </div>

      {/* BUILDS */}
      <section className="section" id="builds">
        <div className="section-label">// builds</div>
        <h2>Work that ships evidence,<br />not slide decks.</h2>
        <p className="section-sub">
          Each build starts with a real compliance problem and ends with
          deployable code, auditable artifacts, and measurable posture improvement.
        </p>

        <div className="cert-banner">
          <div className="cert-banner-text">
            <h3>Certified GRC Engineer, Auditor Specialty (CGE-AUD)</h3>
            <p>GRC Engineering Club · Issued July 21, 2026 · Valid July 21, 2027</p>
          </div>
          
          <a href="https://cert.grcengclub.com/verify/cgeaud-3f4e4e28-c2e9-4162-9b6b-48e06b47caaf" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">Verify credential</a>
        </div>

        <div className="builds-grid">
          {builds.map(b => (
            <div className="build-card" key={b.num}>
              <div className="build-num">{b.num}</div>
              <div className="build-tag">{b.tag}</div>
              <h3>{b.name}</h3>
              <div className="build-metric">{b.metric}</div>
              <p>{b.desc}</p>
              <div className="build-tags">
                {b.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              {b.links.length > 0 && (
                <div className="build-links">
                  {b.links.map(l => (
                    
                      key={l.label}
                      href={l.href}
                      className={`build-link ${l.primary ? 'build-link-primary' : ''}`}
                      <LinkIcon type={l.icon} />
                      {l.label} ↗
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="section" id="method">
        <div className="section-label">// method</div>
        <h2>Governance should leave<br />evidence behind.</h2>
        <p className="section-sub">
          Framework fluency matters. The harder work is building controls
          that keep producing evidence after the engagement ends.
        </p>
        <div className="method-grid">
          {methods.map(m => (
            <div className="method-card" key={m.num}>
              <div className="method-num">{m.num}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-label">// about</div>
        <h2>Built from the compliance<br />layer up.</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm David O'Neal, a GRC engineer and AI security practitioner with 8+ years
              across IT operations, security operations, and compliance in financial services,
              government, aerospace, and industrial environments.
            </p>
            <p>
              This lab is where I build in public. Everything here started as a real
              compliance problem and ended as deployable code with auditable evidence.
              No slide decks. No screenshots of someone else's dashboard.
            </p>
            <p>
              I founded OracleRecon to deliver GRC and AI security advisory services to
              SMBs that need practical security guidance without a full-time security team.
            </p>
            <div style={{marginTop:'1.5rem', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
              <a href="https://davidoneal.dev" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Full portfolio ↗
              <a href="https://linkedin.com/in/david-oneal" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
            </div>
          </div>
          <div className="about-stack">
            <h4>Frameworks</h4>
            <ul className="stack-list">
              {['NIST 800-53', 'NIST AI RMF', 'ISO 27001', 'SOC 2', 'NIST CSF'].map(s => <li key={s}>{s}</li>)}
            </ul>
            <h4>Cloud & Automation</h4>
            <ul className="stack-list">
              {['AWS Security Hub', 'Terraform', 'boto3', 'GitHub Actions', 'Python', 'Flask', 'Cosign'].map(s => <li key={s}>{s}</li>)}
            </ul>
            <h4>AI & Security</h4>
            <ul className="stack-list">
              {['Gemini 2.5 Flash', 'Prompt Engineering', 'Ollama', 'AI Risk Assessment', 'Splunk', 'Tenable.io'].map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <div className="connect-section" id="connect">
        <h2>Let's make the compliance<br />inspectable.</h2>
        <p>
          Interested in GRC engineering, cloud compliance automation,
          or AI security governance?
        </p>
        <div className="connect-links">
          <a href="https://linkedin.com/in/david-oneal" className="btn-primary" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={16} /> Connect on LinkedIn
          <a href="https://gitlab.com/doneal78-group" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaGitlab size={16} /> View the code
          <a href="https://github.com/doneal78" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaGithub size={16} /> GitHub
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <span>OracleRecon</span> GRC Labs · David O'Neal
        </div>
        <a href="https://davidoneal.dev" className="footer-link">
          davidoneal.dev ↗
      </footer>
    </div>
  )
}

export default App
