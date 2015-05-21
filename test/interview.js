var expect = require('expect.js');

var fibonacci = function(n) {
    // implement this.
}
 
describe("Implementation of fibonacci", function() {
    it("basic fibonacci tests.", function() {
        expect(fibonacci(1)).to.eql(1);
        expect(fibonacci(2)).to.eql(1);
        expect(fibonacci(3)).to.eql(2);
        expect(fibonacci(4)).to.eql(3);
        expect(fibonacci(5)).to.eql(5);
        expect(fibonacci(6)).to.eql(8);
        expect(fibonacci(7)).to.eql(13);
    });
});
