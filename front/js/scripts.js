function pruebaFetch() {
  fetch("http://127.0.0.1:1337/projects")
    .then((response) => response.json())
    .then((data) => {
      let main = document.getElementById("main");
      for (let index in data) {
        //data[index]["nombre"];
        let div = document.createElement("div");
        let col12 = document.createElement("div");
        let row = document.createElement("div");
        let col10 = document.createElement("div");
        let h3 = document.createElement("h3");
        //col12.innerText = data[index]["nombre"];
        //<h3>Proyecto Armado de casas</h3>
        //h3.innerText = data[index]["Title"];
        // col10.appendChild(h3);

        col10.setAttribute("class", "col-md-10");
        row.appendChild(col10);

        row.setAttribute("class", "row");
        col12.appendChild(row);

        col12.setAttribute("class", "col-md-12");
        div.appendChild(col12);

        div.setAttribute("class", "row");
        main.appendChild(div);
      }
    });
}
