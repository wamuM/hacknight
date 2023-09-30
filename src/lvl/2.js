const footer = document.getElementById("footer")
const button = document.getElementById("button")
const main = document.getElementById("main")

footer.style.height = "80vh";

document.addEventListener("mousemove",(event)=>{
  let mx = event.clientX 
  let my = event.clientY 
  
  let b  = button.getBoundingClientRect() 
  let bx = b.left
  let by = b.top

  if(50**2 >= (bx-mx)**2+(by-my)**2){
    button.style.left = (2*bx-mx)+"px"
    button.style.top = (2*by-my)+"px"
    console.log("danger")
  }
  if(bx<=0)
    button.style.left = 0;
  else button.style.left = bx;
  if(by<=0)
    button.style.top = 0;
  else button.style.top = by;
  console.log(mx+" "+my+" "+" "+bx+" "+by)
})
