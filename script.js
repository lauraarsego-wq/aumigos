document.addEventListener("DOMContentLoaded", () => {
    console.log("Portal EcoPatas atualizado e pronto para produção!");
    
    // Alerta informativo opcional ao clicar nos eventos da agenda externa
    const feiras = document.querySelectorAll('.evento-item');
    feiras.forEach(feira => {
        feira.addEventListener('click', () => {
            alert("Acesse as redes sociais oficiais da ONG organizadora para conferir horários e critérios de adoção atualizados!");
        });
    });
});
