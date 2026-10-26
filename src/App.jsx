
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const skills = [
    { name: 'HTML & CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'C++ & Python', icon: '💻' },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        
        <a href="#home" className="logo">
          Project<span>Journal</span>
        </a>


        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">HELLO, WORLD! 👋</p>
          <h1>
            Building ideas
            <br />
            <span>into reality.</span>
          </h1>

          <p className="hero-description">
            I'm a CSE student and aspiring developer exploring
            technology, creating projects, and learning something
            new every day.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Project ↗
            </a>
            <a href="#about" className="btn btn-secondary">
              Discover More
            </a>
          </div>

          <div className="counter-card">
            <p>My learning journey</p>
            <h2>{count}</h2>
            <p>Button clicks and counting!</p>

            <button
              className="btn btn-primary"
              onClick={() => setCount(count + 1)}
            >
              Increase Counter +
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p>
            I'm a Computer Science and Engineering student
            passionate about software development, problem-solving,
            and building useful digital experiences.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I'M LEARNING</p>
          <h2>My Skills</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span>{skill.icon}</span>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">WHAT I'M BUILDING</p>
          <h2>Featured Project</h2>

          <div className="project-card">
            <div className="project-icon">📚</div>
            <h3>Library Management System</h3>
            <p>
              A website project designed to help users explore books
              and manage library information.
            </p>

            <div className="project-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an idea?</h2>
          <p>
            I'm learning, building, and always looking for
            opportunities to grow.
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit GitHub ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} StudentDev. Built with React.
        </p>
      </footer>
    </div>
  );
}

export default App;
