# mini PCIe

So mini PCIe is most useful for users with older systems generally being pre-skylake as those systems don't have M.2 based wireless. With mini PCIe you have a couple options:

* Half Sized mini PCIe
* Full sized mini PCIe
* Apple Airport Card adapted to a full sized mini PCIe

For older laptop users you'll generally be limited to half sized mini PCIe wireless cards due to space constraints but for desktop users it's recommened to buy an Apple Airport Card with an adapter. Reason being is this avoids issues with PCI IDs not matching and not having drivers flags be set off, solutions are to force load the accompanying kext or modify the kext's PCI ID list to support your model.


For users of the half height have a couple options:

* BCM94360HMB(ABGN+AC, 3x3:3):

   * AzureWave AW-CB160H
   
* BCM94352HMB(ABGN+AC, 2x2:2):

   * AzureWave AW-CE123H
   * Dell DW1550
   * HP TPC-Q013
   * Lenovo Lite-On WCBN606BH



BCM94360HMB - 2.4/5 GHz, ac+abgn, 3 Stream, 1300 Mbs
BCM94360CD - 2.4/5 GHz, ac+abgn, 3 Stream, 1300 Mbs (PCIe x1, not HM)
BCM94331CD - 2.4/5 GHz, abgn, 3 stream, 450 Mbs + BT (4.0) 10.10+/Whitelist
BCM943224 HMS/HMB - 2.4/5, GHz abgn, 2 stream, 150/300 Mbs 10.10+/Whitelist
AR9280 - 2.4/5 GHz, abgn, 2 Stream, 300 Mbs
AR9380 - 2.4/5 GHz, abgn, 3 Stream, 450 Mbs
