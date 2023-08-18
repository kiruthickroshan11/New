$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/sample.feature");
formatter.feature({
  "name": "To validate the Login Functionality of FaceBook Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the Chrome Browser and Maximize the Window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_Chrome_Browser_and_Maximize_the_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate Login with Valid UserName and Invalid Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_launch_the_url_of_Facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the Valid UserName in Email filed",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_pass_the_Valid_UserName_in_Email_filed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the Invalid Password in Password Field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_Pass_the_Invalid_Password_in_Password_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click The Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_Click_The_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Check whether navigate to the homepage or not",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_Check_whether_navigate_to_the_homepage_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.to_Close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the  Positive and Negative Condiations of FaceBook Applications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.step({
  "name": "To Pass the User Name in \"\u003cEmail\u003e\" Email field",
  "keyword": "And "
});
formatter.step({
  "name": "To Pass the Password in \"\u003cpassword\u003e\"Password field",
  "keyword": "And "
});
formatter.step({
  "name": "To Click The Login  button",
  "keyword": "And "
});
formatter.step({
  "name": "To close the  entire Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "password"
      ]
    },
    {
      "cells": [
        "kiruthick@gmail.com",
        "krish"
      ]
    },
    {
      "cells": [
        "krish@gmail.com",
        "123456"
      ]
    },
    {
      "cells": [
        "jasmine11@gmail.com",
        "kiruthick"
      ]
    },
    {
      "cells": [
        "rosh@gmail.com",
        "ncr nickname"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the Chrome Browser and Maximize the Window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_Chrome_Browser_and_Maximize_the_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the  Positive and Negative Condiations of FaceBook Applications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_launch_the_url_of_Facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the User Name in \"kiruthick@gmail.com\" Email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_User_Name_in_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the Password in \"krish\"Password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_Password_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click The Login  button",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Click_The_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the  entire Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_close_the_entire_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the Chrome Browser and Maximize the Window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_Chrome_Browser_and_Maximize_the_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the  Positive and Negative Condiations of FaceBook Applications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_launch_the_url_of_Facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the User Name in \"krish@gmail.com\" Email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_User_Name_in_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the Password in \"123456\"Password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_Password_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click The Login  button",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Click_The_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the  entire Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_close_the_entire_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the Chrome Browser and Maximize the Window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_Chrome_Browser_and_Maximize_the_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the  Positive and Negative Condiations of FaceBook Applications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_launch_the_url_of_Facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the User Name in \"jasmine11@gmail.com\" Email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_User_Name_in_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the Password in \"kiruthick\"Password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_Password_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click The Login  button",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Click_The_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the  entire Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_close_the_entire_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the Chrome Browser and Maximize the Window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.to_launch_the_Chrome_Browser_and_Maximize_the_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the  Positive and Negative Condiations of FaceBook Applications",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To launch  the url of Facebook Application",
  "keyword": "When "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_launch_the_url_of_Facebook_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the User Name in \"rosh@gmail.com\" Email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_User_Name_in_Email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Pass the Password in \"ncr nickname\"Password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Pass_the_Password_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click The Login  button",
  "keyword": "And "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_Click_The_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the  entire Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbloginpostiveNegative.to_close_the_entire_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/sample1.feature");
formatter.feature({
  "name": "To Validate the account creation of fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To  create new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser and maximise the  window",
  "keyword": "Given "
});
formatter.match({
  "location": "fbcreatenewacnt.to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the url  of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "fbcreatenewacnt.to_launch_the_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "fbcreatenewacnt.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass firstname in firstname text box",
  "keyword": "And "
});
formatter.match({
  "location": "fbcreatenewacnt.to_pass_firstname_in_firstname_text_box()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.199)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KIRUTHICK\u0027, ip: \u0027192.168.43.21\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\KIRUTH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51499}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ce240cc11dc15006067a1cbea1178da6\n*** Element info: {Using\u003dname, value\u003dfirstname}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.Baseclass.passtext(Baseclass.java:53)\r\n\tat org.stepdefintion.fbcreatenewacnt.to_pass_firstname_in_firstname_text_box(fbcreatenewacnt.java:31)\r\n\tat ✽.To pass firstname in firstname text box(src/test/resources/sample1.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To pass secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "fbcreatenewacnt.to_pass_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass mobileno or email  in email text box",
  "keyword": "And "
});
formatter.match({
  "location": "fbcreatenewacnt.to_pass_mobileno_or_email_in_email_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "fbcreatenewacnt.to_create_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To Close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "fbcreatenewacnt.to_Close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
});