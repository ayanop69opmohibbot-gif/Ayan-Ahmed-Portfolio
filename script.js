
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{
  const isOpen=navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",isOpen);
  menuBtn.innerHTML=isOpen
    ?'<i class="fa-solid fa-xmark"></i>'
    :'<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.querySelectorAll(".nav-links a").forEach(a=>a.classList.remove("active"));
    link.classList.add("active");
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
    menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
  });
});

function updateClock(){
  document.getElementById("clock").textContent=
    new Date().toLocaleString("en-PK",{
      weekday:"short",month:"short",day:"2-digit",
      hour:"2-digit",minute:"2-digit",second:"2-digit",
      hour12:true,timeZone:"Asia/Karachi"
    });
}
updateClock();
setInterval(updateClock,1000);

const key="ayanPortfolioVisits";
const visits=Number(localStorage.getItem(key)||0)+1;
localStorage.setItem(key,visits);
document.getElementById("visitors").textContent=visits;



/* Skills Slider */
const skillsTrack = document.getElementById("skillsTrack");

if (skillsTrack) {
    const skillsWindow = document.querySelector(".skills-window");
    const skillsPrev = document.querySelector(".skills-prev");
    const skillsNext = document.querySelector(".skills-next");
    const skillsDots = document.getElementById("skillsDots");
    const skillCards = [...skillsTrack.querySelectorAll(".skill-card")];

    let skillsIndex = 0;
    let skillsTimer;

    function visibleSkills() {
        if (window.innerWidth <= 600) return 2;
        if (window.innerWidth <= 900) return 3;
        return 4;
    }

    function maxSkillsIndex() {
        return Math.max(0, skillCards.length - visibleSkills());
    }

    function updateSkillsSlider() {
        const card = skillCards[0];
        const gap = parseFloat(getComputedStyle(skillsTrack).gap) || 0;
        const step = card.getBoundingClientRect().width + gap;

        skillsIndex = Math.min(skillsIndex, maxSkillsIndex());
        skillsTrack.style.transform = `translateX(-${skillsIndex * step}px)`;

        [...skillsDots.children].forEach((dot, index) => {
            dot.classList.toggle("active", index === skillsIndex);
        });

        skillsPrev.disabled = skillsIndex === 0;
        skillsNext.disabled = skillsIndex === maxSkillsIndex();

        skillsPrev.style.opacity = skillsPrev.disabled ? "0.4" : "1";
        skillsNext.style.opacity = skillsNext.disabled ? "0.4" : "1";
    }

    function createSkillsDots() {
        skillsDots.innerHTML = "";

        for (let i = 0; i <= maxSkillsIndex(); i++) {
            const dot = document.createElement("button");
            dot.className = "skills-dot";
            dot.setAttribute("aria-label", `Show skill position ${i + 1}`);

            dot.addEventListener("click", () => {
                skillsIndex = i;
                updateSkillsSlider();
                restartSkillsTimer();
            });

            skillsDots.appendChild(dot);
        }
    }

    function nextSkill() {
        skillsIndex = skillsIndex >= maxSkillsIndex() ? 0 : skillsIndex + 1;
        updateSkillsSlider();
    }

    function restartSkillsTimer() {
        clearInterval(skillsTimer);
        skillsTimer = setInterval(nextSkill, 3000);
    }

    skillsNext.addEventListener("click", () => {
        skillsIndex = skillsIndex >= maxSkillsIndex() ? 0 : skillsIndex + 1;
        updateSkillsSlider();
        restartSkillsTimer();
    });

    skillsPrev.addEventListener("click", () => {
        skillsIndex = skillsIndex <= 0 ? maxSkillsIndex() : skillsIndex - 1;
        updateSkillsSlider();
        restartSkillsTimer();
    });

    skillsWindow.addEventListener("mouseenter", () => clearInterval(skillsTimer));
    skillsWindow.addEventListener("mouseleave", restartSkillsTimer);

    window.addEventListener("resize", () => {
        createSkillsDots();
        updateSkillsSlider();
    });

    createSkillsDots();
    updateSkillsSlider();
    restartSkillsTimer();
}




document.getElementById("footerYear").textContent = new Date().getFullYear();


