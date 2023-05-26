input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 100))
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
