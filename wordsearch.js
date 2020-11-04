const wordSearch = (letters, word) => { 
    if (letters === []){
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (let i = 0; i < letters.length; i++ ) {
        let verticalJoin = '';
        for (let j = 0; j < letters[i].length; j++) {
            verticalJoin += letters[j][i];
        }
        // let horzontalJoin2 = verticalJoin.map(ls => ls.join(''))
        if (verticalJoin.includes(word)) {
            return true
        }
    }
    return false;
}



module.exports = wordSearch