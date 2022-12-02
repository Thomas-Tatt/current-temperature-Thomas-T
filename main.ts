let Current_temperature = 0
basic.forever(function () {
    Current_temperature = input.temperature()
    basic.showNumber(Current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
