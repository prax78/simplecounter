var secs=0;
var mnts=0;
var hrs=0;


var is_running=false;
function stopwatch_start(){
    is_running=true;
setInterval(() => {
 secs+=1;
 if(secs>59){
    secs=0;
    mnts+=1;
 }
  if(mnts>59){
    mnts=0;
    hrs+=1;
  }
  if(hrs>23){
    hrs=0;
  }
  document.getElementById("stopwatch").textContent=`${hrs}:${mnts}:${secs}`;
  localStorage.setItem("clk",`${hrs}:${mnts}:${secs}`);
  //console.log(`${hrs}:${mnts}:${secs}`)
}, 1000);
}
