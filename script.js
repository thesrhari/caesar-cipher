const lower_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const capital_alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// Encoding and decoding happens here
function caesar(text, shift, direction){
    let caesar_text = "";
    shift = Number(shift);

    if (direction == "decode"){
        shift *= -1;
    }
    for (const letter of text){
        if ((lower_alphabet.includes(letter)) || capital_alphabet.includes(letter)){

            if (letter === letter.toUpperCase()){
                const position = capital_alphabet.indexOf(letter);
                const shifted_position = position + shift;
                const alphabet_length = capital_alphabet.length;

                // Calling mod() func
                const new_position = mod(shifted_position, alphabet_length);

                caesar_text += capital_alphabet[new_position];
            }
            else{
                const position = lower_alphabet.indexOf(letter);
                const shifted_position = position + shift;
                const alphabet_length = lower_alphabet.length;

                // Calling mod() func
                const new_position = mod(shifted_position, alphabet_length);

                caesar_text += lower_alphabet[new_position];
            }
        }
        else{
            caesar_text += letter
        }
    }
    let output = document.getElementById("output");
    output.value = caesar_text;
}

// Returns remainder (Also works with negative numbers)
function mod(a, b){
    return ((a % b) + b) % b;
}

// Collects input and calls caesar() function
function getValue(){
    let plain_text = document.getElementById("plain_text").value;
    let shift_amount = document.getElementById("shift_amount").value;
    let direction_type;

    if (document.getElementById("encode").checked){
        direction_type = document.getElementById("encode").value;
    }
    else if (document.getElementById("decode").checked){
        direction_type = document.getElementById("decode").value;
    }

    if ((plain_text == "") || (shift_amount == "") || (direction_type == undefined)){
        alert("Please enter all fields!");
    }
    else{
        caesar(plain_text, shift_amount, direction_type);
    }
}


// Checking and clearing output field if input field is empty
function checkIfEmpty() {
    const textarea = document.getElementById('plain_text');
    if (textarea.value == "") {
        const output_field = document.getElementById("output");
        output_field.value = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('plain_text');
    textarea.addEventListener('input', checkIfEmpty);
});