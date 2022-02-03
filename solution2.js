// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

const list = (object) => {
    let string = '';
    if (object.length === 1) {
        return object[0].name;
    } else if (object.length === 0) {
        return '';
    }

    for (let i = 0; i < object.length - 1; i++) {
        if ((object.length - 2) !== i) {
            string += `${object[i].name}, `
        } else {
            string += `${object[i].name} `
        }
    }
    return string += `& ${object[object.length - 1].name}`;
}











console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''