function trim(str)
{return str.replace(/^\s*|\s*$/g,"");}
function IsOfficialEmailCheck(strEmail)
{
	var strArray = strEmail.split("@");
	var strstr   = strArray[1].toLowerCase();
	if(strstr=="hotmail.com"){return false;}
	else if(strstr=="gmail.com"){return false;}
	else if(strstr=="yahoo.com"){return false;}
	else if(strstr=="mailinator.com"){return false;}
	else if(strstr=="gmail.co.in"){return false;}
	else if(strstr=="yahoo.co"){return false;}
	else if(strstr=="aol.com"){return false;}
	else if(strstr=="yandex.com"){return false;}
	else if(strstr=="msn.com"){return false;}
	else if(strstr=="gawab.com"){return false;}
	else if(strstr=="inbox.com"){return false;}
	else if(strstr=="gmx.com"){return false;}
	else if(strstr=="rediffmail.com"){return false;}
	else if(strstr=="in.com"){return false;}
	else if(strstr=="live.com"){return false;}
	else if(strstr=="hotmail.co.uk"){return false;}
	else if(strstr=="hotmail.fr"){return false;}
	else if(strstr=="yahoo.fr"){return false;}
	else if(strstr=="wanadoo.fr"){return false;}
	else if(strstr=="wanadoo.fr"){return false;}
	else if(strstr=="comcast.net"){return false;}
	else if(strstr=="yahoo.co.uk"){return false;}
	else if(strstr=="yahoo.com.br"){return false;}
	else if(strstr=="yahoo.co.in"){return false;}
	else if(strstr=="rediffmail.com"){return false;}
	else if(strstr=="free.fr"){return false;}
	else if(strstr=="gmx.de"){return false;}
	else if(strstr=="gmx.de"){return false;}
	else if(strstr=="yandex.ru"){return false;}
	else if(strstr=="ymail.com"){return false;}
	else if(strstr=="libero.it"){return false;}
	else if(strstr=="outlook.com"){return false;}
	else if(strstr=="uol.com.br"){return false;}
	else if(strstr=="bol.com.br"){return false;}
	else if(strstr=="mail.ru"){return false;}
	else if(strstr=="cox.net"){return false;}
	else if(strstr=="hotmail.it"){return false;}
	else if(strstr=="sbcglobal.net"){return false;}
	else if(strstr=="sfr.fr"){return false;}
	else if(strstr=="live.fr"){return false;}
	else if(strstr=="verizon.net"){return false;}
	else if(strstr=="live.co.uk"){return false;}
	else if(strstr=="googlemail.com"){return false;}
	else if(strstr=="yahoo.es"){return false;}
	else if(strstr=="ig.com.br"){return false;}
	else if(strstr=="live.nl"){return false;}
	else if(strstr=="bigpond.com"){return false;}
	else if(strstr=="terra.com.br"){return false;}
	else if(strstr=="yahoo.it"){return false;}
	else if(strstr=="neuf.fr"){return false;}
	else if(strstr=="yahoo.de"){return false;}
	else if(strstr=="live.com"){return false;}
	else if(strstr=="yahoo.de"){return false;}
	else if(strstr=="rocketmail.com"){return false;}
	else if(strstr=="att.net"){return false;}
	else if(strstr=="laposte.net"){return false;}
	else if(strstr=="facebook.com"){return false;}
	else if(strstr=="bellsouth.net"){return false;}
	else if(strstr=="yahoo.in"){return false;}
	else if(strstr=="hotmail.es"){return false;}
	else if(strstr=="charter.net"){return false;}
	else if(strstr=="yahoo.ca"){return false;}
	else if(strstr=="yahoo.com.au"){return false;}
	else if(strstr=="rambler.ru"){return false;}
	else if(strstr=="hotmail.de"){return false;}
	else if(strstr=="tiscali.it"){return false;}
	else if(strstr=="shaw.ca"){return false;}
	else if(strstr=="yahoo.co.jp"){return false;}
	else if(strstr=="sky.com"){return false;}
	else if(strstr=="earthlink.net"){return false;}
	else if(strstr=="optonline.net"){return false;}
	else if(strstr=="freenet.de"){return false;}
	else if(strstr=="t-online.de"){return false;}
	else if(strstr=="aliceadsl.fr"){return false;}
	else if(strstr=="virgilio.it"){return false;}
	else if(strstr=="home.nl"){return false;}
	else if(strstr=="qq.com"){return false;}
	else if(strstr=="telenet.be"){return false;}
	else if(strstr=="me.com"){return false;}
	else if(strstr=="yahoo.com.ar"){return false;}
	else if(strstr=="tiscali.co.uk"){return false;}
	else if(strstr=="yahoo.com.mx"){return false;}
	else if(strstr=="gmx.net"){return false;}
	else if(strstr=="mail.com"){return false;}
	else if(strstr=="planet.nl"){return false;}
	else if(strstr=="tin.it"){return false;}
	else if(strstr=="live.it"){return false;}
	else if(strstr=="ntlworld.com"){return false;}
	else if(strstr=="arcor.de"){return false;}
	else if(strstr=="yahoo.co.id"){return false;}
	else if(strstr=="frontiernet.net"){return false;}
	else if(strstr=="hetnet.nl"){return false;}
	else if(strstr=="live.com.au"){return false;}
	else if(strstr=="yahoo.com.sg"){return false;}
	else if(strstr=="zonnet.nl"){return false;}
	else if(strstr=="club-internet.fr"){return false;}
	else if(strstr=="juno.com"){return false;}
	else if(strstr=="optusnet.com.au"){return false;}
	else if(strstr=="blueyonder.co.uk"){return false;}
	else if(strstr=="bluewin.ch"){return false;}
	else if(strstr=="skynet.be"){return false;}
	else if(strstr=="sympatico.ca"){return false;}
	else if(strstr=="windstream.net"){return false;}
	else if(strstr=="mac.com"){return false;}
	else if(strstr=="centurytel.net"){return false;}
	else if(strstr=="chello.nl"){return false;}
	else if(strstr=="live.ca"){return false;}
	else if(strstr=="aim.com"){return false;}
	else if(strstr=="bigpond.net.au"){return false;}
	 else if(strstr=="outlook.de"){return false;}
	else{return true;}
}
function validateEmail(strValue){var objRegExp=/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,10}$/;return objRegExp.test(strValue);}

