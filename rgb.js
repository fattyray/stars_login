var to_select=document.getElementsByClassName('rgb');
var color_temp=['red','green','blue','orange','purple','pink']
var color_len=color_temp.length
changergb=function () {

    for (const elem of to_select) {
         choice=color_temp[Math.floor(Math.random()*color_len)]
        elem.style.color=choice
    }
}
changergb()
timer=setInterval(changergb,2950)