const button = document.getElementById("button")
const main = document.getElementById("main")


document.addEventListener("mousemove",(event)=>{
  let mx = event.clientX 
  let my = event.clientY 
  
  let b  = button.getBoundingClientRect() 
  let bx = b.left+0
  let by = b.top+0

  if(100**2 >= (bx-mx)**2+(by-my)**2){
    button.style.position = "absolute" 
    bx += (bx-mx)
    by += (by-my)
    console.log("danger")
  
  if(bx<=0)
    button.style.left = b.left;
  else button.style.left = bx+"px";
  if(by<=0)
    button.style.top = b.top;
  else button.style.top = by+"px";
  }
  })
