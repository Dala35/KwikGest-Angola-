function mostrarLogin() {
  alert('Tela de login em construção.');
}

function mostrarCadastro() {
  document.getElementById('modulos').style.display = 'block';
}

document.getElementById('formModulos').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('modulos').style.display = 'none';
  document.getElementById('painel').style.display = 'block';
});

function mostrarFuncionalidade(tipo) {
  const painel = document.getElementById('conteudoPainel');
  if (tipo === 'agenda') {
    painel.innerHTML = '<h3>Agenda</h3><p>Funcionalidade de agenda em breve.</p>';
  } else if (tipo === 'recibos') {
    painel.innerHTML = '<h3>Recibos</h3><p>Emissão e histórico de recibos.</p>';
  } else if (tipo === 'link') {
    painel.innerHTML = '<h3>Meu Link</h3><p>Seu link público: <a href="#">kwikgest.com/seunome</a></p>';
  }
}
