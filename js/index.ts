interface Person {
    firstName: string;
    lastName: string;
}



// type casting buttons with TypeScript
let CalcBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Manipulate");
// type casting input with TypeScript
let TekstFelt: HTMLInputElement = <HTMLInputElement>document.getElementById("txtbox");
// type casting list with TypeScript
// Adding function to buttons
CalcBtn.addEventListener("click", Manipulate);



let output: HTMLSpanElement = <HTMLSpanElement>document.getElementById("output");

let input_1: HTMLInputElement = <HTMLInputElement>document.getElementById("txtbox");


let DropDownList: HTMLSelectElement = <HTMLSelectElement>document.getElementById("dropdownlist");

function Manipulate() {
    // reading value AFTER pressing button
    let inputValue: string = input_1.value;
    // converting from string to number
    // calculating result
    switch (DropDownList.value) {
        case "Upper Case":

            var x = inputValue.toUpperCase();
            output.innerHTML = x.toString();

            break;
        case "Lower Case":

            var y = inputValue.toLowerCase();
            output.innerHTML = y.toString();

            break;
        case "String Length":

            var z = inputValue.length;
            output.innerHTML = z.toString();

            break;

        case "Count Words":

            var t = inputValue.split(" ").length;
            output.innerHTML = t.toString();

            break;

        default:
            break;
    }
    // converting back to string
}
