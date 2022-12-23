function permutations(string) {
    // Create a Set to store the permutations
    const permutationsSet = new Set();
  
    // Base case: if the string is of length 1, return the string as the only permutation
    if (string.length === 1) {
      permutationsSet.add(string);

    }
    else
    {
        for (let i = 0; i < string.length; i++) {
          const currentChar = string[i];
          const remainingChars = string.slice(0, i) + string.slice(i + 1);
          const subPermutations = permutations(remainingChars);
      
          // Add each permutation to the Set
          for (const permutation of subPermutations) {
            permutationsSet.add(currentChar + permutation);
          }
        }
    }
  
    // Recursive case: for each character in the string, generate all permutations of the remaining characters
  
    // Return the Set as an array
    return [...permutationsSet];
}

  console.log(permutations('ab'))
