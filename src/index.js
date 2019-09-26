const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const Table = Object.entries(MORSE_TABLE);

function decode(expr) {
   // expr = expr.replace(/\*/g, 's');
   // expr = expr.replace(/ssssssssss/g, ' ');

    for (let i = 0; i < Table.length; i++) {
        Table[i][0] = Table[i][0].replace(/\./g, 10);
        Table[i][0] = Table[i][0].replace(/-/g, 11);
        temp = Table[i][0].length;
        for (let j = 0; j < 10 - temp; j++) {
            Table[i][0] = '0' + Table[i][0];
        }
    }
   // console.log(Table[3][0]);
    tempArray=new Array('**********', ' ');
    Table.push(tempArray);
    exprMatched=expr.match(/.{10}/g);
    for(let i=0;i<exprMatched.length;i++){
      for(let j=0; j<Table.length;j++){
        if(exprMatched[i]==Table[j][0]){
          exprMatched[i]=Table[j][1];
        }
      }
    }
    return exprMatched.join('');
}

module.exports = {
    decode
}
