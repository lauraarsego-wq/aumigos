// Abre e fecha a janela do chat ao clicar no mascote
function toggleChat() {
    const chatJanela = document.getElementById('chatJanela');
    const balaoMascote = document.getElementById('balaoMascote');

    if (chatJanela.style.display === 'none' || chatJanela.style.display === '') {
        chatJanela.style.display = 'flex';
        balaoMascote.style.display = 'none'; // Esconde o balão ao abrir
    } else {
        chatJanela.style.display = 'none';
        balaoMascote.style.display = 'block'; // Mostra o balão ao fechar
    }
}

// Responde o usuário baseado no botão clicado
function responder(opcao) {
    const chatMensagens = document.getElementById('chatMensagens');
    
    let textoUsuario = "";
    let respostaBot = "";

    if (opcao === 'servicos') {
        textoUsuario = "🐾 Ver Serviços";
        respostaBot = "Oferecemos banho, tosa, consultas veterinárias e hotelzinho pet! Lambeijos! 🐶";
    } else if (opcao === 'horario') {
        textoUsuario = "⏰ Horário de Funcionamento";
        respostaBot = "Estamos abertos de Segunda a Sábado, das 08:00 às 18:00! 🐾";
    } else if (opcao === 'humano') {
        textoUsuario = "📞 Falar com Humano";
        respostaBot = "Isso é muito complexo para o meu faro! Vou chamar um humano. Me chama no WhatsApp: (00) 99999-9999 🐕";
    }

    // Adiciona mensagem do usuário
    const divUsuario = document.createElement('div');
    divUsuario.className = 'msg-usuario';
    divUsuario.innerText = textoUsuario;
    chatMensagens.appendChild(divUsuario);
    chatMensagens.scrollTop = chatMensagens.scrollHeight;

    // Simula a resposta do mascote após um breve delay
    setTimeout(() => {
        const divBot = document.createElement('div');
        divBot.className = 'msg-bot';
        divBot.innerText = respostaBot;
        chatMensagens.appendChild(divBot);
        chatMensagens.scrollTop = chatMensagens.scrollHeight;
    }, 600);
}
