 function busca_jujutsu(){
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
                <button type="button">Nice</button> `
            tablet.appendChild(linha);
        });

})
}