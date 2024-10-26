console.log('Hello World!')

let number = 0
console.log(number)

const plusButton = document.getElementById('plant')

plusButton.addEventListener('click', function(e) {
    number = number + 1
    document.getElementById('number-value').innerHTML = number
})

const jim = document.getElementById('hat')

jim.addEventListener('click', function(e) {
    if (number > 0) {
        number = number - 1
        document.getElementById('number-value').innerHTML = number
    }
})

const blueButton = document.getElementById('blue-button')

blueButton.addEventListener('click', function(e) {
    document.body.className = 'background-blue'
})