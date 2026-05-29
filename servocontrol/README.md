# Servo Control Setup

Public app URL:

- https://cyberbrainiac1.github.io/servocontrol/

What to upload to the ESP32:

- `ESP32ServoWiFi.ino`

Before uploading:

1. Open `ESP32ServoWiFi.ino`.
2. Replace `YOUR_WIFI_NAME` and `YOUR_WIFI_PASSWORD` with your normal Wi-Fi credentials.
3. Install the `ESP32Servo` library in Arduino IDE.
4. Select your ESP32 board and upload the sketch.

Servo wiring:

- Signal -> `GPIO 18`
- Power -> external `5V`
- Ground -> shared ground between servo supply and ESP32

Normal connection mode:

- ESP32 joins your Wi-Fi
- Open `https://cyberbrainiac1.github.io/servocontrol/`
- In the app, use `http://servo-control.local` or your ESP32 IP address

Fallback mode:

- If Wi-Fi join fails, ESP32 creates hotspot `ESP32-Servo-Remote`
- Password: `servo1234`
- Open the app and use `http://192.168.4.1`

HTTP API used by the app:

- `GET /api/status`
- `POST /api/servo` with `{"angle": 90}`

On iPhone:

1. Open the Pages URL in Safari.
2. Tap Share.
3. Tap Add to Home Screen.

Note:

- The web app uses Wi-Fi, not Bluetooth, because iPhone homescreen web apps are a much better fit for Wi-Fi control here.
