const form = document.getElementById('formContato');

        form.addEventListener('submit', function (event) {

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (!nome || !email || !telefone || !mensagem) {
                event.preventDefault();
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            // Se todos os campos estiverem preenchidos, o formulário será enviado normalmente
            alert('Formulário enviado com sucesso!');
        });
        const mode = document.getElementById('mode_icon');

        mode.addEventListener('click', () => {
            const form = document.getElementById('formContato');
            if (mode.classList.contains('fa-sun')) {
                mode.classList.remove('fa-sun');
                mode.classList.add('fa-moon');

                form.classList.add('light')

                return;
            }

            mode.classList.add('fa-sun');
            mode.classList.remove('fa-moon');
            form.classList.remove('light');

        });