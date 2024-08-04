const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function caesar(text, shift, direction){
    let caesar_text = "";
    shift = Number(shift);
    if (direction == "decode"){
        shift *= -1;
    }
    for (const letter of text){
        if (alphabet.includes(letter)){
            const position = alphabet.indexOf(letter);
            const shifted_position = position + shift;
            const alphabet_length = alphabet.length;
            const new_position = mod(shifted_position, alphabet_length);
            caesar_text += alphabet[new_position];
            console.log(position + shift);
        }
        else{
            caesar_text += letter
        }
    }
    let output = document.getElementById("output");
    output.value = caesar_text;
}

function mod(a, b){
    return ((a % b) + b) % b;
}


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