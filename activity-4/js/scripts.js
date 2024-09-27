/* 
    Javascript for the product reviews page
*/

// Variables and logic for producing the student custom greeting.
var user       = "Ivanka";
var salutation = "Hello, ";
var greeting   = salutation + user + "!  Here are the latest reviews for the JBL - Tune 235NC.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Variables and logic for calculating the price & student discount price.
var price           = 69.99;
var studentDiscount = .10;
var studentPrice    = price - (price * studentDiscount);
var priceEl         = document.getElementById("price");
var studentPriceEl  = document.getElementById("student-price");

priceEl.textContent        = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);