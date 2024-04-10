document.addEventListener('DOMContentLoaded', function () {
    const squares = document.getElementById('options');
    const color = document.getElementById('color');
    const statement = document.getElementById('statement');
    const Button = document.getElementById('Button');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    restartGame();

    Button.addEventListener('click', () => {
        restartGame();
    });

    function restartGame() {
        squares.innerHTML = ''; // Clear existing options
        const colors = generateRandomColors(3);
        const correctColor = pickColor(colors);
        color.textContent = correctColor;
        statement.textContent = '';
        Button.textContent = 'New Colors';

        colors.forEach((color) => {
            const square = document.createElement('div');
            square.classList.add('option');
            square.style.backgroundColor = color;
            square.addEventListener('click', () => {
                if (color === correctColor) {
                    statement.textContent = 'Correct!';
                    score++;
                    updateScore();
                    Button.textContent = 'Play Again?';
                    changeColors(color);
                } else {
                    statement.textContent = 'Try Again';
                }
            });
            squares.appendChild(square);
        });
    }

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function pickColor(colors) {
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function changeColors(color) {
        squares.childNodes.forEach((square) => {
            square.style.backgroundColor = color;
        });
    }

    function generateRandomColors(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
});
