package org.stepdefintion;

import org.base.Baseclass;
import org.pojo.fbloginpojo;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbloginpostiveNegative extends Baseclass {

	@When("To launch  the url of Facebook Application")
	public void to_launch_the_url_of_Facebook_Application() {
		fbloginpojo f = new fbloginpojo();
		lanuchUrl("https://www.facebook.com/");
	}

	@When("To Pass the User Name in {string} Email field")
	public void to_Pass_the_User_Name_in_Email_field(String string) {
		fbloginpojo f = new fbloginpojo();

		passtext(string, f.getEmail());
	}

	@When("To Pass the Password in {string}Password field")
	public void to_Pass_the_Password_in_Password_field(String str) {
		fbloginpojo f = new fbloginpojo();
		passtext(str, f.getPassword());
	}

	@When("To Click The Login  button")
	public void to_Click_The_Login_button() {
		fbloginpojo f = new fbloginpojo();
		clickBtn(f.getLoginbtn());
	}

	@Then("To close the  entire Browser")
	public void to_close_the_entire_Browser() {
		closeEntireBrowser();
		System.out.println("close");
	}

}
