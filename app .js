<!DOCTYPE html><html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KwikGest Angola</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
    }
    header {
      background-color: #343a40;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      margin: 0;
    }
    nav button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    main {
      padding: 2rem;
    }
    section {
      margin-bottom: 2rem;
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    form label {
      display: block;
      margin-bottom: 0.5rem;
    }
    footer {
      background-color: #f1f1f1;
      text-align: center;
      padding: 1rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>KwikGest Angola</h1>
    <nav>
      <button onclick="mostrarLogin()">Login</button>
      <button onclick="mostrarCadastro()">Cadastro</button>
    </nav>

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
