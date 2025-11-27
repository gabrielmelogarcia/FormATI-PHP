// VALIDAÇÃO DAS INPUTS DO FORMULÁRIO 

const form = document.getElementById('formati');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');
const dataInput = document.getElementById('data_nasc');
const mensagemInput = document.getElementById('observacoes');
const cpfInput = document.getElementById('cpf');
const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const numeroInput = document.getElementById('numero');
const bairroInput = document.getElementById('bairro');
const cidadeUfInput = document.getElementById('cidade_uf');

// MENSAGEM DE ALERTAS DAS INPUTS E ENVIO DO FORMULÁRIO
form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (nomeInput.value.trim() === "") {
        alert("Por favor, preencha o seu nome completo.");
        return;
    }

    if (cpfInput.value.trim() === "" || cpfInput.value.length < 14) {
        alert("Por favor, preencha o CPF corretamente.");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Por favor, preencha o e-mail corretamente.");
        return;
    }

    if (telefoneInput.value.trim() === "") {
        alert("Por favor, preencha o telefone corretamente.");
        return;
    }

    if (dataInput.value === "") {
        alert("Por favor, preencha a data de nascimento.");
        return;
    }

    if (cepInput.value.trim() === "") {
        alert("Por favor, preencha o CEP.");
        return;
    }

    if (mensagemInput.value.trim() === "") {
        alert("Por favor, preencha a mensagem.");
        return;
    }

    // FETCH (FAZ A CONEXÃO COM O PHP) Abaixo irei fazer a validação com cada input.
    const infophp =
    {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value,
        data_nasc: dataInput.value,
        mensagem: mensagemInput.value,
        cpf: cpfInput.value,
        cep: cepInput.value,
        rua: ruaInput.value,
        numero: numeroInput.value,
        bairro: bairroInput.value,
        cidade_uf: cidadeUfInput.value
    };
    console.log('Dados do Formulário:', infophp);

    // FETCH (FAZ A CONEXÃO COM O PHP)
    // Utilizei o JSONstringify, porém também é possível fazer através de URL.
    fetch('salvar.php',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(infophp)
        })
        .then(respform => {
            if (!respform.ok) {
                console.error('Errohttp: ' + respform.resposta);
                return null;
            }
            return respform.json();
        })
        .then(infophprecebida => {
            if (infophprecebida && infophprecebida.resposta === 'Ok') {
                alert("Resposta: " + infophprecebida.aviso);
                form.reset();
            }
        })
        .catch(erro => {
            console.error('Erro', erro);
        });

});


// UTILIZEI ESSA JQUERY APENAS PARA BUSCAR CEP AUTOMÁTICO, FIZ OS COMENTÁRIOS PARA QUE SERVE CADA PARTE DELA. (PRECISO ESTUDAR SOBRE JQUERYS)
function buscarCEP() {
    var cep = $('#cep').val().replace(/\D/g, '');

    $('#rua').val('...');
    $('#bairro').val('...');
    $('#cidade_uf').val('...');

    // Validação da quantidade de números digitados
    if (cep.length != 8) {
        $('#rua').val('').prop('readonly', false);
        $('#bairro').val('');
        $('#cidade_uf').val('');
        return; // Vai ser inválido se não tiver 8 números
    }

    // API da Jquery para buscar o CEP
    $.ajax({
        url: 'https://viacep.com.br/ws/' + cep + '/json/',
        dataType: 'json',
        success: function (dados) {
            if (!("erro" in dados)) {

                $('#rua').val(dados.logradouro).prop('readonly', false);
                $('#bairro').val(dados.bairro);
                $('#cidade_uf').val(dados.localidade + ' / ' + dados.uf);

                $('#numero').focus();
            } else {
                // A validação do CEP não encontrado
                alert("CEP não encontrado.");
                $('#rua').val('').prop('readonly', false);
                $('#bairro').val('');
                $('#cidade_uf').val('');
            }
        },
        error: function () {
            alert("Erro ao buscar CEP. Tente novamente mais tarde.");
            $('#rua').val('').prop('readonly', false);
            $('#bairro').val('');
            $('#cidade_uf').val('');
        }
    });
}

// Aqui será a relação entre o input do CEP e a busca que for feita pela JQuery
$(document).ready(function () {

    // Busca do CEP quando o usuário sair da input de CEP 
    $('#cep').on('blur', function () {
        if ($('#cep').val().replace(/\D/g, '').length === 8) {
            buscarCEP();
        }
    });
});
