# When and what kexts to use?

## [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)

This is needed to fix wifi on many broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old broadcom kexts into newer versions of macOS.

Note: 
* Apple Airport and Fenvi cards do not need this kext

## [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)

Required for all non-apple manufactured wireless cards due to how Firmware is handled. This is actually a bundle of multiple kexts:

* BrcmBluetoothInjector 
* BrcmFirmwareData 
* BrcmPatchRAM fix:
   * BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)
   * BrcmPatchRAM2 for 10.11-10.14
   * BrcmPatchRAM for 10.10 or older

Note:
* Apple Airport and Fenvi cards do not need these kexts
* OpenCore order is alphebtical: Injector -> Data -> RAM



## [BT4LEContinuityFixup](https://github.com/acidanthera/BT4LEContinuityFixup)

Needed to fix odd Continuity issues which allow for the use of:

* Handoff
* Instant Hotspot
* New Airdrop
* Apple Watch Unlock

Generally unneeded so avoid use when you notice issues with your card

Note: 
* Apple Airport and Fenvi cards shouldn't need this kext
* Continuity requires a Bluetooth 4.0 Low Energy supported card

## [AirPortAtheros40](https://github.com/khronokernel/Wifi-Buyers-Guide/blob/master/AirPortAtheros40.kext.zip)

This kext is required for all Atheros chipsets that had support dropped in Mojave, these include:

* AR9285
* AR9287
* AR9280
* AR9380

To install the AirPortAtheros40, you have 2 methods:

* Kext injection via bootloader
* Installation into macOS(Library/Extensions)

The first method is recommended, the second should be avoided but may work better for some users. **Test injection first**


For macOS installation:

You'll need to copy it to Library/Extensions(**NOT** System/Library/Extensions) and then run the following command:
```
sudo chown -R root:wheel /L*/E*; sudo chmod -R 755 /L*/E*; sudo kextcache -i /
```

**Catalina users note**: These methods no longer works without backporting the entire IO80211 framework, this is not ideal for stability reasons



## [ATH9KFixup](https://github.com/chunnann/ATH9KFixup)

To be paired with AirPortAtheros40 to fix support for many atheros cards, similar idea to AirportBrcmFixup
