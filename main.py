text_list: List[str] = []

def on_button_pressed_a():
    global text_list
    text_list = ["geese have teeth on their tongues",
        "Babies talk to their parents while in the egg",
        "The bills of geese are very sensitive"]
    music.play_melody("C5 G B A F A C5 B ", 120)
    basic.show_string("Fun Fact..")
    basic.show_string("" + (text_list._pick_random()))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_leds("""
        # # # . .
                . . # # #
                . . . # #
                . # # . .
                . # # . .
    """)
    basic.show_leds("""
        # # # . .
                . . # # #
                . . . # #
                . # # . .
                . # # . .
    """)
    basic.show_leds("""
        # # # . .
                . . # # #
                . . . # #
                . # # . .
                . # # . .
    """)
    basic.show_leds("""
        # # # . .
                . . # # #
                . . . # #
                . # # . .
                . # # . .
    """)
    basic.show_leds("""
        # # # . .
                . . # # #
                . . . # #
                . # # . .
                . # # . .
    """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    basic.show_leds("""
        . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
    """)
    control.wait_micros(1000500)
    basic.show_leds("""
        . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . # # #
                . . # # #
                . . # # #
                . . # # #
                . . # # #
    """)
    basic.show_leds("""
        # # # . .
                # # # . .
                # # # . .
                # # # . .
                # # # . .
    """)
    basic.show_leds("""
        . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
    """)
basic.forever(on_forever)
