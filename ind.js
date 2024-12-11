const display=document.getElementById("display")

function appendtodisplay(input){
    display.value +=input;

}
function back(){
    const display = document.getElementById('display'); // Get the display element
    display.value = display.value.slice(0, -1);
}
function cleardisplay(){
    display.value ="";

}
function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        // Replace √ with Math.sqrt and % with /100
        expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');
        expression = expression.replace(/%/g, '/100');
        display.value = eval(expression); // Evaluate the expression
    } catch (error) {
        display.value = 'Error';
    }
}