//function validatePhone(e) {
    //return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e)
//}

function validatePhone(e) {
    return /^[0-9]{8,15}$/.test(e)
}

function onlyNum(e) {
    return /^[0-9]$/.test(e)
}

function onlyChar(e) {
    return /^[a-zA-Z ]+$/.test(e)
}
	
	
function validationdataupload()
{
	
	var response = grecaptcha.getResponse();
	if(trim(document.contactUs.fname.value)=="")
	{
		alert("Please enter your first name");
		document.contactUs.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.contactUs.fname.value))))
	{
		alert("Name should be only alphabet");
		
		document.contactUs.fname.focus();
		return false;
	}
	else if(trim(document.contactUs.lname.value)=="")
	{
		alert("Please enter your last name");
		document.contactUs.lname.focus();
		return false;
	}
	else if(!(onlyChar(trim(document.contactUs.lname.value))))
	{
		alert("Name should be only alphabet");
		document.contactUs.lname.focus();
		return false;
	}
	
	
	else if(trim(document.contactUs.email.value)=="")
	{
		alert("Please enter your email");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.contactUs.email.value))))
	{
		alert("Please enter valid email id");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.contactUs.email.value))))
	{
		alert("Please enter your business email address");
		document.contactUs.email.focus();
		return false;
	}
	else if(trim(document.contactUs.phone.value)=="")
	{
		alert("Please enter phone number");
		document.contactUs.phone.focus();
		return false;
	}
	else if(!(validatePhone(trim(document.contactUs.phone.value))))
	{
		alert("Please enter 8 to 15 digit phone number");
		document.contactUs.phone.focus();
		return false;
	}
	
	else if(trim(document.contactUs.comments.value)=="")
	{
		alert("Please enter your requirement");
		document.contactUs.comments.focus();
		return false;
	}
	
	else if(response.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	var filename = document.getElementById('fileupload').value;
	if(filename!="")
	{
		var extension = filename.substr(filename.lastIndexOf('.')+1).toLowerCase();
		if(extension=='xls'||extension=='csv'||extension=='xlsx'||extension=='odt'||extension=='docx'||extension=='txt'||extension=='pdf'||extension=='gif'||extension=='png'||extension=='jpg')
		{
			return true;
		}
		else{
			alert('Please Upload Valid Sample File');
			return false;
		}
	}
	else
	{
		alert('Please Upload Your Sample File');
		return false;
	}
}



