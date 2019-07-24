By far the most popular option for desktop users has been to buy an old Apple Aiport Wireless card and place it into a PCIe riser card. The benefits of this is that as long as the hardware works natively on a real mac it will work on without any kexts/framework modifications. With PCIe you have a couple of options:


* Apple Airport Card adapted to a full sized PCIe adapter(Recommended)
* Apple Airport Card adapted to M.2 B+M Key(same as what NVMe SSDs run off)
* Apple Airport Card adapted to M.2 A+E Key(same as what intel wireless cards run off)
* Full sized PCIe Wireless card

Currently supported chipsets:

* BCM94360CD
* BCM94331CD\(may need to force the kext to load for Catalina\)
* BCM94360CS2
* BCM94352Z
* BCM94352Z
* BCM94350ZAE

# What does an Airport adapted look like?

![https://i.imgur.com/AUtNhiB.jpg](PCIe Adapter)
![https://i.imgur.com/MNt8xqq.jpg](M.2 NGFF B+M Adapter)
![https://i.imgur.com/NLUpEl3.jpg](M.2 NGFF A+E Adapter)


# Supported(Full sized PCIe Wireless card)

* **BCM94360CD**:

   * Fenvi FV T919
   * Fenvi AC1900\(no bluetooth\)
   * TP-LINK Archer T9E AC1900
   * TP-LINK Archer T8E
   * RNX-AC1900PCE\(no bluetooth\)
   * ASUS PCE-AC66
   * ASUS PCE-AC68

* **BCM94360CS2**:

   * AWD Wireless LAN Card\(BCM94360CS2\)

* **BCM94352**:

   * TP-LINK Archer T6E
   * Rosewill RNX-AC1300PCE
   * ASUS PCE-AC56


# Older Models(Unsupported in Mojave)

With these models, you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There are a couple of different kexts to do this but generally, we recommend avoiding this card unless absolutely necessary

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
* **AR9285**:
   * AzureWave AW-NE106
   * Rosewill RNX-N150PCe v1
   * SMC SMCWPCIeS-N
   * TP-LINK TL-WN781ND v1
   * ZyXEL NWD3105

