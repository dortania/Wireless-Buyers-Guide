By far the most popular option for desktop users has been to buy an old Apple Aiport Wireless card and place it into a PCIe riser card. The benefits of this is that as long as the hardware works natively on a real mac it will work on without any kexts/framework modifications. With PCIe you have a couple of options:

* Apple Airport Card adapted to a full sized PCIe adapter (Recommended)
* Apple Airport Card adapted to M.2 B+M Key (same as what NVMe SSDs run off)
* Apple Airport Card adapted to M.2 A+E Key (same as what Intel wireless cards run off)
* Full sized PCIe Wireless card

Currently supported chipsets:

* BCM943602CDP
* BCM943602CD
* BCM94360CD
* BCM94331CD (may need to force the kext to load for Catalina\)
* BCM94360CS2
* BCM943602CS
* BCM94360CSAX
* BCM94360CS
* BCM94352Z
* BCM94350ZAE

# Supported (Full sized PCIe Wireless card)

* **BCM94360CD** (ABGN+AC):

  * Fenvi FV T919 (Bluetooth 4.0)
  * Fenvi AC1900 (No Bluetooth, EOL)
  * TP-LINK Archer T9E AC1900 (No Bluetooth, EOL)
  * TP-LINK Archer T8E  (No Bluetooth)
  * RNX-AC1900PCE (No Bluetooth)
  * ASUS PCE-AC66 (No Bluetooth)
  * ASUS PCE-AC68 (No Bluetooth)

* **BCM94360CS2** (ABGN+AC):

  * Fenvi FV-HB1200 (Bluetooth 4.0)
  * AWD Wireless LAN Card (No Bluetooth)

* **BCM94352** (ABGN+AC):

  * TP-LINK Archer T6 (No Bluetooth)
  * Rosewill RNX-AC1300PCE (No Bluetooth)
  * ASUS PCE-AC56 (No Bluetooth)

All cards presented here besides the Apple Airport and Fenvi cards require the following:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
  * BrcmFirmwareData
  * BrcmPatchRAM fix:
    * BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)
    * BrcmPatchRAM2 for 10.11-10.14
    * BrcmPatchRAM for 10.10 or older

# Older Models(Unsupported in Mojave)

With these models, you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There are a couple of different kexts to do this but generally, we recommend avoiding this card unless absolutely necessary.

**Note**: Injecting the kext into macOS Catalina is even more unstable, **highly encouraged to upgrade**

* **Atheros 9380**:
  * TP-Link TL-WDN4800
  * Rosewill N900
  * Atheros AR5BDT92
* **Atheros 9280**:
  * Dell DW 1525
  * Gemtek WPEA-113N
* **Atheros AR9287**:
  * Nexxt Solutions Saros 300 (APLDT300N1)
  * TP-LINK TL-WN881ND
* **Atheros AR9285**:
  * AzureWave AW-NE106
  * Rosewill RNX-N150PCe v1
  * SMC SMCWPCIeS-N
  * TP-LINK TL-WN781ND v1
  * ZyXEL NWD3105
