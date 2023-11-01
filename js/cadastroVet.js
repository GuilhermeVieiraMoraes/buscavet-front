document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-criar-conta').addEventListener('click', async () => {
        try {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const emailComercial = document.getElementById('email-comercial').value;
            const senha = document.getElementById('senha').value;
            const crmv = document.getElementById('crmv').value;
            const cep = document.getElementById('cep').value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('estado').value;
            const especialidade = document.getElementById('especialidade').value;
            const telefone = document.getElementById('telefone').value;

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    emailComercial,
                    senha,
                    crmv,
                    cep,
                    cidade,
                    estado,
                    especialidade,
                    telefone,
                }),
            };

            const res = await fetch('http://localhost:4000/veterinarios', requestOptions);

            if (res.status === 201) {
                // TODO: Melhorar esse alerta ou fazer alguma ação após o sucesso
                alert('Cadastrado com sucesso')
            } else {
                // TODO: Melhorar esse alerta ou fazer alguma ação em caso de erro
                alert('Erro ao criar usuário. Verifique seus dados e tente novamente.');
            }
        } catch (error) {
            alert('Erro ao criar usuário. Verifique seus dados e tente novamente.');
        }
    });
})