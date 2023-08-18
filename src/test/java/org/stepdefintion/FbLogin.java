package org.stepdefintion;

import org.base.Baseclass;
import org.openqa.selenium.WebElement;
import org.pojo.fbloginpojo;

import com.fasterxml.jackson.databind.deser.Deserializers.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbLogin extends Baseclass {

	@Given("To launch the Chrome Browser and Maximize the Window")
	public void to_launch_the_Chrome_Browser_and_Maximize_the_Window() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch the URL of Facebook application")
	public void to_launch_the_URL_of_Facebook_application() {
		lanuchUrl("https://www.facebook.com/");
	}

	@When("To pass the Valid UserName in Email filed")
	public void to_pass_the_Valid_UserName_in_Email_filed() {
		fbloginpojo f = new fbloginpojo();
		passtext("kiruthick@gmail.com", f.getEmail());
	}

	@When("To Pass the Invalid Password in Password Field")
	public void to_Pass_the_Invalid_Password_in_Password_Field() {
		fbloginpojo f = new fbloginpojo();
		passtext("password", f.getPassword());
	}

	@When("To Click The Login button")
	public void to_Click_The_Login_button() {
		fbloginpojo f = new fbloginpojo();
		clickBtn(f.getLoginbtn());
	}

	@When("To Check whether navigate to the homepage or not")
	public void to_Check_whether_navigate_to_the_homepage_or_not() {
		System.out.println("check Wheather the Browser is navigate to home Page ");
	}

	@Then("To Close the Browser")
	public void to_Close_the_Browser() {
		closeEntireBrowser();

	}

}
