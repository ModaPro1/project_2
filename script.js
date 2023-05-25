let lis = document.querySelectorAll(".shuffle li")
let boxs = document.querySelectorAll(".box")

lis.forEach((li) => {
  li.addEventListener("click", removeActive)
  li.addEventListener("click", manageBoxs)
})

// Add Active Class
function removeActive () {
  lis.forEach((li) => {
    li.classList.remove("active")
    this.classList.add("active")
  })
}

// Manage Boxs
function manageBoxs() {
  boxs.forEach((box) => {
    box.style.display = "none"
    if(this.dataset.work == "all"){
      box.style.display = "block"
    }
  })
  document.querySelectorAll(this.dataset.work).forEach((box) => {
    box.style.display = "block"
  })
}


// ############## Inputs ##############

let contactInputs = document.querySelectorAll(".main-input")

contactInputs.forEach((input) => {
  input.onfocus = function(){
    this.parentElement.classList.add("focused")
  }
  input.onblur = function(){
    if(!input.value != ""){
      this.parentElement.classList.remove("focused")
    }
  }
})
