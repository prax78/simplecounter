
try { var os=String(navigator.userAgentData.platform);}
catch(err){ console.log(err)}
function about_me(){
    window.open("https://prakash78blog.wordpress.com/");
 
}

function add_step(){

    let step=Number(document.getElementById("step").textContent);

    document.getElementById("step").textContent=(step+1).toLocaleString();
}

function sub_step(){

    let step=Number(document.getElementById("step").textContent);
    if(step!=0){
        document.getElementById("step").textContent=(step-1).toLocaleString();
    }
    
}
 function refresh(){
    let result=Number(document.getElementById("step").textContent);
    document.getElementById("step").textContent=0;
 
    last_load(result);
    let arr_len=Number(localStorage.getItem('arr_l'));
 
    for(let x=0;x<arr_len;x++){
        //console.log(localStorage.getItem(`local_${x}`));
        let test=document.createElement("p");
        test.id=`p_${x}`;
     
          // console.log(test);
        document.getElementById("data").appendChild(test);
        document.getElementById(`${test.id}`).textContent=localStorage.getItem(`local_${x}`);
    }
  
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
            localStorage.setItem("local_0",`Count: ${data}, ${new Date().toLocaleDateString()}`);
            for(let y=0;y<arr_len-1;y++){
                let temp_d=temp_arr[y]==null?"Empty":temp_arr[y];
                localStorage.setItem(`local_${y+1}`,`${temp_d}`);
            }
          }else {
            localStorage.setItem("local_0",`Count: ${data}, ${new Date().toLocaleDateString()}`);
            ;
          }   
         

    }
 }

 function display_last(){

    localStorage.setItem('arr_l','5');
    let arr_len=Number(localStorage.getItem('arr_l'));
   
    for(let x=0;x<arr_len;x++){

        if(localStorage.getItem("local_0")==null){
          
            localStorage.setItem(`${`local_${x}`}`,"");
        }
    }

    for(let x=0;x<arr_len;x++){
       // console.log(localStorage.getItem(`local_${x}`));
        let test=document.createElement("p");
        test.id=`p_${x}`;
        test.className="card text-center";
        test.style.color="white";
  
        if(x%2==0){
            test.style.backgroundColor="#993366";
        }else{
            test.style.backgroundColor="#0080ff";   
        }
       // test.style="background-color:#0080ff;color: wheat";
       // console.log(test);
        document.getElementById("data").appendChild(test);
        document.getElementById(`${test.id}`).textContent=localStorage.getItem(`local_${x}`);

    }

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
   console.log(src);
   console.log(os);
   }
   else {
    document.getElementById("icon").style.visibility="visible";
    src="linux.png";
   }

  }

  
