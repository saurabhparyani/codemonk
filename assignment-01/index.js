const scale = 10 // 0->1 = 10px

const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput')
const rangeValueDiv = document.querySelector('#rangeValue')

const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };

const ctx = canvas.getContext("2d");

const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91,
]
    .map(item => item * scale)

const CENTER_Y = CANVAS_DIMENSIONS.height / 2;

const drawRecaman = (limit) => {
    ctx.clearRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);
    ctx.beginPath();
    ctx.moveTo(0, CENTER_Y);
    ctx.lineTo(CANVAS_DIMENSIONS.width, CENTER_Y); // Draw the number line
    ctx.stroke();

    for (let i = 1; i <= limit; i++) {
        let prev = sequence[i - 1];
        let curr = sequence[i];
        let radius = Math.abs(curr - prev) / 2;
        let centerX = (curr + prev) / 2;

        let anticlockwise = i % 2 === 0;
        
        ctx.arc(centerX, CENTER_Y, radius, Math.PI, 0, !anticlockwise);
    }

    ctx.stroke();
};

const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(value)
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value))

drawRecaman(rangeInput.value);
