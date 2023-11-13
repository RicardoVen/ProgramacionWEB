window.onload = function () {
    document.getElementById("logo").onmouseover = function () {
        //alert("¡Compra ahora en mi tienda!");
    }

    var btn1 = document.getElementById("bto1");
    btn2 = document.getElementById("bto2");
    btn3 = document.getElementById("bto3");

    btn1.onmouseover = function () {
        btn1.style.color = "white";
    }

    btn1.onmousedown = function () {
        btn1.style.color = "white";
    }

    btn1.onmouseup = function () {
        btn1.style.color = "white";
    }

    btn1.onmouseout = function () {
        btn1.style.color = "red";
    }
    btn1.onmouseover = function () {
        btn1.style.color = "pink";
    }
    btn1.onmousedown = function () {
        btn1.style.color = "grey";
    }
     
    alert("");

    document.getElementById("bto1").addEventListener("mouseover",function(){onmouseover();});
     btn1.addEventListener("mouseover",function(){(mouseover(btn1))});
     btn1.addEventListener("mouseout",function(){(mouseout(btn1))});
     btn1.addEventListener("mousedown",function(){(mousedown(btn1))});

     document.getElementById("bto2").addEventListener("mouseover",onmouseover());
     btn2.addEventListener("mouseover",function(){(mouseover(btn2))});
     btn2.addEventListener("mouseout",function(){(mouseout(btn2))}); 
     btn2.addEventListener("mousedown",function(){(mousedown(btn2))});
 
     document.getElementById("bto3").addEventListener("mouseover",onmouseover());
     btn3.addEventListener("mouseover",function(){(mouseover(btn3))});
     btn3.addEventListener("mouseout",function(){(mouseout(btn3))}); 
     btn3.addEventListener("mousedown",function(){(mousedown(btn3))});     

    //Invocar que cuando me ponga encima del elemento cambie de color 

    searchItem=document.getElementById("searchDiv");
    avisos=document.getElementById("avisos");
    btn1.onclick=function(){ 
       if(searchItem.style.display=="none" || searchItem.style.display==""){
        searchItem.style.display="flex";
        avisos.style.display="block";
    }else{
        searchItem.style.display="none";
        avisos.style.display="none";
    }
    document.getElementById("closeBto").onclick=function(){
    searchItem.style.display=none;
    avisos.style.display=none;
 }
 document.getElementById("close").onclick=function(){
    document.getElementById('loginForm').style.display='none';
 }
}
}