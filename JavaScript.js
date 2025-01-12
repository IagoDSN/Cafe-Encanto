function inicial(){
    window.location.href = 'https://iagodsn.github.io/Cafe-Encanto/index1'
    }
    function sobre(){
        window.location.href = 'https://iagodsn.github.io/Cafe-Encanto/index2'
        }
        function eventos(){
            window.location.href = 'https://iagodsn.github.io/Cafe-Encanto/index3'
            }
            function cardapio(){
                window.location.href = 'https://iagodsn.github.io/Cafe-Encanto/index4'
                }
                function contato(){
                    window.location.href = 'https://iagodsn.github.io/Cafe-Encanto/index5'
                    }
    function face(){
        window.open("https://www.facebook.com/?locale=pt_BR");
    }
    function insta(){
        window.open("https://www.instagram.com/");
    }
    function tiktok(){
        window.open("https://www.tiktok.com/pt-BR/");
    }
    
    function endereco(){
         window.location.href = 'https://maps.app.goo.gl/Q389NUWFvgM6R3m47';
    }
    function zap(){
      window.location.href= 'https://api.whatsapp.com/send?phone=5535985218521&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20cafeteria.';
   }
    
    
      document.addEventListener("DOMContentLoaded", function() {
        const imagens = ["bolo1.jpg", "bolo2.jfif", "bolo3.png", "bolo4.jpg"];
        let indiceAtual = 0;
    
        function trocarImagem() {
            const imgElement = document.getElementById("imagem47");
            if (imgElement) {
                indiceAtual = (indiceAtual + 1) % imagens.length;
                imgElement.src = imagens[indiceAtual];
                console.log(`Imagem trocada para: ${imagens[indiceAtual]}`);
            } else {
                console.error("Elemento de imagem não encontrado.");
            }
        }
    
        setInterval(trocarImagem, 5000);
    });
    
    
    
      document.getElementById('dataForm').addEventListener('submit', function(event) 
      { 
        event.preventDefault(); 
        
        const data = {
             nome: document.getElementById('nome').value, 
             email: document.getElementById('email').value, 
             whatsapp: document.getElementById('whatsapp').value, 
             descricao: document.getElementById('descricao').value, 
             convidados: document.getElementById('convidados').value, 
            }; 
            console.log(nome)
            
        fetch('http://localhost:3000/save', {
         method: 'POST',
          headers: {
             'Content-Type': 'application/json', 
            }
             , body: JSON.stringify(data),
             })
              .then(response => response.json())
               .then(data => {
                 console.log('Success:', data);
                  window.alert('Dados enviados com sucesso!'); 
                })
                   .catch((error) => {
                     console.error('Error:', error);
                      window.alert('Houve um erro ao enviar os dados.');
                     }); 
                    });
      
                    function filterOptions(category) {
                        var options = document.getElementsByClassName('option');
                         if (category === 'option') {
                             for (var i = 0; i < options.length; i++) {
                                 options[i].classList.add('show'); 
                                } 
                            } else {
                                 for (var i = 0; i < options.length; i++) {
                                     options[i].classList.remove('show'); 
                                     if (options[i].classList.contains(category)) {
                                         options[i].classList.add('show'); 
                                        } 
                                    } 
                                } 
                            }

          function menuas(){
            var minhaDiv = document.getElementById('menu');
              minhaDiv.classList.toggle('esconde');
              setTimeout(segunda, 100);
          }
          function segunda(){
            var minhaDiv = document.getElementById('menu');
            document.body.classList.toggle('no-scroll');
               minhaDiv.classList.toggle('mostra');
          }
         
                              