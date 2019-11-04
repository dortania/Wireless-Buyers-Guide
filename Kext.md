# When and what kexts to use?

**[AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)**

This is needed to fix wifi on many broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old broadcom kexts into newer versions of macOS

**[BrcmPatchRAM](https://github.com/RehabMan/OS-X-BrcmPatchRAM)**

Required for all non-apple manufactured wireless cards due to how Firmware is handled


**[BrcmBluetoothInjector](https://github.com/RehabMan/OS-X-BrcmPatchRAM)**

Used to support the BCM20702, generally not needed and required to build from source

**[BT4LEContinuityFixup](https://github.com/acidanthera/BT4LEContinuityFixup)**

Needed to fix odd Continuity issues which allow for the use of:
* Handoff
* Instant Hotspot
* New Airdrop
* Apple Watch Unlock

Generally unneeded so avoid use when you notice issues with your card

**[AirPortAtheros40](https://github.com/khronokernel/Wifi-Buyers-Guide/blob/master/AirPortAtheros40.kext.zip)**

This kext is required for all Atheros chipsets that had support dropped in Mojave, these include:
* AR9285
* AR9287
* AR9280
* AR9380

To install the AirPortAtheros40, you'll need to copy it to Library/Extensions(**NOT** System/Library/Extensions) and then run the following command:
```
sudo chown -R root:wheel /L*/E*; sudo chmod -R 755 /L*/E*; sudo kextcache -i /
```

**Catalina users note**: This method no longer works without backporting the entire IO80211 framework, this is not idea for stability reasons



