input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("L")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
})
basic.showIcon(IconNames.Square)
radio.setGroup(1)
basic.forever(function () {
	
})
