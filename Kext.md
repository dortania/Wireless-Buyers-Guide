# When and what kexts to use

* [Broadcom](#broadcom)
* [Intel](#intel)
* [Atheros](#atheros)

## Broadcom

### [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)

This is needed to fix wifi on many Broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old Broadcom kexts into newer versions of macOS.

* Note: Apple AirPort and Fenvi cards do not need this kext

### [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)

Required for all non-Apple manufactured wireless cards due to how firmware is handled. This is actually a bundle of multiple kexts:

* BrcmBluetoothInjector (don't use on macOS 12)
* BrcmFirmwareData
* BrcmPatchRAM fix:
  * BrcmPatchRAM3 for macOS 10.14+ (must be paired with BrcmBluetoothInjector unless on macOS 12)
  * BrcmPatchRAM2 for macOS 10.11-10.14
  * BrcmPatchRAM for macOS 10.10 and older
* BlueToolFixup:
  * Used in place of BrcmBluetoothInjector on macOS 12

Note:

* Apple AirPort and Fenvi cards do not need these kexts
* OpenCore order: Injector -> Data -> RAM

## Intel

### [itlwm](https://github.com/OpenIntelWireless/itlwm)

* [itlwm](https://github.com/OpenIntelWireless/itlwm)
  * itlwm.kext uses Apple's IOEthernet, is more stable than AirportItlwm.kext, and is completely based on open-source resources
  * AirportItlwm.kext uses Apple's IO80211, which is less stable than itlwm.kext, but supports certain Continuity features
  * Unfortunately, neither kext supports AirDrop; see here for features and limitations: [OpenIntelWireless](https://openintelwireless.github.io/)

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
