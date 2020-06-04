function swapElement(elementID){
    
    if(elementID.style.display === "none") 
    {
    elementID.style.display = "block";
    } 
    else 
    {
    elementID.style.display = "none";
    } 
}

function scrlt(x,y){
    window.scrollTo(x,y)
    //console.log("done")
}