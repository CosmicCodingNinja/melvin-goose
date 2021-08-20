input.onButtonPressed(Button.A, function () {
    text_list = ["geese have teeth on their tongues", "Babies talk to their parents while in the egg", "The bills of geese are very sensitive"]
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showString("Fun Fact..")
    basic.showString("" + (text_list._pickRandom()))
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 3; index++) {
        music.playMelody("F - C5 - A B A G ", 120)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    music.playMelody("F - C5 - A B A G ", 70)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # # .
        . # # # .
        `)
    control.waitMicros(1000500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        `)
    control.waitMicros(1000500)
    basic.showLeds(`
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    control.waitMicros(1000500)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # . .
        . . # # #
        . . . # #
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # . .
        . . # # #
        . . . # #
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        # # # . .
        . . # # #
        . . . # #
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
let text_list: string[] = []
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
control.waitMicros(1000500)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # # #
    . . # # #
    . . # # #
    . . # # #
    . . # # #
    `)
basic.showLeds(`
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    # # # . .
    `)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
