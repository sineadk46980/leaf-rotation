hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Dial, ThreePort.One) > 50) {
        hummingbird.setLED(ThreePort.One, 100)
    } else {
        hummingbird.setLED(ThreePort.One, 0)
    }
})
