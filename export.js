var header = `
<!-- navbar start -->
<div class="topbar">
<span><i class="fa-solid fa-eye"></i><b id="visitors">0</b> visits</span>
<span><i class="fa-regular fa-clock"></i><b id="clock">Loading...</b></span>
</div>

<nav class="navbar">
<a href="#home" class="logo">AYAN<span>.</span></a>

<button class="menu-btn" id="menuBtn" aria-label="Toggle menu" aria-expanded="false">
<i class="fa-solid fa-bars"></i>
</button>

<div class="nav-links" id="navLinks">
<a href="index.html" class="active"><i class="fa-solid fa-house"></i>Home</a>
<a href="about.html"><i class="fa-solid fa-user"></i>About Me</a>
<a href="skills.html"><i class="fa-solid fa-code"></i>Skills</a>
<a href="projects.html"><i class="fa-solid fa-folder-open"></i>Projects</a>
<a href="Resume.html"><i class="fa-solid fa-file-lines"></i>Resume / CV</a>
<a href="contant.html"><i class="fa-regular fa-envelope"></i>Contact Me</a>
</div>

<a href="contant.html" class="talk"><i class="fa-solid fa-paper-plane"></i> Let's Talk</a>
</nav>
<!-- navbar end -->`

var footer = `
<footer class="site-footer">
  <div class="footer-container">

    <div class="footer-main">
      <div class="footer-about">
        <a href="#home" class="footer-logo">AYAN<span>.</span></a>
        <p>I'm a Front-End Developer passionate about creating modern, responsive and user-friendly websites.</p>

        <div class="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <a href="index.html">Home</a>
        <a href="about.html">About Me</a>
        <a href="skills.html">Skills</a>
        <a href="projects.html">Projects</a>
        <a href="contant.html">Contact Me</a>
      </div>

      <div class="footer-contact">
        <h3>Let's Connect</h3>
        <p>Have a project in mind? Let's build something great together.</p>
        <a href="contant.html" class="footer-contact-btn">
          Contact Me <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <span id="footerYear"></span> <span class="footer-highlight">Ayan.</span> All rights reserved.</p>
      <a href="index.html" class="back-to-top">Back to Top <i class="fa-solid fa-arrow-up"></i></a>
    </div>

  </div>
</footer>
`

export{header,footer}