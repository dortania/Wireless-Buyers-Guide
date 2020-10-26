# When and what kexts to use

* [Broadcom](#broadcom)
* [Intel](#intel)
* [Atheros](#atheros)

## Broadcom

### [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)

This is needed to fix wifi on many Broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old Broadcom kexts into newer versions of macOS.

Note:

* Apple Airport and Fenvi cards do not need this kext

### [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)

Required for all non-apple manufactured wireless cards due to how Firmware is handled. This is actually a bundle of multiple kexts:

* BrcmBluetoothInjector
* BrcmFirmwareData
* BrcmPatchRAM fix:
  * BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)
  * BrcmPatchRAM2 for 10.11-10.14
  * BrcmPatchRAM for 10.10 or older

Note:

* Apple Airport and Fenvi cards do not need these kexts
* OpenCore order is alphabetical: Injector -> Data -> RAM

## Intel

### [itlwm](https://github.com/OpenIntelWireless/itlwm)

Currently does connect and even support Apple's own IO80211 framework(via AirportItlwm), unfortunately doesn't support Airdrop, see here for features and limitations: [OpenIntelWireless](https://openintelwireless.github.io/)

### [IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases)

Adds Bluetooth support to macOS when paired with an Intel wireless card


## Atheros

### [High Sierra's IO80211Family](https://github.com/khronokernel/IO80211-Patches/blob/main/10.13.6-High-Sierra-Kexts/IO80211HighSierra.kext.zip)

This kext is required for all Atheros chipsets that had support dropped in Mojave, these include:

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112


### [ATH9KFixup](https://github.com/chunnann/ATH9KFixup)

To be paired with AirPortAtheros40 to fix support for many unsupported Atheros cards, similar idea to AirportBrcmFixup:

* AR946X (AR9462 & AR9463)
* AR9485
* AR9565

### [AthBluetoothFirmware](https://github.com/zxystd/AthBluetoothFirmware/releases)

Required to ensure Bluetooth firmware is loaded correctly in macOS