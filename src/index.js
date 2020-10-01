module.exports = function toReadable (number) {
    let transformedNum = number.toString().split('');

    const singleMap = {
        0: ['', '', ''],
        1: ['one', 'ten', 'one hundred'],
        2: ['two', 'twenty', 'two hundred'],
        3: ['three', 'thirty', 'three hundred'],
        4: ['four', 'forty', 'four hundred'],
        5: ['five', 'fifty', 'five hundred'],
        6: ['six', 'sixty', 'six hundred'],
        7: ['seven', 'seventy', 'seven hundred'],
        8: ['eight', 'eighty', 'eight hundred'],
        9: ['nine', 'ninety', 'nine hundred']
    };

    const teensMap = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };   

    let readableNum = transformedNum.map((array,index) => singleMap[array][transformedNum.length - 1 - index]);
   

    if (transformedNum[transformedNum.length - 2] === '1') {
        readableNum[transformedNum.length - 2] = teensMap[transformedNum[transformedNum.length - 2] + transformedNum[transformedNum.length -1]];
        readableNum.pop();
    }

    if (number !==0) {
        return readableNum.filter(array => array !== '').join(' ');
    }
    else return 'zero';
}
