
    function about_me(){
        window.open("https://prakash78blog.wordpress.com/");
     
    }

    function add_step(){

        let step=Number(document.getElementById("step").textContent);
        document.getElementById("step").textContent=step+1;
    }
    
     function refresh(){
        let result=Number(document.getElementById("step").textContent);
        document.getElementById("step").textContent=0;
     
        last_load(result);
        if(localStorage.getItem("l") != null){
            document.getElementById("last").textContent=`Last ${localStorage.getItem("l")}`; 
        }
     }

     function last_load(data){
        if(data !=0){
            localStorage.setItem("l",`${data}`);
        }
     
     }

     function display_last(){
        if(localStorage.getItem("l") != null){
            document.getElementById("last").textContent=`Last ${localStorage.getItem("l")}`; 
            document.getElementById("last_tm").textContent=`${new Date().toLocaleDateString()}`; 

            //console.log(localStorage.getItem("l") )
        }
        platform_img();
     }
     
      function platform_img(){
       let os=navigator.userAgentData;
       let src="";
       switch(os.platform){
        case 'Android':
            src="Android-64x64.png";
            break;
        case 'Windows':
            src="Microsoft-64x64.png";
            break;
        case 'Apple':
            src="Apple-64x64.png";
            break;
        default:
            src="Linux-64x64.png";

       }
       document.getElementById("platform").setAttribute("src",src);
      console.log(src);
      console.log(os.platform);
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