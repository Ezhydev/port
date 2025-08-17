

// title header
const heroText = "Firemoon";
let index = 0;
function typeHero() {
    if(index <= heroText.length){
        document.getElementById('title').innerText = heroText.slice(0,index);
        index++;
        setTimeout(typeHero, 100);
    }
}

// Fade-in
const faders = document.querySelectorAll('.fade');
const appearOptions = {threshold:0.2, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));


// Dark/Light toggle
document.getElementById('themeToggle').addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    document.footer.classList.toggle('dark-mode');
});

// Animate skill bars
function animateSkills(){
    document.querySelectorAll('.skill-bar div').forEach(div=>{
        div.style.width = div.style.width; // already di-set inline di HTML
    });
}

// Animate project cards
function animateProjects(){
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card,i)=>{
        setTimeout(()=>{card.classList.add('show');}, i*300);
    });
}
// Jalankan saat load
window.addEventListener('load', ()=>{
    typeHero();
    animateSkills();
    animateProjects();
});

//pindah halaman project
const buttonD1 = document.getElementById('buttonD1');
const buttonD2 = document.getElementById('buttonD2');
const buttonD3 = document.getElementById('buttonD3');

buttonD1.addEventListener("click", () => {
    window.location.href = "https://asunaweb.vercel.app/index.html";
})

buttonD2.addEventListener("click", () => {
    window.location.href = "https://testingweb-red.vercel.app/";
})

buttonD3.addEventListener("click", () => {
    window.location.href = "https://rekomendasi-anime.vercel.app/";
})

//music button
//music 1 (to the bone)
const music = document.getElementById("music");
const btn = document.getElementById("playPauseBtn");

    btn.addEventListener("click", () => {
      if (music.paused) {
        music.play();
        btn.textContent = "⏸";
      } else {
        music.pause();
        btn.textContent = "▶️";
      }
    });
//music 2 (memories)
const music2 = document.getElementById("music2");
const btn2 = document.getElementById("playPauseBtn2");

    btn2.addEventListener("click", () => {
      if (music2.paused) {
        music2.play();
        btn2.textContent = "⏸";
      } else {
        music2.pause();
        btn2.textContent = "▶️";
      }
    });
//music 3 (enchanted)
const music3 = document.getElementById("music3");
const btn3 = document.getElementById("playPauseBtn3");

    btn3.addEventListener("click", () => {
      if (music3.paused) {
        music3.play();
        btn3.textContent = "⏸";
      } else {
        music3.pause();
        btn3.textContent = "▶️";
      }
    });
