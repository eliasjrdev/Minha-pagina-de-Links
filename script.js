function toggleMode(){
    const html = document.documentElement

    if(html.classList.contains('lightColor')){
        html.classList.remove('lightColor')
    } else{
       html.classList.add('lightColor') 
    }
}

// Seleciona o botão e adiciona o evento de clique
document.getElementById('dropdown-btn').addEventListener('click', function() {
    this.parentElement.classList.toggle('show'); // Alterna a classe "show" no dropdown
  });
  
  // Fecha o dropdown se clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  