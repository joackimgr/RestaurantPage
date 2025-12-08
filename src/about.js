    export default function loadAbout() {
        const content = document.getElementById("content");
        const div = document.createElement("div");
        div.classList.add("wrapper");
        const p = document.createElement("p");
        const h2 = document.createElement("h2");
        h2.classList.add("h2");
        h2.textContent = "About Us";
        p.classList.add("about");
        p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur pariatur perspiciatis officia saepe, eius non et beatae repellat, nam dolor veniam eum autem vel? Ratione vero maiores enim dicta.";
        div.appendChild(h2);
        div.appendChild(p);
        content.appendChild(div);
    }