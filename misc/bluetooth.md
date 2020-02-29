# Bluetooth Support

So with Bluetooth in macOS, it can become quite confusing on what actually is supported and what's not.


## Supported bluetooth chipset

Well I was orginally going to manually find every supported model but user [MarkVillacampa](https://www.tonymacx86.com/members/markvillacampa.1790473/) has done this for us! Yay I get to be lazy for once!

* **[Bluetooth List](https://www.tonymacx86.com/threads/guide-how-to-get-bluetooth-and-wifi-working.275962/)**


(For the amount of work this boy saved me, he deserves a medal)

## So why does Bluetooth work on my intel card?

Well, it's a bit complicated and involves looking at IOkit and how it handles different devices. Bluetooth is actually quite simple in how it interacts with the system and thanks to being generally run off the USB rail, generic devices can easily hook into IOKit and act semi natively\(usually with the loss of Handoff, Airdrop, etc\). Wifi, on the other hand, is quite a bit more complicated as there's per device/family firmware that needs to be loaded and so the Broadcom/Atheros Firmware obviously do nothing when in the presence of intel

So if you rebooted from Windows into macOS, the firmware on the card may have stuck on allowing you temporary bluetooth support on you're card. To make sure this sticks around, you can use a firmware injecting kext like that found on the [IntelBluetoothFirmware repo](https://github.com/zxystd/IntelBluetoothFirmware)

## Bluetooth in the BIOS

So to support Bluetooth in the BIOS, you'll need a Bluetooth device that supports HID Proxy. The idea of HID proxy is to create a minimal bluetooth stack that is then used into tricking the BIOS into thinking your bluetooth keyboard is actually a USB one, as there aren't any firmwares that actually implement Bluetooth.

All of Apple's cards natively support this feature but you'll need to search on a case-by-case basis with other devices

## Retaining Bluetooth keys between OSes

This is mainly for devices that only have 1 Bluetooth profile which can be a bit frustrating when switching between OSes, we'll our local Frewt boll has saved us again!

* **[Dual Booting with Bluetooth Devices](https://fewtarius.gitbook.io/laptopguide/extras/dual-booting-with-bluetooth-devices)**
