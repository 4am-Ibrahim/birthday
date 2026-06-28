/*==================================
  LOADER
==================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        document.getElementById("loader").style.visibility = "hidden";

    }, 2200);

});

/*==================================
  MUSIC
==================================*/

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");

let playing = false;

function playMusic() {

    music.play();

    playing = true;

    musicBtn.innerHTML = "⏸️";

}

function pauseMusic() {

    music.pause();

    playing = false;

    musicBtn.innerHTML = "🎵";

}

musicBtn.onclick = () => {

    if (playing) {

        pauseMusic();

    } else {

        playMusic();

    }

};

startBtn.onclick = () => {

    playMusic();

    document.getElementById("gallery").scrollIntoView({

        behavior: "smooth"

    });

};

/*==================================
  FLOATING HEARTS
==================================*/

const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 25 + 15 + "px";

    heart.style.animationDuration = Math.random() * 4 + 5 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 250);

/*==================================
  LOVE LETTER
==================================*/

const message = `Dear My Meowdrella ❤️,

I love you so much.

I'm not sure how this feeling started,
but it has only grown deeper over time.

I know I've angered and hurt you with my words before,
but I am certain of one thing...

I never want to lose you,
and I never want you to face life's difficulties alone.

I promise to do everything I can
to make you

Happy ❤️
Happy ❤️
Happy ❤️ 😂

I love you more than anything else
in this world.

Will you be mine
for the rest of our lives? 😌❤️

Forever Yours ❤️`;

const typingText = document.getElementById("typingText");

let i = 0;

function typeWriter() {

    if (i < message.length) {

        typingText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && i === 0) {

            typeWriter();

        }

    });

});

observer.observe(document.getElementById("letter"));

/*==================================
  SCROLL ANIMATION
==================================*/

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

sections.forEach(section => {

    if(section.id !== "gallery"){
        section.classList.add("fadeUp");
        reveal.observe(section);
    }

});

/*==================================
  GALLERY HOVER EFFECT
==================================*/

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.transform =

            `rotateX(${-(y-rect.height/2)/18}deg)
             rotateY(${(x-rect.width/2)/18}deg)
             scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "rotateX(0) rotateY(0) scale(1)";

    });

});

/*==================================
  YES BUTTON
==================================*/

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

    yesBtn.innerHTML = "I Love You Too ❤️";

    yesBtn.style.background = "#00b894";

    alert("Yay!! ❤️\n\nForever Together 🥹❤️");

});

/*==================================
  PARALLAX HERO
==================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =

        window.pageYOffset * 0.45 + "px";

});

/*==================================
  HEART CURSOR
==================================*/

document.addEventListener("click", e => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.fontSize = "24px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition = "all 1s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =

            "translateY(-120px) scale(2)";

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});

/*==================================
  TITLE ANIMATION
==================================*/

const titles = document.querySelectorAll("h1");

setInterval(() => {

    titles.forEach(title => {

        title.classList.toggle("glow");

    });

}, 2000);

const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// PC: Move when cursor comes within 120px
document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - centerX,
        e.clientY - centerY
    );

    if (distance < 120) {
        moveNoButton();
    }
});

// Mobile: Move before tap
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// If somehow clicked, move again
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

/*==================================
  END
==================================*/
