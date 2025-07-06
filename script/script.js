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

        const bubbles = [
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

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "rgb(1, 0, 15)"; 
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

