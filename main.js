const swapElement = (elementID) =>{
  elementID.style.display == "none" ? 
  elementID.style.display = "block" : 
  elementID.style.display = "none"
}
const scrlt = (x,y) => {window.scroll(x,y)};