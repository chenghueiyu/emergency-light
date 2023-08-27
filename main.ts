basic.forever(function () {
    if (ModuleWorld_Analog.Potentiometer(ModuleWorld_Analog.mwAnalogNum.AP0P1) > 400) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
    } else if (ModuleWorld_Analog.Potentiometer(ModuleWorld_Analog.mwAnalogNum.AP0P1) <= 400) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
    }
})
