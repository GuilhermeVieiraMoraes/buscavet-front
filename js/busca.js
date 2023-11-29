function pesquisarVeterinarios() {
    // Obtenha o valor da especialidade selecionada
    const especialidadeSelecionada = document.getElementById("especialidade").value;

    // Redirecione para a página clinicasVet.html passando a especialidade como parâmetro
    window.location.href = `clinicasVet.html?especialidade=${especialidadeSelecionada}`;
}
