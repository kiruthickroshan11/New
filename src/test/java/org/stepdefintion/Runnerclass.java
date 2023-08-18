package org.stepdefintion;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",glue = "org.stepdefintion",monochrome = true,plugin = {"html:Report","junit:Report\\JUNITreport.xml","json:Report\\jsonreport"})
public class Runnerclass {

}
