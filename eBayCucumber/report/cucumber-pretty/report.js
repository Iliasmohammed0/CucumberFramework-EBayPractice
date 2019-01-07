$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Q:/eBayBDD/eBayCucumber/src/test/java/feature/Register.feature");
formatter.feature({
  "line": 3,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Register Feature Test",
  "description": "",
  "id": "register-feature;register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user in the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "put last name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "provide email",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "give password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click create account button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.user_in_the_register_page()"
});
formatter.result({
  "duration": 6906410550,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 1034130126,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_name()"
});
formatter.result({
  "duration": 142153229,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.provide_email()"
});
formatter.result({
  "duration": 241737507,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.give_password()"
});
formatter.result({
  "duration": 160204634,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_create_account_button()"
});
formatter.result({
  "duration": 31070315457,
  "status": "passed"
});
});