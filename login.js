var submit=document.getElementById('submit');
var password=document.getElementById('password');
var account=document.getElementById('account');
var checkbox=document.getElementById('checkbox1')
let Storage=localStorage;
submit.disabled=true
checkbox.onclick=function ()
{
    if (checkbox.checked==true)
    {
        submit.disabled=false;
    }
    else
        submit.disabled=true;
}
submit.onclick=function (event){
    if(Storage.regestered=='0')
    {   account.style.backgroundColor='white';
        password.style.backgroundColor='white';
        let ac=account.value;
        let pas =password.value;
        if (ac.length<6)
        {
            account.style.backgroundColor='orange';
            alert("用户名请设置在6个字符及以上")
        }
        if(pas.length<6)
        {
            password.style.backgroundColor='orange';
            alert("密码请设置在6个字符及以上")
        }
        if(ac.length>=6 && pas.length>=6)
        {
            alert("尊敬的用户 :\n 你的账号是 ： "+ac+"\n"+"你的密码是"+pas+"\n请好好的记住它，以便于后续的登录");
            Storage.regestered=1;
            Storage.account=ac;
            Storage.password=pas;
            submit.value="登录";
        }
    }
    else if (Storage.regestered=='1')
    {
        let ac=account.value;
        let pas =password.value;
        if(ac==Storage.account && pas==Storage.password)
            alert("登陆成功");
        else
        alert("账户名出错或者是密码出错");
    }

    event.preventDefault();
}
// Storage.regestered=0;
// alert(Storage.regestered)
if (Storage.regestered=='0')
{
    submit.value="开始注册";
}
else {
    submit.value="登录";
}
