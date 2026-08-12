// Abre e fecha a janela do chat ao clicar no mascote
function toggleChat() {
    const chatJanela = document.getElementById('chatJanela');
    const balaoMascote = document.getElementById('balaoMascote');
    const mascoteBtn = document.getElementById('mascoteBtn');

    if (chatJanela.style.display === 'none' || chatJanela.style.display === '') {
        chatJanela.style.display = 'flex';
        balaoMascote.style.display = 'none'; // Esconde o balão quando abre o chat
        mascoteBtn.style.display = 'none';    // Oculta o botão redondo se quiser focar no chat
    } else {
        chatJanela.style.display = 'none';
        balaoMascote.style.display = 'block';
        mascoteBtn.style.display = 'block';
    }
}

// Responde o usuário baseado no botão clicado
function responder(opcao) {
    const chatMensagens = document.getElementById('chatMensagens');
    
    // 1. Adiciona a mensagem do usuário na tela
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

    // Criar elemento de texto do usuário
    const divUsuario = document.createElement('div');
    divUsuario.className = 'msg-usuario';
    divUsuario.innerText = textoUsuario;
    chatMensagens.appendChild(divUsuario);

    // Rolar para o final do chat
    chatMensagens.scrollTop = chatMensagens.scrollHeight;

    // 2. Simular digitação do Bot após 800ms
    setTimeout(() => {
        const divBot = document.createElement('div');
        divBot.className = 'msg-bot';
        divBot.innerText = respostaBot;
        chatMensagens.appendChild(divBot);
        chatMensagens.scrollTop = chatMensagens.scrollHeight;
    }, 800);
}
