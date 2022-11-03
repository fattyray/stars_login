select=document.getElementById("picshow");
bubble=document.getElementById('bubble')
let count = 0;
let total=8
changepic=function () {
    select.style.opacity='1';
    setTimeout(function (){
        bubble.style.opacity='0.6';
    },300)
    let name='img_'+(count%total+1)+'.png';
    select.style.backgroundImage="url("+name+")";
    count+=1
    setTimeout(function (){
        select.style.opacity='0.1';
        setTimeout(function (){
            bubble.style.opacity='0';
        },800)

    },2200)
}
changepic()
timer=setInterval(changepic,4500)