input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 500), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        # # . # #
        # # . . #
        . . . . .
        . # # # .
        # . . . #
        `)
})
