class RomanNumerals{
    static romanDigits = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    } 
    static tens = {
        '0': ['I', 'V', 'X'],
        '1' : ['X', 'L', 'C'],
        '2': ['C', 'D', 'M'],
        '3': ['M', 'M', 'M'],
    }
    constructor(){
    }

    static getRoman( digit , d){
        const tensDigits = RomanNumerals.tens[d];
        let result;
        switch (digit){
            case '0': result = ''
            break;
            case '1': result = tensDigits[0]
            break;
            case '2': result = tensDigits[0].repeat(2)
            break;
            case '3': result = tensDigits[0].repeat(3)
            break;
            case '4': result = tensDigits[0] + tensDigits[1]
            break;
            case '5': result = tensDigits[1]
            break;
            case '6': result = tensDigits[1] + tensDigits[0]
            break;
            case '7': result = tensDigits[1] + tensDigits[0] + tensDigits[0];
            break;
            case '8': result = tensDigits[1] + tensDigits[0] + tensDigits[0] + tensDigits[0];
            break;
            default: result = tensDigits[0] + tensDigits[2];
            break;
        }
        return result;

    }

    static toRoman(num){
        num = num.toString();
        let arr = num.split('').map((v,i,a) => [v, a.length - i - 1] )
        arr = arr.map(v=> RomanNumerals.getRoman(...v))
        const result = arr.join('');
        return result
    }
    static fromRoman(num){
        for(let i = 0 ; i < 4000 ; i++){
            if(RomanNumerals.toRoman(i) === num ) return i
        }
        return false
    }
    static romanfunction(str){
        return str.match(/CM|CD|XC|XL|IX|IV|\w/g)        
    }
}

console.log(RomanNumerals.toRoman(1990))
console.log(RomanNumerals.fromRoman('MCMXC'))