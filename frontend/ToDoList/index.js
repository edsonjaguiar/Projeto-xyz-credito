function todolist() {
  const devedor = document.getElementById('devedor');
  const valueDevedor = devedor.value;

  const pessoa_receber = document.getElementById('pessoa_receber');
  const valueReceber = pessoa_receber.value;

  const valor = document.getElementById('valor');
  const valueValor = valor.value;

  fetch(`http://127.0.0.1:3000/api/Todolist/cadastrar_dividas`, {
    method: 'POST',
    body: JSON.stringify({ devedor: valueDevedor, pessoa_receber: valueReceber, valor: valueValor }),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(function (data) {
      return data.json()
    })
    .then(function (newDate) {
      console.log(newDate)
    })
}


(function () {

  var list = document.querySelector('#conteudo'),
    form = document.querySelector('form'),

    devedor = document.querySelector('#devedor');
  receber = document.querySelector('#pessoa_receber');
  valor = document.querySelector('#valor');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    list.innerHTML +=
      '<table id="t01">' +
      '<tr>' +
      '<td>' + devedor.value + '</td>' +
      '<td>' + receber.value + '</td>' +
      '<td>' + valor.value + '</td>' +
      '</tr>' +
      '</table>'
    store();
    devedor.value = "";
    receber.value = "";
    valor.value = "";
  }, true)

  list.addEventListener('click', function (e) {
    var t = e.target;
    if (t.classList.contains('checked')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  }, false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    list.innerHTML = storedValues;
  }

  getValues();


})();
