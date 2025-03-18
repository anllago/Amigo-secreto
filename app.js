let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value.trim();
  
  if (nombreAmigo === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }
  
  amigos.push(nombreAmigo);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  
  amigos.forEach((amigo) => {
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }
  
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
