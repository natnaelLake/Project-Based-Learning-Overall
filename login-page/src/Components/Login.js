import React, { Component } from 'react'
import "./LoginCss.css";

class Login extends Component {
	validate2 = () =>
	{
		var EmailVAlidate = document.mainForm.email.value;
		var atposition = EmailVAlidate.indexOf("@");
		var dotposition = EmailVAlidate.lastIndexOf(".");
		var password = document.mainForm.pwd.value;
		if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= EmailVAlidate.length) {
			alert("Please enter a valid e-mail address");
			return false;
		}
		else if (password.length < 6 && password.length > 32) {  
			alert("Password must be at least 6 and at most 32 characters long.");  
			return false;  
		}

	}
	validate = () => {
		var EmailVAlidate = document.mainForm.email.value;
		var atposition = EmailVAlidate.indexOf("@");
		var dotposition = EmailVAlidate.lastIndexOf(".");
		var password = document.mainForm.pwd.value;
		var firstpassword = document.mainForm.pwdSign.value;
		var secondpassword = document.mainForm.pwdSign2.value;
		var name = document.mainForm.name.value;
		var lname = document.mainForm.last_name.value;
		if (name === null || name === ""){  
			alert("Name can't be blank");  
		}  
		else if (lname === null || lname === ""){  
			alert("Name can't be blank");    
		}  
		else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= EmailVAlidate.length) {
			alert("Please enter a valid e-mail address");
		}
		else if (password.length < 6) {  
			alert("Password must be at least 6 characters long.");   
		}	
		else if (firstpassword === secondpassword) {
			return true;
		}
	    else if(firstpassword !== secondpassword) {
			alert("password must be same!");
			
		}
		else {
			return true;
		}
		
	}
  render() {
	  return (
		<div class="login-wrap">
			<div div class="login-html">
				<h2 class="about">Voting System</h2>
    		 	<h3 class="quote">Welcome To Our World!</h3>
					<input id="tab-1" type="radio" name="tab" class="sign-in" checked></input>
					<label for="tab-1"  class = "tab-tab">Login</label>
					<input id="tab-2" type="radio" name="tab" class="sign-up"></input>
					<label for="tab-2" class="tab">Register</label>
				<div class="login-form">
	 				<div class="sign-in-htm">
         				<form id="form" name = "mainForm" action="https://www.cbeib.com.et/ARCIB-4/servlet/BrowserServlet" method="post">
            				<div class="group">
                  				<label id="email-label">
          							<p>USERNAME</p>
          							<input type="email" name="email" id="email" class="form-control" placeholder="Email"  required></input>
        						</label>
      				</div>
      			<div class="group">
        					<label id="email-label" for="email">
          						<p>Password</p>
					   			<input type="password" name="pwd" id="pass" class="form-control" placeholder="Password" minLength={6} maxLength={32} required></input>
        					</label>
				</div>
				<div class="group">
			 			<input id="check" type="checkbox" class="check"></input>
						<label for="check"><span class="icon"></span> Keep me Signed in</label>
     			</div>
				     	<input type="submit" value="Login" id="submit" onClick={this.validate2}/>
			<div class="hr"></div>
			<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
			</div>
      				
	     </form>
	 </div>
<div class="sign-up-htm">
    <form name = "mainForm" id="form" action="https://www.cbeib.com.et/ARCIB-4/servlet/BrowserServlet" method="post" onSubmit={this.validate}>
      <div class="group">
        <label id="name-label">
          	<p>NAME</p>
          	<input type="text" name="name" id="first_name" class="form-control" placeholder="Name" required></input>
        </label>
      </div>
      <div class="group">
        <label id="name-label">
          <p>Last NAME</p>
          <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Name" required></input>
        </label>
      </div>
      <div class="group">
        <label id="email-label">
          <p>Email</p>
          <input type="email" name="email" id="email" class="form-control" placeholder="Email" required></input>
        </label>
      </div>
      <div class="group">
        <label id="email-label" for="email">
          <p>Password</p>
          <input type="password" name="pwdSign" id="pass" class="form-control" placeholder="Password" minLength={6} maxLength={32} required></input>
        </label>
      </div>
      <div class="group">
        <label id="email-label">
          <p>Confirm password</p>
          <input type="password" name="pwdSign2" id="confirm_pass" class="form-control" placeholder="confirm Password" minLength={6} maxLength={32} required></input>
        </label>
      </div>
      <input type="submit" value="Register" id="submit"/>
		<div class="hr"></div>
		<div class="foot-lnk">
			<a><label for="tab-1">Already Member?</label></a>
		</div>
	</form>
				  </div>
				  </div>
				  </div>
			  </div>
    );
  }
}

export default Login
