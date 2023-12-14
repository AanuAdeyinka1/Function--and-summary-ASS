// Build a simple function that displays the following.
// console.log('THis is a text inside a function block'

function funcText(text){
    
    return text = "function block";

}console.log(`This a text inside a ${funcText()}`)

// method2
function showMessage( text = "This is a text inside a function block") {
  console.log(text);
}

showMessage();