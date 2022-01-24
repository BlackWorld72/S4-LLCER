var cat
var word
var lang

function listWords() {
  qs = document.getElementById("qs")
  document.getElementById("qs").innerHTML = "";

  select = document.createElement("select")
  select.setAttribute("onChange", "changeSelectAllWord(this.value)")

  let opt = document.createElement('option')
  opt.textContent = "Tout"
  opt.setAttribute("value", "all");
  select.append(opt)  

  x = document.createElement("div")
  x.setAttribute("id", "jetest")

  for (let j = 0 ; j < civilisation.cat.length ; j++) {
    h2 = document.createElement("h2")
    h2.textContent = "Catégorie : " + (j+1)
    x.append(h2)

    opt = document.createElement('option')
    opt.textContent = j+1
    opt.setAttribute("value", j+1);
    select.append(opt)

    for (let i = 0 ; i < civilisation.cat[j].words.length ; i++) {
      h2 = document.createElement("h3")
      h2.setAttribute("id","inpDIV")
      h2.textContent = civilisation.cat[j].words[i].fr + " > " + civilisation.cat[j].words[i].al
      x.append(h2)
    }
  }

  qs.append(select)
  qs.append(x)
}

function changeSelectAllWord(value) {
  x = document.getElementById("jetest")
  x.innerHTML = "";

  if (value == "all") {
    for (let j = 0 ; j < civilisation.cat.length ; j++) {
      h2 = document.createElement("h2")
      h2.textContent = "Catégorie : " + (j+1)
      x.append(h2)
      for (let i = 0 ; i < civilisation.cat[j].words.length ; i++) {
        h2 = document.createElement("h3")
        h2.setAttribute("id","inpDIV")
        h2.textContent = civilisation.cat[j].words[i].fr + " > " + civilisation.cat[j].words[i].al
        x.append(h2)
      }
    }
  }
  else {
    let j = parseInt(value)-1
    h2 = document.createElement("h2")
    h2.textContent = "Catégorie : " + (j+1)
    x.append(h2)
    for (let i = 0 ; i < civilisation.cat[j].words.length ; i++) {
      h2 = document.createElement("h3")
      h2.setAttribute("id","inpDIV")
      h2.textContent = civilisation.cat[j].words[i].fr + " > " + civilisation.cat[j].words[i].al
      x.append(h2)
    }
  }

}

function changeSelect() {
  x = document.getElementById("jetest")
  x.innerHTML = "";

  value = document.getElementById("selecttest").value
  if (value == "all") {
    cat = Math.floor(Math.random() * civilisation.cat.length)
  }
  else {
    cat = parseInt(value)-1
  }

  word = Math.floor(Math.random() * civilisation.cat[cat].words.length)
  lang = Math.floor(Math.random() * 2)

  console.log(cat+ " "+ word + " ")

  h2 = document.createElement("h3")
  h2.setAttribute("id","inpDIV")

  if (lang == 1) {
    h2.textContent = civilisation.cat[cat].words[word].fr
  }
  else {
    h2.textContent = civilisation.cat[cat].words[word].al
  }

  x.append(h2)

  document.getElementById("btnNext").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnValid").setAttribute("style", "visibility: show;")
}

function validate() {

  x = document.getElementById("jetest")

  h2 = document.createElement("h3")
  h2.setAttribute("style","color: green;")

  if (lang == 1) {
    h2.textContent = civilisation.cat[cat].words[word].al
  }
  else {
    h2.textContent = civilisation.cat[cat].words[word].fr
  }

  x.append(h2)

  document.getElementById("btnValid").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnNext").setAttribute("style", "visibility: show;")
}

function question() {
  qs = document.getElementById("qs")
  document.getElementById("qs").innerHTML = "";

  select = document.createElement("select")
  select.setAttribute("onChange", "changeSelect(this.value)")
  select.setAttribute("id", "selecttest")

  let opt = document.createElement('option')
  opt.textContent = "Tout"
  opt.setAttribute("value", "all");
  select.append(opt)  

  x = document.createElement("div")
  x.setAttribute("id", "jetest")

  for (let j = 0 ; j < civilisation.cat.length ; j++) {
    opt = document.createElement('option')
    opt.textContent = j+1
    opt.setAttribute("value", j+1);
    select.append(opt)
  }

  qs.append(select)
  qs.append(x)

  document.getElementById("btnNext").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnValid").setAttribute("style", "visibility: show;")

  changeSelect()
}

