function eben( totalPrev,inputed,totalBalance, what){
    let input = parseFloat(document.getElementById(inputed).value)
    let Amount=parseFloat(document.getElementById(totalPrev).innerText)
    let total= parseFloat(document.getElementById(totalBalance).innerText)
  if(input<0 || typeof input!="number"){alert("You can not transection negative value")}
  else{  
    Amount+=input
    if(what==true){total+=input}
    else if(what==false){total-=input}
    document.getElementById(totalPrev).innerText=Amount
    document.getElementById(totalBalance).innerText=total
    document.getElementById(inputed).value=""
  }
}
document.getElementById("depositbutton").addEventListener("click",function(){eben("deposittotal","depositinput","balancetotal",true)})
document.getElementById("withdrawbutton").addEventListener("click",function(){eben( "withdrawtotal","withdrawinput","balancetotal",false)})


