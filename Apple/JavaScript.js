var situ = 0;
function staytext(){
    document.getElementById("text").style.display="none";
}
function stay(){
    document.getElementById("upline").style.top="23px";
    document.getElementById("downline").style.top="23px";
    document.getElementById("upline").style.transform="rotate(45deg)";
    document.getElementById("downline").style.transform="rotate(-45deg)";
    document.getElementById("shelf").style.height="800px";
    document.getElementById("shelf").style.opacity="1";
    document.getElementById("shop").style.opacity="0";
}
function back(){
    document.getElementById("upline").style.top="19.5px";
    document.getElementById("downline").style.top="26.5px";
    document.getElementById("upline").style.transform="rotate(0deg)";
    document.getElementById("downline").style.transform="rotate(0deg)";
    document.getElementById("shelf").style.height="0px";
    document.getElementById("shelf").style.opacity="0";
    document.getElementById("search").style.display="none";
    document.getElementById("shop").style.opacity="1";
}
function rotate(){   
    if(situ == 0){
        document.getElementById("search").style.display="inline";
        document.getElementById("upline").style.animation="rotate1 0.4s" ;
        document.getElementById("downline").style.animation="rotate2 0.4s" ;
        document.getElementById("shelf").style.animation="downshelf 0.4s";
        document.getElementById("shop").style.animation="downshop 0.4s";
        document.getElementById("text").style.animation="upword 0.2s";
        setTimeout("staytext()",196)
        setTimeout("stay()",396);
        document.getElementById("menu").addEventListener("click", rotate);
        situ = 1;
    }
    else if(situ == 1){
        document.getElementById("text").style.display="inline";
        document.getElementById("upline").style.animation="rotate3 0.4s" ;
        document.getElementById("downline").style.animation="rotate4 0.4s" ;
        document.getElementById("shelf").style.animation="upshelf 0.4s";
        document.getElementById("shop").style.animation="upshop 0.4s";
        document.getElementById("text").style.animation="downword 0.4s";
        setTimeout("back()",396);
        document.getElementById("menu").addEventListener("click", rotate);
        situ = 0;
    }
}
document.getElementById("menu").addEventListener("click", rotate);