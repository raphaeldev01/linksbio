var nome = 'Seu nome'
var desc = "Sua descrição"
var links = [
    { id: 0, text: "Whatsapp" }
]
var cores = {
    cor1: "#7D523B",
    cor2: "#f4d1a7",
    cor3: "#D9C6B0",
}

var AddLink = () => {
    links.push({ id: links.length, text: "" })
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

var ChangeLinks = () => {
    const ElementLinks = document.getElementById("Links")

    ElementLinks.innerHTML = `
        ${links.map(m => {
        console.log(m);

        return (`<div class="link" id="${m.id}">
                    <input id="inpt${m.id}" oninput="ChangeInput(${m.id})"   class="inptLink" type="text" value="${m.text}">
                    <div class="inptBtn" onclick="RemoveLink(${m.id})"><img src="https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=3299df" alt=""></div>
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

var UpdatePreview = () => {
    const elementApp = document.getElementById("app")
    elementApp.style.setProperty('--corApp1', cores.cor1)
    elementApp.style.setProperty('--corApp2', cores.cor2)
    elementApp.style.setProperty('--corApp3', cores.cor3)
    elementApp.innerHTML = `
            <section class="perfil">
                <div class="img"></div>
                <h1 class="titleApp">${nome}</h1>
                <p class="desc">${desc}</p>
            </section>
            <section class="linksApp">
                ${links.map(m => {
                    return (`<a href="#" class="linkApp">${m.text}</a>
`)
                })}
            </section>
            <footer class="footer">Monte seu proprio <a href="https://wa.me/5516991345301?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20meu%20link%20personalizado%20com%20a%20LinksBio!!!">LinksBio</a></footer>`
}

UpdatePreview()
ChangeLinks()