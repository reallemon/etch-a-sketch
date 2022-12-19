const canvas = document.querySelector('#canvas');
const canvasHeight = 500;

function resetCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function createPixels(squareSize) {
  const pixelPercentage = 100 / squareSize;
  const pixelHeight = canvasHeight / squareSize;
  resetCanvas();

  for (let i = 0; i < squareSize * squareSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('canvas-pixel');
    pixel.style.flex = `0 0 ${pixelPercentage}%`;
    pixel.style.height = `${pixelHeight}px`;

    pixel.addEventListener('mouseenter', () => {
      let alpha = pixel.getAttribute('data-alpha') || 0;
      alpha = +alpha + 0.1;
      alpha = Math.min(1, alpha);
      pixel.setAttribute('data-alpha', alpha);

      pixel.style.backgroundColor = `rgba(0,0,0,${alpha})`;
    });

    canvas.appendChild(pixel);
  }
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let squareSize = +prompt('What size canvas do you want?');
  squareSize = Math.min(Math.max(squareSize, 1), 100);

  createPixels(squareSize);
});
