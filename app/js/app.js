const contoller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', contoller.adiciona.bind(contoller));
