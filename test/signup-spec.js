// Trevor Allen, Chan Im, John Akers, Jooneil Ahn INFO 343 D
// 11-17-15
// Team Challenge
// Tests for team challenge web page.

var email = element(by.model('signup.email'));
var fName = element(by.model('signup.firstName'));
var lName = element(by.model('signup.lastName'));
var bday = element(by.model('signup.birthday'));
var pswd = element(by.model('signup.password'));
var confirm = element(by.model('signup.confirm'));


describe('Email', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	// Invalid if email = 'test'
	it('should be invalid', function() {
		email.sendKeys('test');
		expect(hasClass(email, 'ng-invalid')).toBe(true);
	})

	// Valid if email is a valid email 'test@gmail.com'
	it('should be valid', function() {
		email.sendKeys('test@gmail.com');
		expect(hasClass(email, 'ng-valid')).toBe(true);
	})
})

describe('First Name', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	// Invalid if nothing is entered
	it('should be invalid', function() {
		expect(hasClass(fName, 'ng-invalid')).toBe(true);
	})

	// Valid if something is entered
	it('should be valid', function() {
		fName.sendKeys('Bob');
		expect(hasClass(fName, 'ng-valid')).toBe(true);
	})

})

describe('Last Name', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})


	it('should be invalid', function() {
		expect(hasClass(lName, 'ng-invalid')).toBe(true);
	})

	it('should be valid', function() {
		lName.sendKeys('Hope');
		expect(hasClass(lName, 'ng-valid')).toBe(true);
	})
})

describe('Birthday', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	it('should be invalid', function() {
		bday.sendKeys('asddf');
		expect(hasClass(bday, 'ng-invalid')).toBe(true);
	})

	it('should be valid', function() {
		bday.sendKeys('01010001');
		expect(hasClass(bday, 'ng-valid')).toBe(true);
	})
})

describe('Password', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	it('should be invalid', function() {
		pswd.sendKeys('password');
		expect(hasClass(pswd, 'ng-invalid')).toBe(true);
	})

	it('should be valid', function() {
		pswd.sendKeys('Password1');
		expect(hasClass(pswd, 'ng-valid')).toBe(true);
	})
})

describe('Confirm Password', function() {

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	it('should be invalid', function() {
		pswd.sendKeys('password');
		confirm.sendKeys('password');
		expect(hasClass(confirm, 'ng-invalid')).toBe(true);
	})

	it('should be valid', function() {
		pswd.sendKeys('Password1');
		confirm.sendKeys('Password1');
		expect(hasClass(confirm, 'ng-valid')).toBe(true);
	})
})

describe('Submit form', function() {

	var button = element(by.css('#submit'));

	beforeEach(function() {
		browser.get('http://127.0.0.1:8080/');
	})

	it('should be invalid if the form is invalid', function() {
		
		expect(button.isEnabled()).toBe(false);
	})

	it('should be valid when the user fills all the inputs out correctly', function() {
		email.sendKeys("test@gmail.com");
		fName.sendKeys('Bob');
		lName.sendKeys('Hope');
		bday.sendKeys('01010001');
		pswd.sendKeys('Password1');
		confirm.sendKeys('Password1');
		expect(button.isEnabled()).toBe(true);
	})
})

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};