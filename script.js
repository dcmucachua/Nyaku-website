document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.window').forEach(window => {
        window.style.display = 'none';
      });
      const windowId = button.getAttribute('data-window');
      document.getElementById(windowId).style.display = 'block';
    });
  });
  
  document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
      button.parentElement.style.display = 'none';
    });
  });

  // INTERRATIVIDADE //

  function highlightButton(number) { 
    var buttons = document.querySelectorAll('.menu-button'); 
    
    // Remove a classe active de todos os botões 
    buttons.forEach(function(button) { 
      button.classList.remove('active'); 
    }); 
    
    // Adiciona a classe active ao botão clicado 
    buttons[number - 1].classList.add('active'); 
  }


 /* document.getElementById('search').addEventListener('focus', function() {
    this.classList.add('focus-visible');
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-box')) {
      document.getElementById('search').classList.remove('focus-visible');
    }
  });*/


  
  document.getElementById('search').addEventListener('focus', function() { 
    document.querySelector('i').style.display = 'block'; 
  }); 
  
  document.addEventListener('click', function(event) { 
    if (!event.target.closest('.search-box')) { 
      document.querySelector('i').style.display = 'none'; 
    } 
  }); 
  
  function adjustIconPosition() { 
    const searchInput = document.getElementById('search'); 
    const i = document.querySelector('i'); 
    const inputRightPadding = parseInt(getComputedStyle(searchInput).paddingRight); 
    i.style.right = inputRightPadding + 'px'; 
  } 
  
  adjustIconPosition(); 
  window.addEventListener('resize', adjustIconPosition);