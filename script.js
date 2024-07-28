function register()
{
    if(localStorage.getItem(acno.value))
        {
            alert('Enter a different account no')
        }
        else{
            Acc={
            username:uname.value,
            accountNo:acno.value,
            password:pwd.value,
            Balance:0
        }
        localStorage.setItem(acno.value,JSON.stringify(Acc));
        alert('Account Created')
        window.location.href='./user.html'
        }
}
function login()
{
    let user= JSON.parse(localStorage.getItem(acno.value));
    console.log(user);
    if(user)
    {
        if(user.password== pwd.value)
        {
            alert("login Successful")
            window.location.href='./user.html'
        }
    }
    else{
        alert("incorrect values")
    }

}
function logout()
{
    window.location.href='./index.html'
}
// w=document.getElementById('welcome');
// w.innerHTML=`Welcome ${JSON.parse(localStorage.getItem(acno)).username}`;
function deposit()
{
    acc=dAcno.value;
    user=localStorage.getItem(acc);

    
    if(user)
    {
        let u=JSON.parse(user);
        u.Balance+=Number(damt.value);
        console.log("after upadation ",u);
        localStorage.setItem(u.accountNo,JSON.stringify(u));
        alert("Amount Deposited");
        dBalance.innerHTML=`BALANCE: ${u.Balance}`
    }
    else{
        console.log('user not found');
        alert("Please enter valid account number")
    }
}
function withdraw()
{
    acc=wAcno.value;
    user=localStorage.getItem(acc);    
    if(user)
    {
        let u=JSON.parse(user);
        u.Balance-=Number(wamt.value);
        console.log("after upadation ",u);
        localStorage.setItem(u.accountNo,JSON.stringify(u));
        alert("Amount Withdrawn");
        wBalance.innerHTML=`Balance : ${u.Balance}`
    }
    else{
        console.log('user not found');
        alert("Please enter valid account number")
    }
}