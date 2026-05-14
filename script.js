function busca_jujutsu() {
    fetch('dados.json')
        .then(response => response.json())
        .then(ddd => {
            tablet = document.getElementById('lugar');
            ddd.forEach(pessoainha => {
                let linha = document.createElement('tr');
                linha.innerHTML = `
                <td> ${pessoainha.personagem} </td>
                <td> ${pessoainha.tecnica} </td>
                <td> ${pessoainha.classe} </td>
                <td> ${pessoainha.grau} </td>
                <button type="button" onclick="apaga_tudo(this)">Apaga</button> 
                <button type="button" onclick="busca_coisa(this)">Input</button>`
                tablet.appendChild(linha);
            });

        })
}
function apaga_tudo(botao) {
    let linha = botao.closest('tr');
    linha.remove();
}
function busca_coisa(botao) {
    let linha = botao.closest('tr');

    const celulas = linha.cells;

    let input1 = document.GetElementById("input1");
    let input2 = document.GetElementById("input2");
    let input3 = document.GetElementById("input3");
    let input4 = document.GetElementById("input4");

    input1.value = celulas[0].innerHTML;
    input2.value = celulas[1].innerHTML;
    input3.value = celulas[2].innerHTML;
    input4.value = celulas[3].innerHTML;
}
