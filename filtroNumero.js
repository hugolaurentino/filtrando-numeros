const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

const novoArray = []
for (const maio of original) {
    if (maio >= 10 && maio <= 20 || maio > 100) {
        novoArray.push(maio);
    }
}
console.log(novoArray);