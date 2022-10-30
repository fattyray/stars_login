select=document.getElementById("picshow");
count=0
total=8
changepic=function () {
    name='img_'+(count%total+1)+'.png';
    select.style.backgroundImage="url("+name+")";
    count+=1
}
changepic()
timer=setInterval(changepic,2500)