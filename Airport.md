# AirPort Adapters

So what are AirPort adapters and why are they the preferred piece of hardware? Well, they're genuine Apple wireless cards pulled from MacBooks and iMacs, meaning no extra configurations/kexts are required to get this hardware up and running. The main issue is that they require an adapter to PC hardware and are generally bulkier making them unfavourable in laptops but perfect for desktops.

Best part, **no kexts needed!**

* Note: When buying a Wifi card and an adapter, make sure the antenna sockets match up, there are 2 main types of sockets:
  * MHF4: Commonly used on M.2 and Apple's laptop wifi cards
  * U.FL: Commonly used on mPCIe and Apple's desktop wifi cards

# Which cards shipped with what?

## **Socketed cards**

Ones you can buy and install yourself

* BCM943602CDP(Wifi) + 20703A1 (Bluetooth 4.0) + U.FL Connector
  * iMac16,x
  * iMac17,1
  * iMac18,x (Different Bluetooth module, 20703A2, Bluetooth 4.2)
* BCM94360CD (Wi-Fi) + 20702B0 (Bluetooth 4.0) + U.FL Connector
  * iMac14,x
  * iMac15,x
  * MacPro6,1
* BCM94331CD (Wi-Fi) + BRCM20702 (05AC:828b, Bluetooth 4.0) + U.FL Connector
  * iMac13,x
* BCM94360CS2 (Wi-Fi) + BRCM20702 (05AC:821f, Bluetooth 4.0) + MHF4 Connector
  * MacBookAir5,x
  * MacBookAir6,x
  * MacBookAir7,x
* BCM943602CS (Wi-Fi) + 20703A1 (Bluetooth 4.0) + MHF4 Connector
  * MacBookPro12,x
* BCM94360CS (Wi-Fi) + 20702B0 (Bluetooth 4.0) + MHF4 Connector
  * Macmini7,x
  * MacBookPro11,x
* BCM94360CSAX + BRCM20702 (05AC:828c, Bluetooth 4.0)  + MHF4 Connector
  * MacBookPro10,x
* BCM94350 + MHF4 Connector
  * MacBook8,1 - 4350C1, Bluetooth 4.0
  * MacBookPro13,x - 20703A2, Bluetooth 4.2
  * MacBookPro14,x - 4350, Bluetooth 4.2

<details>
<summary>Legacy Wi-Fi Cards</summary>

**Broadcom**:

* BCM4328
  * iMac5,1-9,1
  * MacBook3,1-4,1
  * MacBookAir1,1-2,1
* BCM4321
  * MacPro2,1
  * Macmini4,1
* BCM4322
  * MacBook5,1
  * MacBookPro5,1 and 7,1
  * MacBookAir3,1-5,1
  * MacPro5,1
* BCM43224
  * MacBook6,1
  * MacBookPro6,1
* BCM4331
  * Macmini5,x
  * MacBookPro8,x-10,x

**Atheros**:

* AR242X/AR542X
  * MacBook1,1
  * Macmini1,1-2,1
* AR5418
  * MacBook2,1
* AR928X
  * iMac10,1-11,x
  * MacPro3,1
* AR93XX
  * iMac12,x

</details>
<br>

## **Solder/proprietary cards**

Apple's custom cards that no one else has, specifically called SOCs from Broadcom

* BCM4364 (Wi-Fi) + 4364B0 (Bluetooth 5.0)
  * iMac19,x
  * Macmini8,1
  * MacBookPro15,x
  * iMacPro1,1 - 4364(Bluetooth 4.2)
  * MacPro7,1 - 4364B3(Bluetooth 5.0)

* BCM4355
  * MacBookAir8,1
  

# What does an AirPort adapter look like?

![PCIe Adapter (Requires an extra USB port for Bluetooth)](https://i.imgur.com/AUtNhiB.jpg)

![M.2 NGFF B+M Adapter (Requires an extra USB port for Bluetooth)](https://i.imgur.com/MNt8xqq.jpg)

![M.2 NGFF A+E Adapter](https://i.imgur.com/NLUpEl3.jpg)

![Mini PCIe Adapter](https://i.imgur.com/wRaFDLt.jpg)
