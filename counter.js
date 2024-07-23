    try { var os=String(navigator.userAgentData.platform);}
    catch(err){ console.log(err)}
    function about_me(){
        window.open("https://prakash78blog.wordpress.com/");
     
    }

    function add_step(){

        let step=Number(document.getElementById("step").textContent);

        document.getElementById("step").textContent=step+1;
    }
    
    function sub_step(){

        let step=Number(document.getElementById("step").textContent);
        if(step!=0){
            document.getElementById("step").textContent=step-1;
        }
        
    }
     function refresh(){
        let result=Number(document.getElementById("step").textContent);
        document.getElementById("step").textContent=0;
     
        last_load(result);
        if(localStorage.getItem("l") != null && localStorage.getItem("d") != null){
            document.getElementById("last").textContent=`Last ${localStorage.getItem("l")}`; 
            document.getElementById("last_tm").textContent=`${localStorage.getItem("d")}`; 

        }
     }

     function last_load(data){
        if(data !=0){
            localStorage.setItem("l",`${data}`);
            localStorage.setItem("d",`${new Date().toLocaleDateString()}`);
        }
     
     }

     function display_last(){
        if(localStorage.getItem("l") != null && localStorage.getItem("d") != null){
            document.getElementById("last").textContent=`Last ${localStorage.getItem("l")}`; 
            document.getElementById("last_tm").textContent=`${localStorage.getItem("d")}`; 

            //console.log(localStorage.getItem("l") )
        }
        platform_img();
     }
     
      function platform_img(){
       if(os != undefined){
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
    //  function change_color(data){
    //     if(data=="up"){
    //         document.getElementById("btn1").style.backgroundColor="#0080ff";
    //         //console.log(data);

    //     }else if(data=="down"){
    //         document.getElementById("btn1").style.backgroundColor="#E44C8C";
    //         //console.log(data);
    //     }
    //     else{
    //         document.getElementById("btn1").style.backgroundColor="#0080ff";
 
    //     }
        
    //  }