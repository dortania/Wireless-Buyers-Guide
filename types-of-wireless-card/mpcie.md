So mini PCIe is most useful for users with older systems that don't have M.2 based wireless. With mini PCIe you have a couple of options:

* Half Sized mini PCIe
* Full sized mini PCIe
* Apple Airport Card adapted to a full sized mini PCIe

For older laptop users you'll generally be limited to half sized mini PCIe wireless cards due to space constraints but for desktop users, it's recommended to buy an Apple Airport Card with an adapter. The reason being is this avoids issues with PCI IDs not matching and not having drivers flags be set off, solutions are to force load the accompanying kext or modify the kext's PCI ID list to support your model.

The other thing to note with mini PCIe is that some vendors have a whitelist on wireless cards installed, speciifcally that only their brand of cards will work. The system **won't even post** with a non-branded one installed, the main culprits:

* Lenovo(7th gen and older)
* Toshiba
* HP(3rd gen and older)
* Compaq

There are some work arounds with [BIOS mods](https://medium.com/@p0358/removing-wlan-wwan-bios-whitelist-on-a-lenovo-laptop-to-use-a-custom-wi-fi-card-f6033a5a5e5a), though be careful as poor patching can in fact **brick your device**

# Supported:

* **BCM94360HMB** (ABGN+AC, BT 4.0, 3x3:3):

   * AzureWave AW-CB160H
   * Alpha Networks WMC-AC01
   * Arcadyan WN8833B-AC
   * Gemtek WMDB-150AC
   * Unex DAXB-81
   * Wistron NeWeb DNXB-C1
   
* **BCM94352HMB** (ABGN+AC,BT 4.0, 2x2:2):

   * AzureWave AW-CE123H
   * Dell DW1550
   * HP TPC-Q013
   * Lenovo Lite-On WCBN606BH
   
   
   
All cards presented here require the following:
* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
   * BrcmBluetoothInjector 
   * BrcmFirmwareData 
   * BrcmPatchRAM fix:
      * BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)
      * BrcmPatchRAM2 for 10.11-10.14
      * BrcmPatchRAM for 10.10 or older


# Older models(Not natively supported in Mojave)

With these models, you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There are a couple of different kexts to do this but generally, we recommend avoiding these wireless cards.

**Note**: Injecting the kext into macOS Catalina is even more unstable

* **BCM94322**4 HMS/HMB (ABGN, 2x2:2)
   * Dell DW1520
   * HP Gemtek WMIB-275N 
   * Lenovo Gemtek WMIB-275N
   * Pegatron UPWL6024
   
* **AR9280** (ABGN, 2x2:2)

   * Atheros AR5BHB92
   * Atheros AR5BXB92
   * AzureWave AW-NE772
   * AzureWave AW-NE773
   * Compex WLE200N5-23-ESD
   * Compex WLE200NX
   * Dell DW1515
   * HP U98Z044
   * HP Lite-On WN6502AH
   * Silex SX-PCEAN
   * SparkLAN WPEA-110N
   * SparkLAN WPEA-111N
   * Ubiquiti Networks SR71-E
   * Unex DNXA-92

* **AR9380** (ABGN, 3x3:3)
   * Alpha Networks WMC-ND02
   * Killer Wireless-N 1103
   * Atheros AR5BHB112
   * Atheros AR5BXB112
   * Compex WLE300N5-22 7A0000
   * Compex WLE300NX 6A0000
   * HP U98Z081
   * JJPlus JWX6051
   * Lite-On WN6508A
   * SparkLAN WPEA-127N
   * SparkLAN WPEA-128N
   * Tehnoetic TET-N450DB
   * Vikings Atheros450
   * Wistron NeWeb DNXA-G1
