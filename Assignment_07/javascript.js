function myFun() {

//First Name
var correct_way = /^[A-Za-z]+$/;
var a = document.getElementById("fname").value;

if (a==""){
document.getElementById("name").innerHTML="** Please fill first name";
return false;
}

if(a.length <3) {
document.getElementById("name").innerHTML="** User Name should be minimum 3 characters";
return false;
}

if(a.length >10) {
document.getElementById("name").innerHTML="** User Name should be maximum 10 characters";
return false;
}

if(a.match(correct_way))
true;
else {
document.getElementById("name").innerHTML="** Only Alphabets are allowed";
return false;
}

//Last Name
var correct_way = /^[A-Za-z]+$/;
var c = document.getElementById("lname").value;

if (c==""){
document.getElementById("last").innerHTML="** Please fill last name";
return false;
}

if(c.length <3) {
document.getElementById("last").innerHTML="** It must be minimum 3 characters";
return false;
}

if(c.length >10) {
document.getElementById("last").innerHTML="** It must be maximum 20 characters";
return false;
}

if(c.match(correct_way))
true;
else {
document.getElementById("last").innerHTML="** Only Alphabets are allowed";
return false;
}

//Phone no.
var d = document.getElementById("num").value;
var cor = /^[0-9]+$/;

if (d==""){
document.getElementById("phoneno").innerHTML="**Enter phone no";
return false;
}

if(d.match(cor))
true;
else {
document.getElementById("phoneno").innerHTML="** Only Numbers are allowed";
return false;
}

//Gender
var gender = document.myform;

if (gender.gender.value === "") {
document.getElementById("Gmessage").innerHTML="** Please select gender";
return false;
}

//Date-of-birth
var d = document.getElementById("dob").value;

if (d==""){
document.getElementById("Dmessage").innerHTML="** Please select DOB";
return false;
}


//Address
var addr = document.getElementById("address").value;

if (addr==""){
document.getElementById("Amessage").innerHTML="** Please enter your Address";
return false;
}

//Email-id
var e = document.getElementById("email").value;

if (e==""){
document.getElementById("Emessage").innerHTML="** Please enter email";
return false;
}

if (e.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
document.getElementById("Emessage").innerHTML="**Enter Correct Email";
return false;
}

}




            
            document.getElementById("submit").onclick=function()
            {
                document.getElementById("table").style.display="block";
                
                var table = document.getElementById("table");
                var row = table.insertRow(-1);
                var fname = row.insertCell(0);
                var lname = row.insertCell(1);
                var num = row.insertCell(2);
                var gender = row.insertCell(3);
                var dob = row.insertCell(4);
                var email = row.insertCell(5);
                var address = row.insertCell(6);
               

                fname.innerHTML = document.getElementById("fname").value;
                lname.innerHTML = document.getElementById("lname").value;
                dob.innerHTML = document.getElementById("dob").value;
                if(document.getElementById('male').checked == true) {   
         gender.innerHTML = document.getElementById("male").value;   
} 
if(document.getElementById('female').checked == true) {  
         gender.innerHTML = document.getElementById("female").value;   
}  
email.innerHTML = document.getElementById("email").value;
num.innerHTML = document.getElementById("num").value; 
address.innerHTML = document.getElementById("address").value; 

        }
        