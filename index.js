let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf

let apples = []
let oranges = []

function fruitSort() {
    for ( let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            apples.push("🍎")
        } else {
            oranges.push("🍊")
        }
    }
    appleShelf.textContent = apples
    orangeShelf.textContent = oranges
}

fruitSort()
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


