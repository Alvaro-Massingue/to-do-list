let info = document.getElementById("info");
let x = "Manage your task here";
let message = x.split("");
let i = 0;

const greetings = setInterval(() => {
  if (i < message.length) {
    let show = document.createTextNode(message[i]);
    info.appendChild(show);
    i++;
  } else {
    clearInterval(greetings);
  }
}, 200);

var button = document.getElementById("submit");
let editingDiv = null;

button.addEventListener("click", () => {
  var texto = document.getElementById("texto").value;

  if (editingDiv) {
    editingDiv.querySelector("p").textContent = texto;
    document.getElementById("texto").value = "";
    editingDiv = null;
  } else {
    if (texto === "") {
      alert("Por favor,insira uma tarefa");
    } else {
      var container = document.querySelector(".container");
      var div = document.createElement("div");
      var p = document.createElement("p");
      var input = document.createElement("input");
      var update = document.createElement("button");
      update.classList = "update";
      input.type = "checkbox";
      var text = document.createTextNode(texto);
      p.appendChild(text);
      div.appendChild(p);
      div.appendChild(input);

      var remove = document.createElement("button");
      remove.classList = "remove";
      var text = document.createTextNode("Remover");
      remove.appendChild(text);

      div.appendChild(remove);
      div.style.overflowWrap = "break-word";
      div.insertBefore(update, remove);
      var updateText = document.createTextNode("Editar");
      var editar = document.createElement("p");
      editar.appendChild(updateText);
      update.appendChild(editar);
      container.appendChild(div);
      document.getElementById("texto").value = "";

      update.addEventListener("click", () => {
        if (!input.checked) {
          document.querySelector("#texto").value = texto;
          editingDiv = div;
        }
      });

      remove.addEventListener("click", () => {
        var section = document.createElement("section");
        section.classList = "confirm-removal";
        var p = document.createElement("p");
        var info = document.createTextNode(
          "Tem a certeza que deseja remover essa tarefa?"
        );
        p.appendChild(info);
        var confirm = document.createElement("button");
        confirm.classList = "confirm";
        var text = document.createTextNode("Sim");
        confirm.appendChild(text);
        var cancel = document.createElement("button");
        cancel.classList = "cancel";
        var text = document.createTextNode("Nao");
        cancel.appendChild(text);
        section.appendChild(p);
        section.appendChild(confirm);
        section.appendChild(cancel);
        div.appendChild(section);

        confirm.addEventListener("click", () => {
          container.removeChild(div);
          div.removeChild(section);
        });

        cancel.addEventListener("click", () => {
          div.removeChild(section);
        });
      });

      input.addEventListener("click", () => {
        if (input.checked) {
          p.style.textDecoration = "line-through";
          p.style.opacity = "0.3";
          update.style.opacity = "0.6";
          container.removeChild(div);
          container.appendChild(div);
        } else {
          p.style.textDecoration = "none";
          p.style.opacity = "100%";
          update.style.opacity = "100%";
        }
      });
    }
  }
});
