document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-criar-conta').addEventListener('click', async () => {
        try {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const cpf = document.getElementById('cpf-input').value;
            const telefone = document.getElementById('telefone').value;
            const endereco = document.getElementById('endereco').value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('estado').value;
            const cep = document.getElementById('cep').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const numero = document.getElementById('numero').value;
            const complemento = document.getElementById('complemento').value;

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    cpf,
                    telefone,
                    endereco,
                    cidade,
                    estado,
                    cep,
                    dataNascimento,
                    numero,
                    complemento
                }),
            };

            const res = await fetch('http://localhost:4000/usuarios', requestOptions);

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