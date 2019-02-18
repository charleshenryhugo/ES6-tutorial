modules.exports = Phrase;

// extend String.prototype.reverse()
String.prototype.reverse = function() { 
    Array.from(this).reverse().join(''); 
};

// define Phrase Object
function Phrase(content) {
    this.content = content;
    
    this.processedContent = function() {
        return this.content.toLowerCase();
    }

    // returns true if content is palindrome, false otherwise
    this.palindrome = function() {
        return this.processedContent().reverse() === this.processedContent();
    }
}