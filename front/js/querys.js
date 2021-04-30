const DoQuery = (query, encabezados) => {
  fetch(`http://127.0.0.1:1337/${query}`)
    .then((response) => response.json())
    .then((data) => CrearEncabezado(encabezados, data))
    .then((data) => CrearFilas(encabezados, data));
};

const CrearFilas = (encabezados, data) => {
  const main = document.getElementById("tbody");
  main.innerHTML = "";
  for (index in data) {
    let templateDiv = document.createElement("tr");
    for (subindex in encabezados) {
      let value;
      if (encabezados[subindex] === "Active") {
        value = data[index][encabezados[subindex]] ? "Activo" : "Inactivo";
      } else {
        value = data[index][encabezados[subindex]];
      }
      templateDiv.innerHTML += `<td>${value}</td>`;
    }
    main.appendChild(templateDiv);
  }
};

const CrearEncabezado = (encabezados, data) => {
  console.log(encabezados);
  const main = document.getElementById("thead");
  main.innerHTML = "";
  let templateDiv = document.createElement("tr");
  for (index in encabezados) {
    templateDiv.innerHTML += `<th scope="col">${encabezados[index]}</th>`;
  }
  main.appendChild(templateDiv);
  return data;
};
