function reverse (string) {
    let output = [];

    for (let i = 0, length = string.length; i <= length; i++) {
        
        output.push (string.charAt(length - i));
    }

    let reversed = output.join ('');

    return reversed;
}

reverse ("test");