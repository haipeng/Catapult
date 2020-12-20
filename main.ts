function bluecontrol () {
    if (uartData == "A") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (uartData == "B") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (uartData == "C") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (uartData == "D") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (uartData == "0") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    }
}
function BreathLED () {
    SuperBit.RGB_Program().clear()
    for (let k = 0; k <= 255; k++) {
        SuperBit.RGB_Program().setBrightness(k)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    }
    for (let l = 0; l <= 255; l++) {
        SuperBit.RGB_Program().setBrightness(255 - l)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        SevenColorLED()
        music2()
        ModeSelect()
        SevenWaterLED()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function ModeSelect () {
    if (uartData == "S") {
        basic.showIcon(IconNames.House)
        g_mode = 1
    } else if (uartData == "T") {
        basic.showIcon(IconNames.Angry)
        g_mode = 2
    } else if (uartData == "U") {
        basic.showIcon(IconNames.EigthNote)
        g_mode = 3
    } else if (uartData == "V") {
        basic.showIcon(IconNames.Happy)
        g_mode = 0
    }
}
function HorseLED () {
    SuperBit.RGB_Program().setBrightness(255)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().show()
}
function WaterLED () {
    SuperBit.RGB_Program().setBrightness(255)
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
    SuperBit.RGB_Program().show()
    basic.pause(100)
    SuperBit.RGB_Program().clear()
    SuperBit.RGB_Program().show()
}
function SevenColorLED () {
    if (uartData == "G") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (uartData == "H") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (uartData == "I") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (uartData == "J") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (uartData == "K") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        SuperBit.RGB_Program().show()
    } else if (uartData == "L") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
        SuperBit.RGB_Program().show()
    } else if (uartData == "M") {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
}
function SevenWaterLED () {
    if (uartData == "N") {
        g_RGBMode = 1
    } else if (uartData == "P") {
        g_RGBMode = 2
    } else if (uartData == "Q") {
        g_RGBMode = 3
    } else if (uartData == "R") {
        g_RGBMode = 4
    } else if (uartData == "W") {
        g_RGBMode = 5
    }
}
function music2 () {
    if (uartData == "1") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(262, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "2") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(294, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "3") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(330, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "4") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(349, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "5") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(392, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "6") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(440, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "7") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(494, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "8") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(523, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "B1") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(554, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "B2") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(622, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "B3") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(740, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "B4") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(831, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "B5") {
        SuperBit.Servo2(SuperBit.enServo.S1, 135)
        music.playTone(932, music.beat(BeatFraction.Whole))
        SuperBit.Servo2(SuperBit.enServo.S1, 105)
    } else if (uartData == "O") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}
let gBlue = 0
let g_Green = 0
let g_Red = 0
let g_mode = 0
let uartData = ""
let connected = 0
let g_RGBMode = 0
let m = 0
let i = 0
g_RGBMode = 0
connected = 0
SuperBit.Servo2(SuperBit.enServo.S1, 105)
bluetooth.startUartService()
basic.showString("S")
basic.forever(function () {
    if (g_RGBMode == 1) {
        SuperBit.RGB_Program().clear()
        WaterLED()
    } else if (g_RGBMode == 2) {
        SuperBit.RGB_Program().clear()
        HorseLED()
    } else if (g_RGBMode == 3) {
        SuperBit.RGB_Program().clear()
        BreathLED()
    } else if (g_RGBMode == 4) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().setBrightness(200)
        g_Red = randint(0, 256)
        g_Green = randint(0, 256)
        gBlue = randint(0, 256)
        SuperBit.RGB_Program().showColor(neopixel.rgb(g_Red, g_Green, gBlue))
        SuperBit.RGB_Program().show()
        g_RGBMode = 0
    } else if (g_RGBMode == 5) {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
    basic.pause(10)
})
