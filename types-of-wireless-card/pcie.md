# PCIe

By far the most popluar option for desktop users has been to buy an old Apple Aiport Wireless card and place it into a PCIe riser card. The benifits of this is that as long as the harware works natively on a real mac it will work on without any kexts/framwork modifcations

Currently supported chipsets:

* BCM94360CD
* BCM94331CD\(may need to force the kext to load for Catalina\)
* BCM94360CS2
* BCM94352Z
* BCM94352Z
* BCM94350ZAE


* **BCM94360CD**:

   * Fenvi FV T919
   * Fenvi AC1900\(no bluetooth\)
   * TP-LINK Archer T9E AC1900
   * TP-LINK Archer T8E
   * RNX-AC1900PCE\(no bluetooth\)
   * ASUS PCE-AC66
   * ASUS PCE-AC68

**BCM94360CS2**:

   * AWD Wireless LAN Card\(BCM94360CS2\)

**BCM94352**:

   * TP-LINK Archer T6E
   * Rosewill RNX-AC1300PCE
   * ASUS PCE-AC56


# Older Models(Unsupported in Mojave)

With these model you'll need to reinject the old plugin your wireless card used in High Sierra to work in Mojave. There's a couple different kexts to do this but generally we recommend avoiding this card unless absolutly necessary

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

