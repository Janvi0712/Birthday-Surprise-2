/* ================================================= */
/* GET ELEMENTS */
/* ================================================= */

const candle = document.getElementById("candle");
const flame = document.getElementById("flame");

const instruction = document.getElementById("instruction");

const cake = document.getElementById("cake");
const knife = document.getElementById("knife");

const cutButton = document.getElementById("cutButton");
const cakeMessage = document.getElementById("cakeMessage");

const readySection = document.getElementById("readySection");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const gift = document.getElementById("gift");
const openButton = document.getElementById("openButton");
const giftText = document.getElementById("giftText");

const videoSection = document.getElementById("videoSection");
const birthdayVideo = document.getElementById("birthdayVideo");
const videoContainer = document.querySelector(".video-container");

const birthdayPhoto = document.getElementById("birthdayPhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");

const confettiContainer =
    document.getElementById("confettiContainer");


/* ================================================= */
/* 1. PHOTO FALLBACK */
/* ================================================= */

birthdayPhoto.addEventListener("error", function () {

    birthdayPhoto.style.display = "none";

    photoPlaceholder.style.display = "flex";

});


birthdayPhoto.addEventListener("load", function () {

    birthdayPhoto.style.display = "block";

    photoPlaceholder.style.display = "none";

});


/* ================================================= */
/* 2. CANDLE CLICK */
/* ================================================= */

let candleBlown = false;

candle.addEventListener("click", function () {

    if (candleBlown) return;

    candleBlown = true;


    /* Flame disappears */

    flame.style.animation = "none";

    flame.style.transform = "scale(0)";

    flame.style.opacity = "0";


    /* Smoke appears */

    document.querySelector(".smoke1").style.animation =
        "smokeRise 2s ease forwards";

    document.querySelector(".smoke2").style.animation =
        "smokeRise 2s .3s ease forwards";


    /* Candle fades */

    setTimeout(() => {

        candle.style.transform =
            "translateY(-20px)";

        candle.style.opacity = "0";

    }, 300);


    /* Change instruction */

    setTimeout(() => {

        instruction.innerHTML = `

            <span class="instruction-icon">🎂</span>

            <div>
                <strong>Wish made! ✨</strong>
                <small>Now it's time to cut the cake</small>
            </div>

        `;

        cutButton.classList.remove("hidden");

    }, 700);

});


/* ================================================= */
/* SMOKE ANIMATION */
/* ================================================= */

const smokeStyle = document.createElement("style");

smokeStyle.innerHTML = `

@keyframes smokeRise {

    0% {
        opacity: 0;
        transform: translateY(0) scale(.5);
    }

    30% {
        opacity: .6;
    }

    100% {
        opacity: 0;
        transform:
            translateY(-70px)
            translateX(15px)
            scale(1.8);
    }

}

`;

document.head.appendChild(smokeStyle);


/* ================================================= */
/* 3. CUT THE CAKE */
/* ================================================= */

let cakeCut = false;

cutButton.addEventListener("click", function () {

    if (cakeCut) return;

    cakeCut = true;


    /* Hide button */

    cutButton.classList.add("hidden");


    /* Knife enters */

    knife.style.opacity = "1";


    /* Cake starts cutting */

    cake.classList.add("cutting");


    /* Update instruction */

    instruction.innerHTML = `

        <span class="instruction-icon">🔪</span>

        <div>
            <strong>Cutting the cake...</strong>
            <small>Best slice saved for you 💕</small>
        </div>

    `;


    /* Confetti */

    setTimeout(() => {

        createConfetti(70);

    }, 900);


    /* Cake celebration */

    setTimeout(() => {

        cakeMessage.classList.remove("hidden");

        instruction.classList.add("hidden");

    }, 1800);


    /* Hide cake */

    setTimeout(() => {

        cake.style.transform =
            "translateY(40px) scale(.2)";

        cake.style.opacity = "0";

        knife.style.opacity = "0";

    }, 2700);


    /* Show photo */

    setTimeout(() => {

        readySection.classList.remove("hidden");

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }, 3400);

});


