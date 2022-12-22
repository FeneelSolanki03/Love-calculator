function myMessage() {
    var loveScore = Math.random()*100;
    loveScore = Math.floor(loveScore)+1
  result.innerHTML = "Your Love Score is : "+loveScore+"%";
  document.getElementById("result").style.display = "block";
 
}
setTimeout(myMessage, 40000);
    

  

