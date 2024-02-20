const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log(password);
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(password);
    password += number[Math.floor(Math.random() * number.length)];
    console.log(password);
    password += symbol[Math.floor(Math.random() * symbol.length)];
    console.log(password);
    
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
        console.log(password)
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}