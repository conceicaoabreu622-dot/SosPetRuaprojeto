// 1. Filtro visual do Feed de Adoção (Roda direto no navegador)
function filtrarPets() {
    const especie = document.getElementById('filtroEspecie').value;
    const bairro = document.getElementById('filtroBairro').value.toLowerCase();
    const cards = document.querySelectorAll('.pet-card-item');

    cards.forEach(card => {
        const cardEspecie = card.getAttribute('data-especie');
        const cardBairro = card.getAttribute('data-bairro').toLowerCase();

        const bateEspecie = (especie === "" || cardEspecie === especie);
        const bateBairro = (bairro === "" || cardBairro.includes(bairro));

        if (bateEspecie && bateBairro) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
}

// 2. Validação da Foto Obrigatória contra Trotes
function validarDenuncia(event) {
    const inputFoto = document.getElementById('fotoInput');
    const erroMsg = document.getElementById('mensagemErroFoto');

    if (inputFoto.files.length === 0) {
        event.preventDefault(); // Impede o envio fictício
        erroMsg.classList.remove('d-none');
        inputFoto.classList.add('is-invalid');
    } else {
        erroMsg.classList.add('d-none');
        inputFoto.classList.remove('is-invalid');
        alert("🚨 Ocorrência enviada com sucesso para a rede de protetores!");
    }
}

// 3. Triagem de Campos do Cadastro Conforme Perfil de Acesso
function gerenciarCamposHomologacao() {
    const perfil = document.getElementById('seletorPerfil').value;
    const bloco = document.getElementById('blocoHomologacao');
    const rotulo = document.getElementById('rotuloDocumento');
    const input = document.getElementById('inputDocumento');

    if (perfil === 'ONG') {
        bloco.classList.remove('d-none');
        rotulo.innerText = "CNPJ Oficial da Instituição *";
        input.placeholder = "00.000.000/0001-00";
        input.required = true;
    } else if (perfil === 'VETERINARIO') {
        bloco.classList.remove('d-none');
        rotulo.innerText = "Registro Profissional CRMV *";
        input.placeholder = "Ex: CRMV-PA 12345";
        input.required = true;
    } else {
        bloco.classList.add('d-none');
        input.required = false;
        input.value = "";
    }
}