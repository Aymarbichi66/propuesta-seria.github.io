function changePosition(element) {
  let maxWidth = window.innerWidth * 0.50;
  let maxHeigth = window.innerHeight * 0.40;
  let min = 1;
  let widthRandom = Math.floor(Math.random() * (maxWidth - min + 1) + min);
  let HeigthRandom = Math.floor(Math.random() * (maxHeigth - min + 1) + min);
  element.setAttribute("style", `position: absolute; top:${HeigthRandom}px; left:${widthRandom}px;`)
}

function correctAnswer() {
  let container = document.getElementById('main-container');
  container.innerHTML = `
    <div class="container">
      <img src="love.gif" alt="Imagen o GIF">
      <h1>Lo sabía, te amo</h1>
      <audio autoplay>
        <source src="musica.mp3" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>`;
}
