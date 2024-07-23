
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
           // document.getElementById("last").textContent=`Last ${Array(localStorage.getItem("l"))}`; 
            //  console.log(`one ${localStorage.getItem("1")}`);
            //  console.log(`one ${localStorage.getItem("2")}`);
            //  console.log(`one ${localStorage.getItem("3")}`);
             display_last();
            //  document.getElementById("one").textContent=`1 ${localStorage.getItem("1")}`;
            //  document.getElementById("two").textContent=`2 ${localStorage.getItem("2")}`;
            //  document.getElementById("three").textContent=`3 ${localStorage.getItem("3")}`;
            
       
     }
     function clear_data(){
        localStorage.clear();
        window.open("#");
     }
     function last_load(data){
        if(data !=0){
    
            // localStorage.setItem("1","");
            // localStorage.setItem("2","");
            // localStorage.setItem("3","");
            let one=localStorage.getItem("1");
            let two=localStorage.getItem("2");
            let three=localStorage.getItem("3");
            console.log(one);
            console.log(two);
            console.log(three);
            let counter_data=`counter:${data},date:${new Date().toLocaleDateString()}`;
            if(one !="" && two !="" && three !=""){
                // localStorage.setItem("1","");
                // // localStorage.setItem("2","");
                // // localStorage.setItem("3","");
                tempone=localStorage.getItem("1");
                temptwo=localStorage.getItem("2");
                localStorage.setItem("1","");
                localStorage.setItem("2",tempone);
                localStorage.setItem("3",temptwo)
            }
            if(two==""){
                localStorage.setItem("2",`${counter_data}`)
            }else if(three==""){
                localStorage.setItem("3",`${counter_data}`)
            }else {
                localStorage.setItem("1",`${counter_data}`)
            }

        //   let counter_data={'counter':`${data}`,date:`${new Date().toLocaleDateString()}`};
        //   //localStorage.setItem("l",`${counter_data}`);  
        // localStorage.getItem('arr').push(counter_data);
        //   console.log(localStorage.getItem('arr'))         
        //    // localStorage.setItem("l",`${counter_data}`);

        //    // localStorage.setItem("d",`${new Date().toLocaleDateString()}`);
        }
     
     }

     function display_last(){
        let disone= localStorage.getItem("1");
        let distwo=localStorage.getItem("2");
        let disthree=localStorage.getItem("3");
   

        if(disone !='null'){
            document.getElementById("one").textContent=disone;

        }
        if(distwo !='null'){
            document.getElementById("two").textContent=distwo;
            
        }
        if(disthree !='null'){
            document.getElementById("three").textContent=disthree;
            
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