// Verkefni 3 (5%)  DevTools og debugging 

/*  lesefni:
 *		Error Handling & Debugging, kafli 10 JavaScript & jQuery eftir Jon Duckett 
 *		ChromeDevToolsTutorial: https://www.codeschool.com/courses/discover-devtools 
 *		ChromeDevTools: https://developers.google.com/web/tools/chrome-devtools/?hl=en
 *		Bugs and Error handling, kafli 8 http://eloquentjavascript.net/08_error.html 
 *    	Jshint.com (debug tól) http://jshint.com/ 
*/

  
// 1. 2% 
// Discover DevTools, kláraðu Level 1- 4
// https://www.codeschool.com/courses/discover-devtools


// 2. - Scope
// Hvað prentast í console og afhverju
(function() {
   var a = b = 5;
})();

console.log(b);


// 3. - Hoisting
// Hver er niðurstaðan og afhverju
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// 4. - this
// Hver er niðurstaðan, útskýrðu svar
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


// 5.  
// Notaðu hér fyrir neðan "use strict" á viðeigandi stað og jshint þér til hjálpar
// a) hver er villan, b) afhverju er villa, c) lagaðu hana
function canYouSpotTheProblem() {
  for (counter = 0; counter < 10; counter++)
    console.log("Happy happy");
}
canYouSpotTheProblem();


// 6. 
//a) hver er villan, b) afhverju er villa, c) lagaðu hana
function Person(name) { this.name = name; }
var ferdinand = Person("Ferdinand"); 
console.log(name); 
console.log(ferdinand.name); 


// 7. 
// Convert a whole number to a string in any base (decimal, binary, and so on) 
// a) Reyndu að greina kóðann t.d. með að setja console.log() í kóðann til að fá frekari upplýsingar
// b) Notaðu debugger í chromeDeveloper eða firebug. (breakpoint á ákveðnum línum til að geta skoðað gildi)

function numberToString(n, base) {
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10)); // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…


// 8. 
// Útskýrðu notkun á isNaN í kóðanum, afhverju að gera þetta?
function promptNumber(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?")); 


// 9. 
//  Útskýrðu hvernig try og catch virkar hér í kóðanum, 
//  hvað gerir throw keyword og hvað gerist þegar það verður error (útskýra kóðaflæði)

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}


/*
Skil á verkefni:
Skilaðu tengil á Verkefni 3 sem er hýst á Github eða Bitbucket
	
Námsmat:	
liður 1 gildir 2%
Liðir 2-9 gilda samtals 3%

Gefið er full fyrir rétt og fullnægjandi svar og skýringu þegar það á við, hálft ef svar eða skýring er ábótavant.

*/