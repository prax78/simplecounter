
try { var os=String(navigator.userAgentData.platform);}
catch(err){ console.log(err)}
function about_me(){
    window.open("https://prakash78blog.wordpress.com/");
 
}

function add_step(){
    if(document.getElementById("stopwatch").style.visibility=="hidden"){
        document.getElementById("stopwatch").style.visibility="visible";
        stopwatch_start();
    }


    let step=Number(document.getElementById("step").textContent.replace(',',''));
    step=step+1;
    
    document.getElementById("step").textContent=step.toLocaleString();
}

function sub_step(){

    let step=Number(document.getElementById("step").textContent.replace(',',''));
    if(step!=0){
        step=step-1;
        document.getElementById("step").textContent=step.toLocaleString();
    }
    
}
 function refresh(){
    let result=Number(document.getElementById("step").textContent.replace(',',''));
    document.getElementById("step").textContent=0;
 
    last_load(result);
    
    location.reload();   
  
 }
 function clear_data(){
    localStorage.clear();
    location.reload();
 }

 function last_load(data){
    if(data !=0){
       let temp_arr=[];
        let arr_len=Number(localStorage.getItem('arr_l'));
       
        if(localStorage.getItem("local_0")!=""){
            for(let x=0;x<arr_len;x++){
                    temp_arr[x]=localStorage.getItem(`local_${x}`);
            }
            localStorage.setItem("local_0",`Count: ${data}, ${new Date().toLocaleDateString()},${localStorage.getItem("clk")}`);
            for(let y=0;y<arr_len-1;y++){
                let temp_d=temp_arr[y]==null?"Empty":temp_arr[y];
                localStorage.setItem(`local_${y+1}`,`${temp_d}`);
            }
          }else {
            localStorage.setItem("local_0",`Count: ${data}, ${new Date().toLocaleDateString()},${localStorage.getItem("clk")}`);

            ;
          }   
         
         
    }
 }

 function display_last(){

    localStorage.setItem('arr_l','7');
    localStorage.setItem("clk",`00:00:00`);
    let arr_len=Number(localStorage.getItem('arr_l'));
   
    for(let x=0;x<arr_len;x++){

        if(localStorage.getItem("local_0")==null){
          
            localStorage.setItem(`${`local_${x}`}`,"");
        }
    }
    let table_el=document.getElementById("data_table");
   
    for(let x=0;x<arr_len;x++){
        table_tr=table_el.appendChild(document.createElement("tr"));
        if(localStorage.getItem(`local_${x}`)!="" && localStorage.getItem(`local_${x}`)!="Empty" && localStorage.getItem(`local_${x}`)!=null){  
            let temp_str= localStorage.getItem(`local_${x}`).split(',');  
                 
            table_td_one=table_tr.appendChild(document.createElement("td"));
            table_td_one.textContent=Number(temp_str[0].replace('Count:','')).toLocaleString();
            table_td_two=table_tr.appendChild(document.createElement("td"));
            table_td_two.textContent=temp_str[1];
            table_td_four=table_tr.appendChild(document.createElement("td"));
            table_td_four.textContent=temp_str[2];
            table_td_three=table_tr.appendChild(document.createElement("td"));
            del_button=table_td_three.appendChild(document.createElement("button"));
            del_button.textContent="del";
            del_button.style.backgroundColor="#9A2999";
            del_button.style.color="white";
            del_button.onclick=(()=>{localStorage.setItem(`local_${x}`,"");location.reload()});
        }

    }
  //console.log(localStorage.getItem("clk"));
    platform_img();
 }
 
  function platform_img(){

   if(os != undefined || os !=""){
    document.getElementById("os").style.visibility="visible";
   
    let src="";
    if(new RegExp('^An').test(os)){
     src="Android-64x64.png";
    }else if(new RegExp('^Wi').test(os)){
     src="Microsoft-64x64.png";
    }else if(RegExp('[iI]|[mM]').test(os))
    {
     src="Apple-64x64.png";
    } else {
        document.getElementById("icon").style.visibility="visible";
     src="linux.png";
    }

    document.getElementById("platform").setAttribute("src",src);
//    console.log(src);
//    console.log(os);
   }
   else {
    document.getElementById("icon").style.visibility="visible";
    src="linux.png";
   }

  }

  
