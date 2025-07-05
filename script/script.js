document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
    // Fecha o menu ao clicar fora
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
});

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    } );
} )

const elements = document.querySelectorAll('.hidden');

elements.forEach( (element) => myObserver.observe(element) );
document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

    // Galaxy background
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

        // Generate particles
        const particles = [];
        const PARTICLE_COUNT = 180;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.5 + 0.5,
                speed: Math.random() * 0.2 + 0.05,
                angle: Math.random() * Math.PI * 2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, width, height);

            for (let p of particles) {
                // Movimento circular sutil
                p.angle += p.speed * 0.002;
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed;

                // Rebote nas bordas
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "#fff";
                ctx.shadowColor = "#fff";
                ctx.                document.addEventListener('DOMContentLoaded', function () {
                    // ...seu código de menu e observer...
                
                    // Bolhas animadas no fundo
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
                
                        // Defina as bolhas (cores, posições, velocidades)
                        const bubbles = [
                            {
                                x: width * 0.15,
                                y: height * 0.7,
                                r: 90,
                                color: "#0d615c",
                                dx: 0.3,
                                dy: -0.2,
                                blur: 40
                            },
                            {
                                x: width * 0.3,
                                y: height * 0.4,
                                r: 70,
                                color: "#ff6f61",
                                dx: 0.2,
                                dy: 0.25,
                                blur: 40
                            },
                            {
                                x: width * 0.85,
                                y: height * 0.3,
                                r: 80,
                                color: "#0d615c",
                                dx: -0.25,
                                dy: 0.18,
                                blur: 40
                            }
                        ];
                
                        function animate() {
                            // Fundo sólido
                            ctx.clearRect(0, 0, width, height);
                            ctx.fillStyle = "#57b6b5";
                            ctx.fillRect(0, 0, width, height);
                
                            // Desenha bolhas
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
                
                                // Movimento
                                b.x += b.dx;
                                b.y += b.dy;
                
                                // Rebote nas bordas
                                if (b.x - b.r < 0 || b.x + b.r > width) b.dx *= -1;
                                if (b.y - b.r < 0 || b.y + b.r > height) b.dy *= -1;
                            }
                
                            requestAnimationFrame(animate);
                        }
                        animate();
                    }
                });shadowBlur = 8;
                ctx.fill();
                ctx.restore();
            }
            requestAnimationFrame(animate);
        }
        animate();
    }
});

