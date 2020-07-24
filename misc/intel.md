# Where's my Intel Wifi

So it's an interesting time, we're finally getting traction on an Intel Wifi kext for macOS. While not finished and much to be done, we have 3 projects on the horizon:

* [AppleIntelWifi](https://intelwifi.0xcc.pw/)
  * Based off of Apple's own IO80211 base and tries to emulate it
  * Currently does not connect yet
* [itlwm](https://github.com/OpenIntelWireless/itlwm)
  * Based off of IOEthernet and emulates an ethernet interface(similar to a USB Wifi dongle)
  * Currently does connect, however limited to Wifi-N networks
* [usr-sse2's fork of Black80211-Catalina](https://github.com/usr-sse2/Black80211-Catalina)
  * Combination of the above 2, so get both native Wifi settings and able to connect to networks(still limited to Wifi-N)

Please do not bombard them with issues and such about support, if you're not willing to provide logs then we recommend staying away until the official release.
