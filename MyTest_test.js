
Feature('MyTest');

Scenario('test something', (I) => {
   // I.amOnPage('https://github.com');
  //  I.see('GitHub');
    I.amOnPage('https://www.toolsqa.com/automation-practice-form/');
    I.wait(15);
    I.attachFile('input#photo', 'data/bmp.bmp');
    I.wait(5);
    I.scrollTo('input[name="firstname"]');
    I.fillField('input[name="firstname"]', 'Alok');
    I.wait(5);
    I.fillField('input#lastname', 'Mishra');

    I.wait(5);
    I.checkOption('Female');
    I.checkOption('input[value="5"]');
    I.fillField('input#datepicker', '28/08/2019');
    I.checkOption("Automation Tester");
    I.wait(10);

    I.wait(10);
    I.selectOption("South America");
    I.wait(10);
    I.selectOption('WebElement Commands')
    I.wait(10);
    I.scrollTo('input[name="firstname"]'); 



});
Scenario('test something', (I) => {

    I.amOnPage('https://www.toolsqa.com/automation-practice-form/');


});
