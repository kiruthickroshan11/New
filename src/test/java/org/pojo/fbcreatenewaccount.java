package org.pojo;

import org.base.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class fbcreatenewaccount extends Baseclass {
	public fbcreatenewaccount() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//a[text()='Create new account']")
	private WebElement button;

	@FindBy(id = "u_2_b_Ie")
	private WebElement firstname;
	@FindBy(name = "lastname")
	private WebElement lastname;
	@FindBy(name = "reg_email__")
	private WebElement email;
	@FindBy(name = "reg_passwd__")
	private WebElement passwrd;

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPasswrd() {
		return passwrd;
	}

	public WebElement getButton() {
		return button;
	}

}
