# Where's my Intel Wi-Fi?

So it's an interesting time, we're finally getting traction on an Intel Wi-Fi kext for macOS.

* [itlwm](https://github.com/OpenIntelWireless/itlwm)
  * itlwm.kext uses Apple's IOEthernet, is more stable than AirportItlwm.kext, and is completely based on open-source resources
  * AirportItlwm.kext uses Apple's IO80211, which is less stable than itlwm.kext, but supports certain Continuity features
  * Unfortunately, neither kext supports AirDrop; see here for features and limitations: [OpenIntelWireless](https://openintelwireless.github.io/)
