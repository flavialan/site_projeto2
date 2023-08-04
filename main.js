const form = document.getElementById('form-contatos');
let linhas = '';
const contatos = []; 
const telefone = [];
const sobrenome = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();
})

function adicionaLinha(){

    const inputNomeContato = document.getElementById('nome-contato');
    const inputSobrenomeContato = document.getElementById('sobrenome-contato')
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (contatos.includes(inputNomeContato.value) || telefone.includes(inputNumeroTelefone.value)){
        alert(`O contato ou o número de telefone já foram inseridos`);
    } else{
        contatos.push(inputNomeContato.value);
        telefone.push(inputNumeroTelefone.value);
        sobrenome.push(inputSobrenomeContato.value);

        let posicao = contatos.indexOf(inputNomeContato.value);
        contatos.sort();
        let posicaoNova = contatos.indexOf(inputNomeContato.value);

        if (posicaoNova < posicao){
            
            linhas = '';

            moveArrayElement(telefone, posicao, posicaoNova);
            moveArrayElement(sobrenome, posicao, posicaoNova);

            for (let i=0; i < contatos.length; i++){
                let linha = '<tr>';
                linha += `<td>${contatos[i]}</td>`;  
                linha += `<td>${sobrenome[i]}</td>`;  
                linha += `<td>${telefone[i]}</td>`; 
                linha += '</tr>'

                linhas += linha;
            }
        } else{
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`; 
            linha += `<td>${inputSobrenomeContato.value}</td>`;
            linha += `<td>${inputNumeroTelefone.value}</td>`;
            linha += '</tr>';
    
            linhas += linha;
        }
    }
    
    inputNomeContato.value = ''; 
    inputSobrenomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); 
    corpoTabela.innerHTML = linhas;
}

function moveArrayElement(arr, from, to){
    let el = arr[from];
    arr.splice(from, 1);
    arr.splice(to, 0, el);
}