function validationfooterform()
{
	
	var responsefooter = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	
	if(trim(document.footerform.fname.value)=="")
	{
		alert("Please enter your first name");
		document.footerform.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.footerform.fname.value))))
	{
		alert("Name should be only alphabet");
		
		document.footerform.fname.focus();
		return false;
	}
	else if(trim(document.footerform.lname.value)=="")
	{
		alert("Please enter your last name");
		document.footerform.lname.focus();
		return false;
	}
	else if(!(onlyChar(trim(document.footerform.lname.value))))
	{
		alert("Name should be only alphabet");
		document.footerform.lname.focus();
		return false;
	}
	
	
	else if(trim(document.footerform.email.value)=="")
	{
		alert("Please enter your email");
		document.footerform.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.footerform.email.value))))
	{
		alert("Please enter valid email id");
		document.footerform.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.footerform.email.value))))
	{
		alert("Please enter your business email address");
		document.footerform.email.focus();
		return false;
	}
	//else if(trim(document.footerform.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.footerform.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.footerform.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.footerform.phone.focus();
		//return false;
	//}
	else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.footerform.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.footerform.uphone.focus();
		
		return false;
	}
	else if(trim(document.footerform.contacts.value)=="")
	{
		alert("Please Select No. of Contacts.");
		document.footerform.contacts.focus();
		return false;
	}
	else if(trim(document.footerform.company.value)=="")
	{
		alert("Please enter company Name.");
		document.footerform.company.focus();
		return false;
	}
	
	else if(trim(document.footerform.comments.value)=="")
	{
		alert("Please enter your requirement");
		document.footerform.comments.focus();
		return false;
	}
	
	else if(responsefooter.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	
}

function validationfooterformcommon()
{
	
	var responsefooter = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	
	if(trim(document.footerform.fname.value)=="")
	{
		alert("Please enter your first name");
		document.footerform.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.footerform.fname.value))))
	{
		alert("Name should be only alphabet");
		
		document.footerform.fname.focus();
		return false;
	}
	else if(trim(document.footerform.lname.value)=="")
	{
		alert("Please enter your last name");
		document.footerform.lname.focus();
		return false;
	}
	else if(!(onlyChar(trim(document.footerform.lname.value))))
	{
		alert("Name should be only alphabet");
		document.footerform.lname.focus();
		return false;
	}
	
	
	else if(trim(document.footerform.email.value)=="")
	{
		alert("Please enter your email");
		document.footerform.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.footerform.email.value))))
	{
		alert("Please enter valid email id");
		document.footerform.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.footerform.email.value))))
	{
		alert("Please enter your business email address");
		document.footerform.email.focus();
		return false;
	}
	//else if(trim(document.footerform.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.footerform.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.footerform.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.footerform.phone.focus();
		//return false;
	//}
	else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.footerform.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.footerform.uphone.focus();
		
		return false;
	}
	//else if(trim(document.footerform.contacts.value)=="")
	//{
	//	alert("Please Select No. of Contacts.");
	//	document.footerform.contacts.focus();
	//	return false;
	//}
	else if(trim(document.footerform.company.value)=="")
	{
		alert("Please enter company Name.");
		document.footerform.company.focus();
		return false;
	}
	
	else if(trim(document.footerform.comments.value)=="")
	{
		alert("Please enter your requirement");
		document.footerform.comments.focus();
		return false;
	}
	
	else if(responsefooter.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	
}

