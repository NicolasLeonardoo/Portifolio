const form = document.getElementById('formContato');
        const resposta = document.getElementById('respostaUsuario');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;

            if (!nome || !email || !telefone || !assunto || !mensagem) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            resposta.classList.remove('fade-in');

            resposta.innerHTML = `
        <h3>Dados enviados:</h3>                                                          
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `;

            setTimeout(() => {
                resposta.classList.add('fade-in');
            }, 10);
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