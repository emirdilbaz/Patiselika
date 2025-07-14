window.onload = function () {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
        window.scrollTo(0, 0);
    }
    highlightActiveNav();
    setupFormValidation();
    startTimeUpdater();
    scrollRevealSections();
};


function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function highlightActiveNav() {
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const isim = document.getElementById("isim").value.trim();
        const telefon = document.getElementById("telefon").value.trim();
        const email = document.getElementById("email").value.trim();
        const bagis = document.getElementById("bagis").value.trim();

        
        if (!isim || !telefon || !email || !bagis) {
            alert("Lütfen tüm alanları doldurunuz.");
            return;
        }

        
        alert("Bağışınız için teşekkürler!");
        form.reset();
    });
});

function startTimeUpdater() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const clock = document.createElement('p');
    clock.id = 'footer-clock';
    clock.style.fontSize = '12px';
    footer.appendChild(clock);

    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('tr-TR');
        clock.textContent = 'Şu anki saat: ' + time;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

function scrollRevealSections() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
}

function toggleNightMode() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    navbar.classList.toggle('night-navbar');

    const btn = document.querySelector('#nightModeBtn');
    if (btn) {
        btn.textContent = navbar.classList.contains('night-navbar') ? '☀ Gündüz Modu' : '🌙 Gece Modu';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.id = 'nightModeBtn';
    btn.textContent = '🌙 Gece Modu';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.padding = '10px';
    btn.style.zIndex = '1000';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.backgroundColor = '#aa3f00';
    btn.style.color = '#fff';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', toggleNightMode);
    document.body.appendChild(btn);
});