function contactUsForm()
{
	var response = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	//var response = grecaptcha.getResponse();
	if(trim(document.contactUs.fname.value)=="")
	{
		alert("Please enter your first name");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.contactUs.fname.value))))
	{
		alert("Name should be only alphabet");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}
	else if(trim(document.contactUs.lname.value)=="")
	{
		alert("Please enter your last name");
		document.contactUs.lname.focus();
		return false;
	}
	else if(!(onlyChar(trim(document.contactUs.lname.value))))
	{
		alert("Name should be only alphabet");
		document.contactUs.lname.focus();
		return false;
	}
	
	
	else if(trim(document.contactUs.email.value)=="")
	{
		alert("Please enter your email");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.contactUs.email.value))))
	{
		alert("Please enter valid email id");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.contactUs.email.value))))
	{
		alert("Please enter your business email address");
		document.contactUs.email.focus();
		return false;
	}
	//else if(trim(document.contactUs.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.contactUs.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	
	else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.contactUs.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.contactUs.uphone.focus();
		
		return false;
	}
	
	else if(trim(document.contactUs.comments.value)=="")
	{
		alert("Please enter your requirement");
		document.contactUs.comments.focus();
		return false;
	}
	else if(response.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	
	
}


function resourceForm()
{
	var response = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	//var response = grecaptcha.getResponse();
	if(trim(document.contactUs.fname.value)=="")
	{
		alert("Please enter your name");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.contactUs.fname.value))))
	{
		alert("Name should be only alphabet");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}
		
	else if(trim(document.contactUs.email.value)=="")
	{
		alert("Please enter your email");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.contactUs.email.value))))
	{
		alert("Please enter valid email id");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.contactUs.email.value))))
	{
		alert("Please enter your business email address");
		document.contactUs.email.focus();
		return false;
	}
	//else if(trim(document.contactUs.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.contactUs.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.contactUs.phone.focus();
		//return false;;
	//}
	
	else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.contactUs.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.contactUs.uphone.focus();
		
		return false;
	}
	
	
	else if(response.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	
	
}

function manageCommunicationFormValidation() {
	if(trim(document.manageCPForm.fname.value)=="")
	{
		alert("Please enter your first name");
		document.manageCPForm.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.manageCPForm.fname.value))))
	{
		alert("Name should be only alphabet");
		
		document.manageCPForm.fname.focus();
		return false;
	}
	else if(trim(document.manageCPForm.lname.value)=="")
	{
		alert("Please enter your last name");
		document.manageCPForm.lname.focus();
		return false;
	}
	else if(!(onlyChar(trim(document.manageCPForm.lname.value))))
	{
		alert("Last Name should be only alphabet");
		document.manageCPForm.lname.focus();
		return false;
	}
	else if(trim(document.manageCPForm.email.value)=="")
	{
		alert("Please enter your email");
		document.manageCPForm.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.manageCPForm.email.value))))
	{
		alert("Please enter valid email id");
		document.manageCPForm.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.manageCPForm.email.value))))
	{
		alert("Please enter your business email address");
		document.manageCPForm.email.focus();
		return false;
	}
	else if(trim(document.manageCPForm.phone.value)=="")
	{
		alert("Please enter phone number");
		document.manageCPForm.phone.focus();
		return false;
	}
	else if(!(validatePhone(trim(document.manageCPForm.phone.value))))
	{
		alert("Please enter 8 to 15 digit phone number");
		document.manageCPForm.phone.focus();
		return false;
	}
	else if(trim(document.manageCPForm.jobtitle.value)=="")
	{
		alert("Please enter Jobtitle");
		document.manageCPForm.jobtitle.focus();
		return false;
	}
	else if(trim(document.manageCPForm.company.value)=="")
	{
		alert("Please enter company Name.");
		document.manageCPForm.company.focus();
		return false;
	}
	
	else if(trim(document.manageCPForm.address.value)=="")
	{
		alert("Please enter your address");
		document.manageCPForm.address.focus();
		return false;
	}
	else if(trim(document.manageCPForm.city.value)=="")
	{
		alert("Please enter your city");
		document.manageCPForm.city.focus();
		return false;
	}
	else if(trim(document.manageCPForm.postalcode.value)=="")
	{
		alert("Please enter your postalcode");
		document.manageCPForm.postalcode.focus();
		return false;
	} else if(!(onlyNum(trim(document.manageCPForm.postalcode.value)))) {
        alert("Please enter valid postalcode");
        document.manageCPForm.postalcode.focus();
        return false;
    }
	else if(trim(document.manageCPForm.country.value)=="")
	{
		alert("Please enter your country");
		document.manageCPForm.country.focus();
		return false;
	}
	return true; // Return true if all validations pass
}

