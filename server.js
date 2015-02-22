"use strict";

var Cylon = require("cylon");
var servoPin = 3;
var buttonPin = 2;

Cylon.robot({
  connections: {
    edison: { adaptor: "intel-iot"}
  },

  devices: {
    servo: { driver: "servo", pin: servoPin }
    button: { driver: "button", pin: buttonPin }
  },

  work: function(my) {
    var angle = 0,
    increment = 20,
    upperLim = 160;

    every((1).second(), function() {
      angle += increment;

      if ((angle % upperLim === 0)) {
        increment -= increment;
      }

      my.servo.angle(angle);

      my.button.on('release', function() {
        increment = -increment;
        console.log('Flipping around!')
      });

      console.log("Current Angle: " + (my.servo.currentAngle()));
    });
  }
}).start();
