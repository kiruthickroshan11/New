package org.stepdefintion;

import org.base.Baseclass;
import org.pojo.fbcreatenewaccount;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class fbcreatenewacnt extends Baseclass{
@Given("To launch the browser and maximise the  window")
public void to_launch_the_browser_and_maximise_the_window() {
   launchBrowser();
   windowMaximize();
}

@When("To launch the url  of fb application")
public void to_launch_the_url_of_fb_application() {
  lanuchUrl("https://www.facebook.com/");
}

@When("To click the create new account button")
public void to_click_the_create_new_account_button() {
     fbcreatenewaccount f=new fbcreatenewaccount();
    clickBtn(f.getButton());
}

@When("To pass firstname in firstname text box")
public void to_pass_firstname_in_firstname_text_box() {
	fbcreatenewaccount f=new fbcreatenewaccount();
	passtext("kiruthick", f.getFirstname());
}

@When("To pass secondname in secondname text box")
public void to_pass_secondname_in_secondname_text_box() {
	fbcreatenewaccount f=new fbcreatenewaccount(); 
	passtext("ayeshu", f.getLastname());
}

@When("To pass mobileno or email  in email text box")
public void to_pass_mobileno_or_email_in_email_text_box() {
	fbcreatenewaccount f=new fbcreatenewaccount(); 
	passtext("ka@gmail.com", f.getEmail());
}

@When("To create new password using new password text box")
public void to_create_new_password_using_new_password_text_box() {
	fbcreatenewaccount f=new fbcreatenewaccount();
	passtext("passwrd", f.getPasswrd());
}

@Then("To Close the chrome browser")
public void to_Close_the_chrome_browser() {
   closeEntireBrowser();
}



}
