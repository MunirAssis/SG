function iniciarContador(dataAlvoStr, sufixo) {
    const dataAlvo = new Date(dataAlvoStr).getTime();
  
    function atualizar() {
      const diferenca = new Date().getTime() - dataAlvo;
  
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
      document.getElementById('dias-' + sufixo).textContent = String(dias).padStart(2, '0');
      document.getElementById('horas-' + sufixo).textContent = String(horas).padStart(2, '0');
      document.getElementById('minutos-' + sufixo).textContent = String(minutos).padStart(2, '0');
      document.getElementById('segundos-' + sufixo).textContent = String(segundos).padStart(2,'0');
    }
  
    atualizar();
    setInterval(atualizar, 1000);
  }
  
  iniciarContador('2025-09-14T15:42:00', '1');
  iniciarContador('2025-09-20T04:00:00', '2');
  iniciarContador('2026-04-04T06:00:00', '3');
