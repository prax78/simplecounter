
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
            console.log(localStorage.getItem("l") )
        }
     }