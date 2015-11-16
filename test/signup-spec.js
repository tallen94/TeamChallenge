describe('Submit button', function() {

	beforeEach(function() {
		browser.get('http://localhost:8000');
	})

	it('should be disabled', function() {
		var button = element(by.css('#submit'));
		expect(button.getAttribute('disabled')).toEqual('true');
	})
})