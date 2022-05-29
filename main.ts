input.onButtonPressed(Button.A, function () {
    radio.sendString("yo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
