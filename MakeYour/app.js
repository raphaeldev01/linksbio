var nome = 'Seu nome'
var desc = "Sua descrição"
var image = false
var links = [
    { id: 0, text: "Whatsapp", url: "https://wa.me/5516991345301" }
]
var cores = {
    cor1: "#7D523B",
    cor2: "#f4d1a7",
    cor3: "#D9C6B0",
}
var version = 0 // 0 = free; 1 = pro; 2 = premium 

var ChangeImage = () => {
    const elementImg = document.getElementById("inptFileLabel")
    const file = document.getElementById("imageInput").files[0];

    // Verifica se o arquivo é uma imagem
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      // Quando a imagem estiver carregada, a mostra na página
      reader.onload = function(e) {
        image = e.target.result;
        UpdatePreview()
        elementImg.style.backgroundImage = `url(${e.target.result})`    
    };

      // Lê o arquivo como URL de dados
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione uma imagem!');
    }

}


var AddLink = () => {
    links.push({ id: links.length, text: "", url: ""})
    ChangeLinks()
    UpdatePreview()

}

var RemoveLink = (id) => {
    links = links.filter(i => i.id != id)
    ChangeLinks()
    UpdatePreview()

}

var ChangeInput = (id) => {
    console.log('io');


    const element = document.getElementById("inpt" + id)
    if (element) {
        try {
            links[id].text = element.value
            UpdatePreview()
        } catch (err) {

            console.log(err)
        }
    }
}

var ChangeInputUrl = (id) => {

    const element = document.getElementById("inptUrl" + id)
    if (element) {
        try {
            links[id].url = element.value
            UpdatePreview()
        } catch (err) {

            console.log(err)
        }
    }
}

var ChangeLinks = () => {
    const ElementLinks = document.getElementById("Links")

    ElementLinks.innerHTML = `
        ${links.map(m => {
        console.log(m);

        return (`<div class="link" id="${m.id}">
                <div class="nameInput">
                    <input id="inpt${m.id}" oninput="ChangeInput(${m.id})" placeholder="Nome"  class="inptLink" type="text" value="${m.text}">
                    <div class="inptBtn" onclick="RemoveLink(${m.id})"><img src="https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=3299df" alt=""></div>
                    </div>
                        <input oninput="ChangeInputUrl(${m.id})" type="text" id="inptUrl${m.id}" class="inptUrl" value="${m.url}" placeholder="url">
                </div>`)
    })}`

    UpdatePreview()
}



var ChangeColorTxt = (id) => {
    const elementTxt = document.getElementById("corText" + id)
    const elementColor = document.getElementById("corColor" + id)

    if (elementTxt.value) {
        elementColor.value = elementTxt.value
        cores[`cor${id}`] = elementTxt.value
        UpdatePreview()

    }
}

var ChangeCorColor = (id) => {
    console.log("io");

    const elementTxt = document.getElementById("corText" + id)
    const elementColor = document.getElementById("corColor" + id)

    elementTxt.value = elementColor.value
    cores[`cor${id}`] = elementColor.value
    UpdatePreview()

}

var ChangeName = () => {
    const value = document.getElementById("name").value

    nome = value
    UpdatePreview()
}

var ChangeDesc = () => {
    const value = document.getElementById("desc").value

    desc = value
    UpdatePreview()
}

var ChangeVersion = (v) => {
    const vrs0 = document.getElementById("vrs0")
    const vrs1 = document.getElementById("vrs1")
    const vrs2 = document.getElementById("vrs2")

    vrs0.classList.remove("active")
    vrs1.classList.remove("active")
    vrs2.classList.remove("active")

    version = v

    if(v == 0 ) vrs0.classList.add("active")
    if(v == 1 ) vrs1.classList.add("active")
    if(v == 2 ) vrs2.classList.add("active")

    UpdatePreview()
}

var UpdatePreview = () => {
    const elementApp = document.getElementById("app")
    elementApp.style.setProperty('--corApp1', cores.cor1)
    elementApp.style.setProperty('--corApp2', cores.cor2)
    elementApp.style.setProperty('--corApp3', cores.cor3)
    elementApp.innerHTML = `
            <section class="perfil">
                <div class="img" style="background-image: url(${image});"></div>
                <h1 class="titleApp">${nome}</h1>
                <p class="desc">${desc}</p>
            </section>
            <section class="linksApp">
                ${links.map(m => {
        return (`<a href="${m.url}" class="linkApp">${m.text}</a>
`)
    })}
            </section>
            <footer class="footer ${version == 0 ? "free" : ""} ${version == 2 ? "premium" : ""}">Monte seu proprio <a href="https://wa.me/5516991345301?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20link%20personalizado%20com%20a%20LinksBio!!!">LinksBio</a> Gratis</footer>`
}

UpdatePreview()
ChangeLinks()