import burgerImage from '../mountain.png';

const container = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerHTML = "Hello there~!";
const text = document.createElement("p");
text.innerHTML = "We live to serve (lol). Peak Hours 12 noon - 2pm";
const img = new Image();
img.src = burgerImage;

container.append(h1);
container.append(text);
container.append(img);

export default container;