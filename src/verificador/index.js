var btn = document.querySelector('#btn');
btn.addEventListener('click', verificar);

function verificar() {
    var ano = new Date();
    var anoActual = ano.getFullYear();
    var anoDeNascimento = document.querySelector('#idadeUser').value;

    if (anoDeNascimento.length === 0 || anoDeNascimento > anoActual || anoDeNascimento <= 1000) {
        alert('[ERRO] veirifique os dados e tente novamente.')
    } else {
        var sexo = document.getElementsByName('sexo');
        var idadeUser = anoActual - anoDeNascimento;
        var textoDaVeri = document.querySelector('#textoDaVeri');
        var genero = '';
        var img = document.querySelector('#foto');
        img.style.display = 'block';

        if(sexo[0].checked) {
            genero = 'Homem';

            if(idadeUser >= 0 && idadeUser < 10) {
                img.src = '../assets/img/criança.jpg';
            } else if(idadeUser <= 21) {
                img.src = '../assets/img/jovem Homem.jpg';
            } else if(idadeUser <= 50) {
                img.src = '../assets/img/Homem adulto.jpg';
            } else {
                img.src = '../assets/img/idoso.jpeg';
            }
         } else if(sexo[1].checked) {
             genero = 'Mulher'

             if(idadeUser >= 0 && idadeUser < 10) {
                img.src = '../assets/img/criança Mulher.jpg';
            } else if (idadeUser <= 13) {
                img.src = '../assets/img/criança 13anos.jpg';
            } else if(idadeUser <= 21) {
                img.src = '../assets/img/mulher jovem.jpg';
            } else if(idadeUser <= 50) {
                img.src = '../assets/img/mulher adulta.jpg';
            } else {
                img.src = '../assets/img/idoso-1497311606060_v2_450x337.jpg';
            }
         }

        textoDaVeri.innerText = `Detectamos ${genero} com ${idadeUser} anos de idade.`;
    }
}