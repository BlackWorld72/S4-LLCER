var cat
var word
var lang
var sss

function listWords(data) {
  qs = document.getElementById("qs")
  document.getElementById("qs").innerHTML = "";
  sss = data

  select = document.createElement("select")
  select.setAttribute("onChange", "changeSelectAllWord(this.value)")
  select.setAttribute("class", "inpanswer")

  let opt = document.createElement('option')
  opt.textContent = "Tout"
  opt.setAttribute("value", "all");
  select.append(opt)  

  x = document.createElement("div")
  x.setAttribute("id", "jetest")

  for (let j = 0 ; j < data.cat.length ; j++) {
    opt = document.createElement('option')
    opt.textContent = j+1
    opt.setAttribute("value", j+1);
    select.append(opt)
  }

  qs.append(select)
  qs.append(x)

  changeSelectAllWord("all")
}

function changeSelectAllWord(value) {
  console.log(sss)
  x = document.getElementById("jetest")
  x.innerHTML = "";

  if (value == "all") {
    for (let j = 0 ; j < sss.cat.length ; j++) {
      h2 = document.createElement("h2")
      h2.textContent = "Catégorie : " + (j+1)
      x.append(h2)
      for (let i = 0 ; i < sss.cat[j].words.length ; i++) {
        h2 = document.createElement("h3")
        h2.setAttribute("id","inpDIVAllWords")
        h2.textContent = sss.cat[j].words[i].fr + " > " + sss.cat[j].words[i].al
        x.append(h2)
      }
    }
  }
  else {
    let j = parseInt(value)-1
    h2 = document.createElement("h2")
    h2.textContent = "Catégorie : " + (j+1)
    x.append(h2)
    console.log(j)
    for (let i = 0 ; i < sss.cat[j].words.length ; i++) {
      h2 = document.createElement("h3")
      h2.setAttribute("id","inpDIVAllWords")
      h2.textContent = sss.cat[j].words[i].fr + " > " + sss.cat[j].words[i].al
      x.append(h2)
    }
  }
  console.log(sss)
}

function changeSelect() {
  x = document.getElementById("jetest")
  x.innerHTML = "";
  data = sss
  value = document.getElementById("selecttest").value
  if (value == "all") {
    cat = Math.floor(Math.random() * data.cat.length)
  }
  else {
    cat = parseInt(value)-1
  }

  word = Math.floor(Math.random() * data.cat[cat].words.length)
  lang = Math.floor(Math.random() * 2)

  console.log(cat+ " "+ word + " ")

  h2 = document.createElement("h3")
  h2.setAttribute("id","inpDIV")

  if (lang == 1) {
    h2.textContent = data.cat[cat].words[word].fr
  }
  else {
    h2.textContent = data.cat[cat].words[word].al
  }

  x.append(h2)

  document.getElementById("btnNext").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnValid").setAttribute("style", "visibility: show;")
}

function validate() {

  x = document.getElementById("inpDIV")

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

function question(data) {
  qs = document.getElementById("qs")
  document.getElementById("qs").innerHTML = "";

  sss = data

  select = document.createElement("select")
  select.setAttribute("onChange", "changeSelect()")
  select.setAttribute("id", "selecttest")
  select.setAttribute("class", "inpanswer")

  let opt = document.createElement('option')
  opt.textContent = "Tout"
  opt.setAttribute("value", "all");
  select.append(opt)  

  x = document.createElement("div")
  x.setAttribute("id", "jetest")

  for (let j = 0 ; j < data.cat.length ; j++) {
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

