function copyCupom() {
    var cupomCode = document.getElementById("cupom-code").innerHTML; // obtém o código do cupom
    var tempInput = document.createElement("input"); // cria um elemento de input temporário
    document.body.appendChild(tempInput); // adiciona o input ao corpo do documento
    tempInput.setAttribute("value", cupomCode); // define o valor do input como o código do cupom
    tempInput.select(); // seleciona o input
    document.execCommand("copy"); // copia o valor selecionado para a área de transferência
    document.body.removeChild(tempInput); // remove o input temporário
    var cupomButton = document.getElementById("cupom-button"); // obtém o botão de copiar cupom
    cupomButton.classList.add("copied"); // adiciona a classe "copied" para indicar que o cupom foi copiado
    cupomButton.innerHTML = "<span>Cupom Copiado!</span><i class='fas fa-check'></i>"; // altera o texto do botão
    setTimeout(function() {
      cupomButton.classList.remove("copied"); // remove a classe "copied" após 3 segundos
      cupomButton.innerHTML = "<span>Copiar Cupom</span><i class='fas fa-copy'></i>"; // restaura o texto do botão
    }, 3000);
  }
  
  
  
//   Swal.fire({
//     icon: 'success',
//     title: 'Código copiado para a área de transferência.',
//     showConfirmButton: false,
//     timer: 1500
//   })

  
document.getElementById("copy-button").addEventListener("click", function() {
    // Criar um elemento textarea para armazenar o código HTML e CSS
    var code = document.createElement('textarea');
    code.value = document.querySelector('.cupom-turbi').textContent;
  
    // Adicionar o elemento textarea ao corpo da página
    document.body.appendChild(code);
  
    // Selecionar o texto do elemento textarea
    code.select();
  
    // Copiar o texto selecionado para a área de transferência
    document.execCommand('copy');
  
    // Remover o elemento textarea do corpo da página
    document.body.removeChild(code);
  
    // Exibir uma mensagem informando que o código foi copiado utilizando o SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Código copiado para a área de transferência.',
      showConfirmButton: false,
      timer: 2000
    });
});

  

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;

    header.classList.toggle("active");

    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
