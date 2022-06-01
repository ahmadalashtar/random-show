let x = document.getElementsByName("ur")
let outerFrame = document.getElementsByClassName("lister-item mode-advanced")
for (let i = 0 ; i < x.length ; i++) {
  if (x[i].innerHTML!="Rate this"){
    outerFrame.item(i).remove()
  }
}
