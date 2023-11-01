// Selecione o elemento select
const selectEspecialidade = document.getElementById('especialidade');
const url = 'http://localhost:4000/especializacao/'
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
            console.log('Erro ao buscar informações')
        }
    })
    .then(especialidades => {
        especialidades.forEach(especialidade => {
            const option = document.createElement('option');
            option.value = especialidade.id;
            option.textContent = especialidade.nome;
            selectEspecialidade.appendChild(option);
        });
    })