Feature: To validate the Login Functionality of FaceBook Application
Background:
Given To launch the Chrome Browser and Maximize the Window

Scenario: To Validate Login with Valid UserName and Invalid Password
When  To launch  the url of Facebook Application
And To pass the Valid UserName in Email filed
And To Pass the Invalid Password in Password Field
And To Click The Login button
And To Check whether navigate to the homepage or not
Then To Close the Browser


Scenario Outline: To validate the  Positive and Negative Condiations of FaceBook Applications
When  To launch  the url of Facebook Application
And  To Pass the User Name in "<Email>" Email field 
And  To Pass the Password in "<password>"Password field
And To Click The Login  button
Then To close the  entire Browser

Examples:

|Email               | password   |
|kiruthick@gmail.com |krish       |
|krish@gmail.com     |123456      |
|jasmine11@gmail.com |kiruthick   |
|rosh@gmail.com      |ncr nickname|