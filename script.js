

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

