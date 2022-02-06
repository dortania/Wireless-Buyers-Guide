# USB

While the worst option for wireless, this is one that not many people can choose to avoid due to either their wireless cards being soldered or not wanting to break their warranty to replace their card.

Things to keep in mind:

* Features like AirDrop, Handoff, etc likely won't work
* Not guaranteed to work 100%
* Sleep can easily break
* Need a separate adapter for Bluetooth
* Most cards use a poorly made 32bit app to get wifi working(and you're reliant on the manufacturer to update their app for Catalina)
* No Network support in recovery

And with all these issues it's quite hard to recommend a USB wireless card but there still is hope:

# [Wireless-USB-Adapter](https://github.com/chris1111/Wireless-USB-Adapter) and [Wireless-USB-Big-Sur-Adapter](https://github.com/chris1111/Wireless-USB-Big-Sur-Adapter)

While not perfect, this might just be as close as we can get to "good" USB wireless thanks to it being kept up-to-date by [chris1111](https://github.com/chris1111)(So no 32-bit app crap) and supports a large variety of chipsets. Use Wireless-USB-Adapter on macOS 10.xx and Wireless-USB-Big-Sur-Adapter on macOS 11 and 12.

I've listed out all the chipsets that have been known good and you can see if yours matches any of these chipsets

* **RTL8188CUS**:

  * Asus USB-N 10 Nano/N150
  * TRENDnet N150 Micro

* **RTL8192CU**:

  * EDIMAX- EW-7722UTn V2
  * EDIMAX N300

* **RTL8192EU**:

  * TL-WN823N v2
  * TL-WN823N v3
  * TL-WN821N v6

* **RTL8188EUS**:

  * TL-WN725N v3
  * TL-WN722N v3

* **RTL8811AU**:

  * Archer T2U NANO

* **RTL8812BU**:

  * Archer T4U V3

* **RTL8814AU**:

  * Archer T9UH V2

* **RTL8812AU**:

  * Linksys WUSB6300

# [USB Wireless Utility](https://github.com/chris1111/USB-Wireless-Utility) and [D-Link Utility Package](https://github.com/chris1111/D-LinkUtility-Package)

Just like [Wireless-USB-Adapter-Clover](https://github.com/chris1111/Wireless-USB-Adapter-Clover), WIFI-Dlink allows support for quite a few Mediatek/Ralink cards, but due to being a 32-bit app, it is unsupported on AMD systems. There's a newer version for Catalina which is 64-bit and perfect for AMD systems as well: [WIFI-Dlink Catalina-Panel](https://github.com/chris1111/WIFI-Dlink-Catalina-Panel)

* RT3572
* RT3072
* RT3070
* RT3573
* MT7610
* MT7610
* MT7610
* RT5370
* RT2870
* RT3071
* RT2770
* RT3573
* RT5572
* RT3573
* RT3573
* RT5572
* RT3572
