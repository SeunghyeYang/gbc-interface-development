const today = new Date();
const birthDate = new Date(1986, 11, 22); 

let age = today.getFullYear()
          - birthDate.getFullYear()
          + 1;

document.writeln(age);