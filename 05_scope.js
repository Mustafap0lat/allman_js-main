// 3 typer av scope - global, functional, block
// 3 typer av keywords - var, let, const

// Globalt scope
var varName = "globaltVarNamn";
let letName = "globaltLetNamn";

// Function scope
function testScope() {

    var varName = "funktionVarNamn";
    let letName = "funktionLetNamn";

    //console.log("var from within funktion", varName);
    //console.log("let from within funktion", letName);

}

testScope()
console.log("var from Global", varName)
console.log("let from Global", letName)

// Blockscope - let/const använder, var ignorerar
if (true) {

    var varName = "blockVarNamn";
    let letName = "blockLetNamn";

}

console.log("var from block", varName)
console.log("let from block", letName)

const constName = "constValue"
var varName = "återinitalizerad"
//let letName = "återinitalizerad" kan ej återdeklareras
letName = "återassignad" // tillåtet

//const constName = "återinitializerad" // ej tillåtet
//constName = "återassignad" // ej tillåtet

console.log(varName, letName, constName)

const list = [];
list[0] = 7
console.log(list)

const listToBeFrozen = [5];
Object.freeze(listToBeFrozen)
const copiedList = listToBeFrozen.map(x => x * 2);
console.log(copiedList)


withoutVarKeyword = 50;
var withVarKeyword = 60
console.log(withoutVarKeyword)

console.log("from global object", globalThis.withoutVarKeyword)
console.log(globalThis.withVarKeyword)

delete withVarKeyword;
delete withoutVarKeyword;

//console.log(withVarKeyword)
//console.log(withoutVarKeyword)