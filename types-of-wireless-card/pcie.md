# PCIe

By far the most popular option for desktop users has been to buy an old Apple AirPort wireless card and place it into a PCIe riser card. The benefits of this are that as long as the hardware works natively on a real Mac, it will work without any kexts/framework modifications. With PCIe, you have a couple of options:

* Apple AirPort Card adapted to a full sized PCIe adapter (recommended)
* Apple AirPort Card adapted to M.2 B+M Key (same as what NVMe SSDs use)
* Apple AirPort Card adapted to M.2 A+E Key (same as what Intel wireless cards use)
* Full sized PCIe wireless card

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

# Supported (Full sized PCIe wireless card)

* **BCM94360CD** (ABGN+AC):

  * Fenvi FV T919 (Bluetooth 4.0)
  * Fenvi AC1900 (No Bluetooth, EOL)
  * TP-LINK Archer T9E AC1900 (No Bluetooth, EOL)
  * TP-LINK Archer T8E (No Bluetooth)
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

All cards presented here besides the Apple AirPort and Fenvi cards require the following:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
    * Do not use with macOS 12, use BlueToolFixup instead
    * If you dual boot both macOS 11 or under and macOS 12, `MinKernel` and `MaxKernel` under `Kernel -> Add` in your config can be used to load one kext or the other in a specific OS
  * BrcmFirmwareData
  * BrcmPatchRAM fix:
    * BrcmPatchRAM3 for macOS 10.14+ (must be paired with BrcmBluetoothInjector unless on macOS 12)
    * BrcmPatchRAM2 for macOS 10.11-10.14
    * BrcmPatchRAM for macOS 10.10 and older
  * BlueToolFixup:
    * Used in place of BrcmBluetoothInjector on macOS 12
    * See above dual booting note

# Older Models (unsupported in Mojave)

With these models, you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There are a couple of different kexts to do this but generally, we recommend avoiding these cards unless absolutely necessary.

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
