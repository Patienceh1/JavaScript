// Create a function called `add` using traditional syntax that will add two values

function add (x,y) {
    return x + y
}

add(1,2);

// Create a function called `subtract` using arrow syntax that will subtract two values

const subtract = (x,y) => (x-y)

// Create a function called `operate` using arrow syntax that will execute a callback function and `console.log` the result

const operate = (callback) => console.log(callback())


// Call your `operate` function three times, calling your `add` function, your `subtract` function and an anonymous arrow function that multiples two numbers

operate(() => add(43,96));
operate(() => subtract(76,9));
operate(() => 8 * 3)