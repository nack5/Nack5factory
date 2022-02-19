basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P7, 0)
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(500)
    }
})
