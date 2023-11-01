document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-entrar').addEventListener('click', async () => {
        try {
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            };
            const res = await fetch('http://localhost:4000/usuarios/login', requestOptions);

            if (res.status === 200) {
                const data = await res.json();
                const token = data.token;
                localStorage.setItem('token', token);
                window.location.href = 'infoUser.html'
            } else {
                document.getElementById('error-message').textContent = 'Email ou Senha incorreto(s)';
            }
        }
        catch (error) {
            document.getElementById('error-message').textContent = 'Erro ao fazer login';
        }
    })
})