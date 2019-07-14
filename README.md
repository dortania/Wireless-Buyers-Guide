# Introduction

So you've finally installed macOS onto your desktop/laptop/smart fridge but you look towards the menubar and see a Bluetooth icon yet no wifi to go with. You immediately bolt to the Settings pane and see no wifi option and wonder where you may have gone wrong in your install. Scowering the inter-webs did provide an answer but it was not that which you wanted to hear, "your wifi card is shit ANON!" said some user on a forum with far too many ads and a broken layout. They then proceeded to tell you how stupid you were to even think your wireless card would work, "how dare you not have the knowledge of Hackintosh hive mind". Well you search for more definitive answers and finally drop onto this page hoping to clear things up

## So why does my Bluetooth work yet Wifi doesn't?

Well, it's a bit complicated and involves looking at IOkit and how it handles different devices. Bluetooth is actually quite simple in how it interacts with the system and thanks to being generally run off the USB bus, generic devices can easily hook into IOKit and act semi natively\(usually with the loss of Handoff, Airdrop, etc\). Wifi, on the other hand, is quite a bit more complicated as there's per device/family firmware that needs to be loaded and so the Broadcom/Atheros Firmware obviously do nothing when in the presence of intel

\(I realize that USB Bus is Universal Serial Bus Bus, shut up\)

## Supported chipsets

* BCM94360CD
* BCM94331CD
* BCM94360CS2
* BCM94352Z
* BCM94352Z
* BCM94350ZAE

High Sierra:

* BCM943224
* AR9285
* AR9287
* AR9280
* AR9380

