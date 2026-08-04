// Script preparado para futuras automatizações do seu portal pet
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portal EcoPatas carregado com sucesso. Pronto para rodar no GitHub Pages!");
    
    // Exemplo de função caso queira criar um alerta de nova feira de adoção
    const feiras = document.querySelectorAll('.evento-item');
    feiras.forEach(feira => {
        feira.addEventListener('click', () => {
            alert("Em breve você poderá se inscrever para ser voluntário nesta feira de adoção!");
        });
    });
});