function fnValidationsolutionform() {
	if(trim(document.solutionform.bde.value)=="")
	{
		alert("Please Enter BD email id");
		document.solutionform.bde.focus();
		return false;
	} else if(!(validateEmail(trim(document.solutionform.bde.value))))
	{
		alert("Please Enter BD email id");
		document.solutionform.bde.focus();
		return false;
	} else if(!(IsOfficialEmailCheck(trim(document.solutionform.bde.value))))
	{
		alert("Please enter your BD official e-mail address");
		document.solutionform.bde.focus();
		return false;
	} else if(trim(document.solutionform.name.value)=="")
	{
		alert("Please enter Client Name");
		document.solutionform.name.focus();
		return false;
	} else if(!(onlyChar(trim(document.solutionform.name.value))))
	{
		alert("Client Name should be only alphabet");
		document.solutionform.name.focus();
		return false;
	} else if(trim(document.solutionform.email.value)=="")
	{
		alert("Please enter Client email id");
		document.solutionform.email.focus();
		return false;
	} else if(!(validateEmail(trim(document.solutionform.email.value))))
	{
		alert("Please Enter valid client email id");
		document.solutionform.email.focus();
		return false;
	} else if(trim(document.solutionform.phone.value)=="")
	{
		alert("Please enter Client phone number");
		document.solutionform.phone.focus();
		return false;
	} else if(!(validatePhone(trim(document.solutionform.phone.value))))
	{
		alert("Please enter 8 to 15 digit phone number");
		document.solutionform.phone.focus();
		return false;
	} else if(trim(document.solutionform.website.value)=="")
	{
		alert("Please enter Client Website Name");
		document.solutionform.website.focus();
		return false;
	}
	return true;
}


function ebookForm()
{
	var response = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	//var response = grecaptcha.getResponse();
	if(trim(document.contactUs.fname.value)=="")
	{
		alert("Please enter your name");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.contactUs.fname.value))))
	{
		alert("Name should be only alphabet");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	
	else if(trim(document.contactUs.email.value)=="")
	{
		alert("Please enter your email");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.contactUs.email.value))))
	{
		alert("Please enter valid email id");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.contactUs.email.value))))
	{
		alert("Please enter your business email address");
		document.contactUs.email.focus();
		return false;
	}
	//else if(trim(document.contactUs.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.contactUs.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	
	else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.contactUs.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.contactUs.uphone.focus();
		
		return false;
	}
	else if(response.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }
	
	
}

function landingpageForm()
{
	var response = grecaptcha.getResponse();
	var uphone = document.getElementById("uphone").value;
	uphone = uphone.trim();	
	//var response = grecaptcha.getResponse();
	if(trim(document.contactUs.fname.value)=="")
	{
		alert("Please enter your name");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	else if(!(onlyChar(trim(document.contactUs.fname.value))))
	{
		alert("Name should be only alphabet");
		//document.contactUs.fname.style="border:1px solid red";
		document.contactUs.fname.focus();
		return false;
	}	
	
	else if(trim(document.contactUs.email.value)=="")
	{
		alert("Please enter your email");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(validateEmail(trim(document.contactUs.email.value))))
	{
		alert("Please enter valid email id");
		document.contactUs.email.focus();
		return false;
	}
	else if(!(IsOfficialEmailCheck(trim(document.contactUs.email.value))))
	{
		alert("Please enter your business email address");
		document.contactUs.email.focus();
		return false;
	}
	//else if(trim(document.contactUs.phone.value)=="")
	//{
		//alert("Please enter phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	//else if(!(validatePhone(trim(document.contactUs.phone.value))))
	//{
		//alert("Please enter 8 to 15 digit phone number");
		//document.contactUs.phone.focus();
		//return false;
	//}
	
	/*else if(uphone == "")
	{
		alert("Please enter your phone number!");
		document.contactUs.uphone.focus();
		return false;
	}
	else if(validatePhone(uphone) == false)
	{
		alert("Please enter 8 to 15 digit phone number.");
		document.contactUs.uphone.focus();
		
		return false;
	}*/
	else if(response.length == "") 
      { 
        
        alert("please verify captcha!"); 
        return false;
      }	
	
}

