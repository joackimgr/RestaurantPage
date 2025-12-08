import food from "./images/food1.jpg";
import food2 from "./images/food2.jpg";

export default function loadHome() {
    const content = document.querySelector("#content");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    div1.classList.add("item");
    div2.classList.add("item");
    div3.classList.add("item");
    div4.classList.add("item");
    p.classList.add("text");
    p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur pariatur perspiciatis officia saepe, eius non et beatae repellat, nam dolor veniam eum autem vel? Ratione vero maiores enim dicta."
    p2.classList.add("text");
    p2.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur pariatur perspiciatis officia saepe, eius non et beatae repellat, nam dolor veniam eum autem vel? Ratione vero maiores enim dicta.";

    const firstImg = document.createElement("img");
    firstImg.src = food;
    firstImg.classList.add("contentImg");

    const secondImg = document.createElement("img");
    secondImg.src = food2;
    secondImg.classList.add("contentImg");

    div1.appendChild(p);
    div2.appendChild(firstImg);
    div3.appendChild(secondImg);
    div4.appendChild(p2);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
}