
window.onload = pageLoad;
function pageLoad(){
    var conplete = document.getElementById("myForm")
    conplete.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Form = document.forms["myForm"];
    var firstname = Form["firstname"];
    var lastname = Form["lastname"];
    var user = Form["username"];
    var pas = Form["password"];
    var Re_pas = Form["Re_password"];
    
    return check (pas.value,Re_pas.value);
}

function check(pas,Re_pas){
    if (pas == Re_pas)
    {  
        
        return true;
    }
    else
    {
        var Error = document.getElementById("ere");
        Error.style.color = "red";
        Error.innerHTML = "Password not match"
        
        return false;   
   
    }
}



