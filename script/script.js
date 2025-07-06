document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

let whitemode = localStorage.getItem('whitemode');
const themeSwitch = document.getElementById('theme-switch');

const enableWhitemode = () => {
    document.body.classList.add('whitemode');
    localStorage.setItem('whitemode', 'active');
};
const disableWhitemode = () => {
    document.body.classList.remove('whitemode');
    localStorage.setItem('whitemode', null);
};

if (whitemode === "active") enableWhitemode();

themeSwitch.addEventListener("click", () => {
    whitemode = localStorage.getItem('whitemode');
    whitemode !== "active" ? enableWhitemode() : disableWhitemode();
});

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('galaxy-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', resize);
        resize();

        const darkBubbles = [
            {
                x: width * 0.15,
                y: height * 0.7,
                r: 90,
                color: "rgba(167, 26, 26, 0.5)",
                dx: 0.3,
                dy: -0.2,
                blur: 40
            },
            {
                x: width * 0.3,
                y: height * 0.4,
                r: 70,
                color: "rgba(52, 13, 124, 0.5)",
                dx: 0.2,
                dy: 0.25,
                blur: 40
            },
            {
                x: width * 0.85,
                y: height * 0.3,
                r: 80,
                color: "rgba(89, 3, 116, 0.5)",
                dx: -0.25,
                dy: 0.18,
                blur: 40
            }
        ];

        const lightBubbles = [
            {
                x: width * 0.15,
                y: height * 0.7,
                r: 90,
                color: "rgba(255, 140, 140, 0.5)",
                dx: 0.3,
                dy: -0.2,
                blur: 40
            },
            {
                x: width * 0.3,
                y: height * 0.4,
                r: 70,
                color: "rgba(140, 140, 255, 0.5)",
                dx: 0.2,
                dy: 0.25,
                blur: 40
            },
            {
                x: width * 0.85,
                y: height * 0.3,
                r: 80,
                color: "rgba(200, 140, 255, 0.5)",
                dx: -0.25,
                dy: 0.18,
                blur: 40
            }
            
        ];

        function animate() {
            const isWhiteMode = localStorage.getItem('whitemode') === 'active';
            const bubbles = isWhiteMode ? lightBubbles : darkBubbles;
            const bgColor = isWhiteMode ? "rgb(255, 255, 255)" : "rgb(1, 0, 15)";

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            for (let b of bubbles) {
                ctx.save();
                ctx.globalAlpha = 0.8;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fillStyle = b.color;
                ctx.shadowColor = b.color;
                ctx.shadowBlur = b.blur;
                ctx.fill();
                ctx.restore();

                b.x += b.dx;
                b.y += b.dy;

                if (b.x - b.r < 0 || b.x + b.r > width) b.dx *= -1;
                if (b.y - b.r < 0 || b.y + b.r > height) b.dy *= -1;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
});
