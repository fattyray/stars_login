to_select=document.getElementsByClassName('rgb');
color_temp=['red','green','blue','orange','purple','pink']
color_len=color_temp.length
changergb=function () {

    for (const elem of to_select) {
        choice=color_temp[Math.floor(Math.random()*color_len)]
        elem.style.color=choice
    }
}
changergb()
timer=setInterval(changergb,2950)