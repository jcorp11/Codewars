function expand(expr) {
  console.log(expr)
  const [poly, exponent] = expr.replace(/\(|\)/g,'').split('^');

  if(+exponent === 0) return '1'

  const [a, variableLetter, b] = getArguments(poly);

  result = ''
  for(i = 0 ; i <= +exponent ; i++ ){
    const term = getBinomialterm(i, a, b, variableLetter, exponent);
    if(term){
      if(term[0]==='-'){
        result = result.concat(term)
      }else{
       result = result.concat('+').concat(term);
      }
    }
  }
  result = result[0] === '+' ? result.substring(1) : result; 
  // console.log({a,variableLetter, b, exponent})
  return result
}
function getBinomialterm(i, a, b, variableLetter, exponent ){
  first = binomialFactor(+exponent, i);
  second = Math.pow(+a,(+exponent - i));
  third = Math.pow(+b, +exponent);


  let factor = binomialFactor(+exponent, i) * Math.pow(+a,(+exponent - i)) * Math.pow(+b, i)
  if(factor === 0) return ''

  if(factor === -1 && (+exponent - i) !== 0) factor = '-'

  if(+exponent - i === 0){
    return `${factor}`
  }
  else if( +exponent - i === 1){
    return factor === 1 ? variableLetter : `${factor}${variableLetter}`
  }
  else{
    return factor === 1 ? `${variableLetter}^${+exponent - i}`  : `${factor}${variableLetter}^${+exponent - i}`  
  }


}

function getArguments(poly){
  for( let i = poly.length - 1 ; i >=0 ; i-- ){
    if(poly[i]==='-' || poly[i]==='+'){
        a = poly.substring(0 , i - 1)
        variableLetter = poly.substring(i -1 , i)
        b = poly.substring(i)
        break;
    }
  }
  b = b[0] === '+' ? b.slice(1) : b;
  a = a === '' ? 1 : a;
  a = a === '-' ? -1 : a;
  return [a , variableLetter, b]
}


function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}

function binomialFactor(n , k){
  return factorial(n)/(factorial(k)*factorial(n-k))
}


const expr = "(-x-1)^3";
console.log(expand(expr))