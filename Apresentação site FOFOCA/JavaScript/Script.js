//referenciando o formulário pelo querySelector
const form = document.querySelector('form');

//criando a função salvarDadosForm, que guarda as infos do formulário no localStorage
function salvarDadosForm() {
    //coletando os valores do formulario e armazenando eles em variáveis
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefoneDDD = document.getElementById('telefone-ddd').value;
    const telefoneNumero = document.getElementById('telefone-numero').value;
    const interesses = document.getElementsByName('interesses[]');
    const termosDeUso = document.getElementById('termos-de-uso').checked;
    const envioDeEmails = document.getElementById('envio-de-emails').checked;
  
    //criando um objeto dadosForm com as infos coletadas
    const dadosForm = {
      nome,
      sobrenome,
      email,
      dataNascimento,
      telefoneDDD,
      telefoneNumero,
      interesses: [],
      termosDeUso,
      envioDeEmails
    };
  
    //adicionar todos os itens marcados na seção interesses ao array "interesses" que criamos no objeto
    for (let i = 0; i < interesses.length; i++) {
      if (interesses[i].checked) {
        dadosForm.interesses.push(interesses[i].value);
      }
    }
  
    // Armazena o objeto `dadosForm` no localStorage
    localStorage.setItem('dadosForm', JSON.stringify(dadosForm));
   
    // Exibe uma mensagem de confirmação que o formulário foi enviado
    alert('Formulário enviado com sucesso!');
    }
//Listener que detecta quando o formulário é enviado e executa a função salvarDadosForm que guarda as infos do formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();
    salvarDadosForm();
  });

//quando o formulário é enviado, a função salva os dados do formulário no localStorage (funçaõ do Js) e podem ser acessados pelo console




  