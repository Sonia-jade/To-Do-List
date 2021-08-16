function updateTime(){

    var time=document.getElementById("time")
    
    setInterval(()=>{
      var date=new Date()
      var hour=date.getHours()
      var minutes=date.getMinutes()
      var seconds=date.getSeconds()
      var timer=hour+":"+minutes+":"+seconds
      time.innerHTML=timer
    },1000)
    // here 1000 refers to mili seconds
}