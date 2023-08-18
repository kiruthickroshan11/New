package org.pojo;

import org.base.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class fbloginpojo extends Baseclass {
public WebElement getEmail() {
		return email;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginbtn() {
		return loginbtn;
	}

public fbloginpojo(){
	PageFactory.initElements(driver,this);
	
}
@FindBy(id="email")
private WebElement email;

@FindBy(xpath="//input[@class='inputtext _55r1 _6luy _9npi']")
private WebElement password;

@FindBy(name ="login")
private WebElement loginbtn;
















}
