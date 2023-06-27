function alunonota() {
    var aluno, nota1, nota2, nota3, soma, media;
    aluno = (document.getElementById('aluno').value);
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    
    soma = nota1 + nota2 + nota3;
    media = (soma/3);

    //Add ao documento
    var boletim = document.getElementById('grade-boletim');
    var row = boletim.insertRow(-1);
    var cell1 = row.insertCell (0);
    var cell2 = row.insertCell (0);
    var cell3 = row.insertCell (0);
    var cell4 = row.insertCell (0);

    cell4.innerHTML = aluno;
    cell3.innerHTML = soma;
    cell2.innerHTML = media;

    if (media >= 70){
        cell1.innerHTML ="<font color = green>Aprovado</font>";
    }
    else {
        cell1.innerHTML = "<font color = red>Reprovado</font>";
    }

    limparcampos();
}

function limparcampos() {
    window.document.querySelector('#aluno').value = null;
    window.document.querySelector('#nota1').value = null;
    window.document.querySelector('#nota2').value = null;
    window.document.querySelector('#nota3').value = null;
}

function saveGridToLocalStorage(){
    let tableContent;
    tableContent = window.document.getElementById("grade-boletim").innerHTML
    localStorage.setItem('boletim', tableContent);
}
function loadFromLocalStorage() {
    let tableContent = localStorage.getItem("boletim");
    if(tableContent.trim().length > 0)
    document.getElementById('grade-boletim').innerHTML = tableContent;
}
