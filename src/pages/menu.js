const container = document.createElement("div");
const list = document.createElement("ol");
const burger = document.createElement("li");
const fries = document.createElement("li");
const shake = document.createElement("li");

burger.innerHTML = "burger";
fries.innerHTML = "fries";
shake.innerHTML = "shake";

list.append(burger);
list.append(fries);
list.append(shake);

container.append(list);


export default container;