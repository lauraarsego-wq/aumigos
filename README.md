# 🐾 Aumigoso - Site Pet Interativo

O **Aumigoso** é um site institucional para o mercado pet, projetado com uma identidade visual moderna nas cores azul marinho e vermelho. O grande diferencial do projeto é o **Bob**, um cão mascote interativo posicionado no canto da tela que funciona como um chatbot para sanar dúvidas rápidas dos usuários e direcioná-los para o atendimento humano.

---

## ✨ Recursos

*   **Identidade Visual Marcante**: Cores contrastantes (Azul Marinho e Vermelho) para um visual profissional e amigável.
*   **Mascote Assistente**: O cãozinho Bob fica flutuando na página chamando a atenção do tutor de forma sutil.
*   **Chatbot Integrado**: Respostas rápidas e automáticas ao clique de botões (Serviços, Horários e Suporte).
*   **Transição de Canal**: Encaminhamento inteligente para o atendimento via WhatsApp caso o robô não saiba a resposta.
*   **Totalmente Responsivo**: Adapta-se perfeitamente a computadores, tablets e celulares.

---

## 🎨 Cores Utilizadas

*   🔵 **Azul Marinho (`#0A192F`)**: Cor principal, transmitindo segurança e confiança.
*   🔴 **Vermelho (`#E63946`)**: Cor de destaque, utilizada em botões de ação e notificações importantes.
*   ⚪ **Gelo/Cinza Claro (`#F4F6F9` / `#FFFFFF`)**: Fundo das seções para garantir leitura leve e limpa.

---

## 📂 Estrutura de Arquivos

```text
├── index.html       # Estrutura principal e esqueleto do site/chat
├── style.css        # Estilização completa, cores e animações
└── script.js        # Lógica de abertura do chat e automação do robô
```

---

## 🚀 Como Executar o Projeto Localmente

Não é necessário instalar nenhuma dependência ou banco de dados. Para rodar o site no seu computador, siga os passos abaixo:

1.  **Clone o repositório** para a sua máquina:
    ```bash
    git clone https://github.com
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (Chrome, Edge, Firefox, etc.).

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5** - Estruturação semântica da página.
*   **CSS3** - Estilização customizada e animações em `@keyframes`.
*   **JavaScript (Vanilla)** - Manipulação do DOM para simulação de respostas do chatbot.
*   **FontAwesome** - Biblioteca de ícones modernos para a interface.

---

## 🐶 Customização do Chatbot

Caso queira alterar as respostas automáticas do cão mascote, basta abrir o arquivo `script.js` e editar o conteúdo das variáveis dentro da função `responder(opcao)`:

```javascript
if (opcao === 'servicos') {
    respostaBot = "SUA NOVA RESPOSTA AQUI";
}
```

---

Desenvolvido com 🐾 por [Seu Nome](https://github.com).