/* ================================================= */
/* 4. NO BUTTON ESCAPE */
/* ================================================= */
/* ================================================= */
/* NO BUTTON - ESCAPES WHEN CURSOR TOUCHES IT */
/* ================================================= */

function moveNoButton() {

    const padding = 20;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );


    /* Move the button */

    noButton.style.position = "fixed";

    noButton.style.left = randomX + "px";

    noButton.style.top = randomY + "px";

    noButton.style.zIndex = "10000";


    /* Change the message */

    const funnyMessages = [
        "NO 😜",
        "Nope! 😂",
        "Catch me! 🏃",
        "Too slow! 😏",
        "Hehe! 😆",
        "Try again! 😂",
        "You can't say no! 💕"
    ];

    noButton.innerHTML =
        funnyMessages[
            Math.floor(
                Math.random() *
                funnyMessages.length
            )
        ];
}


/* ================================================ */
/* DESKTOP - MOVE WHEN CURSOR TOUCHES NO */
/* ================================================ */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


/* ================================================ */
/* MOBILE - MOVE WHEN TAPPED */
/* ================================================ */

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);
/* ================================================= */
/* 5. YES → PAGE 2 */
/* ================================================= */

yesButton.addEventListener("click", function () {

    /* Celebration */

    createConfetti(100);


    yesButton.innerHTML =
        "YAY! 💕";


    setTimeout(() => {

        page1.classList.remove("active");

        page2.classList.add("active");


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 800);

});


/* ================================================= */
/* 6. OPEN GIFT */
/* ================================================= */

let giftOpened = false;

openButton.addEventListener("click", function () {

    if (giftOpened) return;

    giftOpened = true;


    /* Open gift */

    gift.classList.add("open");


    /* Button disappears */

    openButton.style.transform =
        "scale(0)";

    openButton.style.opacity =
        "0";


    /* Text */

    giftText.innerHTML =
        "✨ Surprise!!! ✨";


    giftText.style.fontSize =
        "18px";

    giftText.style.fontWeight =
        "600";


    /* Big celebration */

    setTimeout(() => {

        createConfetti(150);

    }, 500);


    /* Show video */

    setTimeout(() => {

        videoSection.classList.remove("hidden");

        videoSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 1000);

});


/* ================================================= */
/* 7. VIDEO CHECK */
/* ================================================= */

birthdayVideo.addEventListener(
    "loadeddata",
    function () {

        videoContainer.classList.add(
            "has-video"
        );

        birthdayVideo.play().catch(() => {

            console.log(
                "Browser requires user interaction before playing."
            );

        });

    }
);


birthdayVideo.addEventListener(
    "error",
    function () {

        videoContainer.classList.remove(
            "has-video"
        );

    }
);


/* ================================================= */
/* 8. CONFETTI SYSTEM */
/* ================================================= */

function createConfetti(amount) {

    const shapes = [
        "♥",
        "✦",
        "✧",
        "•",
        "◆",
        "★"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        /* Random position */

        piece.style.left =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            Math.random() * 10 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size * 1.4 + "px";


        /* Random color */

        const colors = [
            "#ed6b9d",
            "#c18be5",
            "#ffd166",
            "#ffffff",
            "#f69bc1",
            "#9d8ee8"
        ];

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /* Random animation */

        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";


        piece.style.animationDelay =
            Math.random() * .7 + "s";


        piece.style.borderRadius =
            Math.random() > .5
                ? "50%"
                : "2px";


        confettiContainer.appendChild(
            piece
        );


        /* Remove after animation */

        setTimeout(() => {

            piece.remove();

        }, 4000);

    }

}


/* ================================================= */
/* 9. RANDOM MINI HEARTS */
/* ================================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.color =
        "#e87ca5";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "2";

    heart.style.transition =
        "transform 5s linear, opacity 5s linear";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.style.transform =
            `translateY(-110vh)
             rotate(${Math.random() * 360}deg)`;

        heart.style.opacity =
            "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 5200);

}


/* Small ambient hearts */

setInterval(() => {

    if (
        Math.random() > .45
    ) {

        createHeart();

    }

}, 2500);