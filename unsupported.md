# Supported/Unsupported Chipsets

With macOS there's a limited amount of supported hardware regardless of which category and wireless cards are no different.

## Supported chipsets

### Big Sur(11)

* BCM943602
* BCM94360
* BCM94352
* BCM94350

### Mojave(10.14) and Catalina(10.15)

* BCM94331
  * May require you to force load IO80211Family.kext when running macOS 10.15, Catalina, see `Kernel -> Force` in OpenCore for more details 
* All those mentioned in Big Sur(11) are also supported in Mojave(10.14) and Catalina(10.15)

### High Sierra(10.13)

* BCM943224
* AR9285(AR5B95)
* AR9287(AR5B97)
* AR9280(AR5BHB92)
* AR9380(AR5BXB112)
* All those mentioned in Mojave and newer are also supported in High Sierra

# Unsupported Chipsets

## Broadcom

* BCM4311
* BCM4312
* BCM4313
* BCM4356
* BCM43142
* BCM43228

## Atheros

* AR5424

## Intel

Currently these Intel chipsets are not offically supported in macOS(see here for possible solutions: [Where's my Intel Wifi](../misc/intel.md)):

Intel Wireless AX

* Intel® Wi-Fi 6 AX201
* Intel® Wi-Fi 6 AX200

Intel Wireless AC

* Intel® Wireless-AC 9560
* Intel® Wireless-AC 9462
* Intel® Wireless-AC 9461
* Intel® Wireless-AC 9260
* Intel® Dual Band Wireless-AC 3168
* Intel® Dual Band Wireless-AC 8265
* Intel® Dual Band Wireless-AC 8260
* Intel® Dual Band Wireless-AC 3165
* Intel® Dual Band Wireless-AC 7265
* Intel® Dual Band Wireless-AC 7260
* Intel® Dual Band Wireless-AC 3160
* Intel® Dual Band Wireless-AC 7260

Wireless N

* Intel® Dual Band Wireless-N 7265
* Intel® Wireless-N 7265
* Intel® Dual Band Wireless-N 7260
* Intel® Wireless-N 7260
* Intel® Centrino® Advanced-N 6230
* Intel® Centrino® Wireless-N 1030
* Intel® Centrino® Wireless-N 130
* Intel® Centrino® Advanced-N 6235
* Intel® Centrino® Wireless-N 135
* Intel® Centrino® Wireless-N 105
* Intel® Centrino® Wireless-N 2200
* Intel® Centrino® Wireless-N 2230
* Intel® Centrino® Wireless-N 1000
* Intel® Centrino® Advanced-N 6205
* Intel® Centrino® Wireless-N 100
* Intel® Centrino® Wireless-N + WiMAX 6150
* Intel® Centrino® Advanced-N + WiMAX 6250
* Intel® Centrino® Ultimate-N 6300
* Intel® Centrino® Advanced-N 6200
* Intel® Wireless WiFi Link 5100AGN
* Intel® Wireless WiFi Link 5300AGN
* Intel® Wireless WiFi Link 5350AGN
* Intel® Wireless WiFi Link 5150AGN
