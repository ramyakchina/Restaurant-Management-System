
function validate(userForm) {
    div=document.getElementById("emailmsg"); 
    div.style.color="red";                   
    if(div.hasChildNodes())                  
    {
        div.removeChild(div.firstChild);    
    }
    regex=/(^\w+\@\w+\.\w+)/;               
    match=regex.exec(userForm.email.value);
    if(!match)
    {
        div.appendChild(document.createTextNode("Invalid Email"));  
        userForm.email.focus();       
        return false;                        
    }
    div=document.getElementById("pwdmsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.pwd.value.length <=5)  
    {
        div.appendChild(document.createTextNode("The password should be of at least size 6"));
        userForm.pwd.focus();
        return false;
    }
    div=document.getElementById("confirmpwdmsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.pwd.value != userForm.confirmpwd.value) 
    {
        div.appendChild(document.createTextNode("The two passwords don't match"));
        userForm.confirmpwd.focus();
        return false;
    }
    var div=document.getElementById("fullnamemsg");
    div.style.color="red";
    if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if(userForm.fullname.value.length ==0) 
    {
        div.appendChild(document.createTextNode("Name cannot be blank"));
        userForm.fullname.focus();
        return false;
    }
        div=document.getElementById("zipmsg");
    div.style.color="red";
      if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    } 
    regex=/^[0-9]*$/;
    match=regex.exec(userForm.zip.value);
    if(!match)
    {
        div.appendChild(document.createTextNode("Zip should not contain only digits"));
        return false;
    }
    if(userForm.zip.value.length!=5)
    {
        div.appendChild(document.createTextNode("Zip should have 5 digits only "));
        return false;
    }
    
    div=document.getElementById("phonemsg");
    div.style.color="red";
      if(div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    } 
    regex=/(^\d{3}[.-\s]\d{3}[.-\s]\d{4}$)/;
    match=regex.exec(userForm.phone.value);
    if(!match)
    {
        div.appendChild(document.createTextNode("Invalid Phone Number"));
        return false;
    }
    return true;
}

function addcustomer(userForm) {
	var customer = {};
	customer.email = userForm.email.value;
	customer.password = userForm.pwd.value;
	customer.fullname = userForm.fullname.value;
	customer.address = userForm.address.value;
	customer.city = userForm.city.value;
	customer.state = userForm.state.value;
	customer.country = userForm.country.value;
	customer.zipcode = userForm.zip.value;
	customer.phoneno = userForm.phone.value;
	// Convert the customer object into JSON data  
	localStorage.customer = JSON.stringify(customer); 
	return true;
	
}

function getCustomer() {	
	var customerString = "";
	
	if(localStorage.customer !== undefined) { 
		customerString = localStorage.customer;
		
		customer = JSON.parse(localStorage.customer); 
		return customer; 
	} 
	
	return customerString;
}
