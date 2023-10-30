document.addEventListener('DOMContentLoaded', () => {
    const url = 'http://localhost:4000/veterinarios/'
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            window.location.href = 'login.html';
        }
    })
    .then(data => {
        const usuario = data[0];
        if (usuario) {
            document.getElementById('user-name').innerText = usuario.nome;
            document.getElementById('user-email').innerText = usuario.email;
            document.getElementById('user-dataNascimento').innerText = usuario.dataNascimento;
            document.getElementById('user-telefone').innerText = usuario.telefone;
            document.getElementById('user-endereco').innerText = usuario.endereco;
            document.getElementById('user-cidade').innerText = usuario.cidade;
            document.getElementById('user-estado').innerText = usuario.estado;
            document.getElementById('user-cep').innerText = usuario.cep;
        }
    })
    .catch(error => {
        console.error('Erro ao buscar informações do usuario', error);
    });
});