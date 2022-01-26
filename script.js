var cat
var word
var lang
var sss
var isIn = false
var book
var type

var selectedCat = []

function contain(tab, val) {
  for (let i = 0 ; i < tab.length ; i++) {
    if (tab[i] == val) {
      return i
    }
  }
  return -1
}

document.addEventListener('keydown', function(e) {
  if((e.code == "Space" || e.code == "Enter") && isIn) {
    if (isHidden(document.getElementById("btnNext"))) {
      validate()
    }
    else {
      changeSelect()
    }
  }
});

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}

function testkey() {
  console.log("salut bg")
}

function listWords(data) {
  isIn = false
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

    for (let i = 0 ; i < sss.cat[j].words.length ; i++) {
      h2 = document.createElement("h3")
      h2.setAttribute("id","inpDIVAllWords")
      h2.textContent = sss.cat[j].words[i].fr + " > " + sss.cat[j].words[i].al
      x.append(h2)
    }
  }
}

function clearSelectStyle(select) {
  let value=1
  while (true) {
    i = document.getElementById("opt" + value)
    if (i == null) {
      return
    }
    i.setAttribute("style","background-color: #333;")
    value += 1
  }
}

function resume() {
  if (type == "cm") {
    for (let i = 0 ; i < livreCM.livre[book].resume.length ; i++) {
      p = document.createElement("p")
      p.textContent = livreCM.livre[book].resume[i]
      document.getElementById("txt").append(p)
      document.getElementById("txt").append(document.createElement("br"))
    } 
    document.getElementById("txt").setAttribute("style", "visibility: show;")
  }
}

function choiceBook(t, b) {
  if (t == "cm") {
    document.getElementById("typelivre").setAttribute("style", "visibility: show;")
    book = b
    type = t
  }
}

function changeSelect() {
  x = document.getElementById("jetest")
  x.innerHTML = "";
  data = sss
  value = document.getElementById("selecttest").value
  if (value == "all") {
    cat = Math.floor(Math.random() * data.cat.length)
    selectedCat = []
    clearSelectStyle(document.getElementById("selecttest"))
  }
  else {
    tmp = contain(selectedCat, parseInt(value)-1)
    if (tmp == -1) { // Not selected
      selectedCat.push(parseInt(value)-1)
      document.getElementById("opt" + value).setAttribute("style", "background-color: green;")
    }
    else { //already selected
      selectedCat.splice(tmp, 1)
      document.getElementById("opt" + value).setAttribute("style","background-color: #333;")
    }
    cat = selectedCat[Math.floor(Math.random() * selectedCat.length)]
  }


  word = Math.floor(Math.random() * data.cat[cat].words.length)
  lang = Math.floor(Math.random() * 2)

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
  x.append(document.createElement("br"))
  h2 = document.createElement("span")
  h2.setAttribute("style","color: green;")

  if (lang == 1) {
    h2.textContent = sss.cat[cat].words[word].al
  }
  else {
    h2.textContent = sss.cat[cat].words[word].fr
  }

  x.append(h2)

  document.getElementById("btnValid").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnNext").setAttribute("style", "visibility: show;")
}

function question(data) {
  isIn = true
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
    opt.setAttribute("id", "opt" + (j+1))
    select.append(opt)
  }

  qs.append(select)
  qs.append(x)

  document.getElementById("btnNext").setAttribute("style", "visibility: hidden; display: none;")
  document.getElementById("btnValid").setAttribute("style", "visibility: show;")
  document.getElementById("btnValid").focus()

  changeSelect()
}

