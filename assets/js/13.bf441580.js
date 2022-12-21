(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{397:function(e,t,r){"use strict";r.r(t);var a=r(28),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"when-and-what-kexts-to-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#when-and-what-kexts-to-use"}},[e._v("#")]),e._v(" When and what kexts to use")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#broadcom"}},[e._v("Broadcom")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#intel"}},[e._v("Intel")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#atheros"}},[e._v("Atheros")])])]),e._v(" "),r("h2",{attrs:{id:"broadcom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#broadcom"}},[e._v("#")]),e._v(" Broadcom")]),e._v(" "),r("h3",{attrs:{id:"airportbrcmfixup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airportbrcmfixup"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirportBrcmFixup"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This is needed to fix wifi on many Broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old Broadcom kexts into newer versions of macOS.")]),e._v(" "),r("ul",[r("li",[e._v("Note: Apple AirPort and Fenvi cards do not need this kext")])]),e._v(" "),r("h3",{attrs:{id:"brcmpatchram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#brcmpatchram"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrcmPatchRAM"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Required for all non-Apple manufactured wireless cards due to how firmware is handled. This is actually a bundle of multiple kexts:")]),e._v(" "),r("ul",[r("li",[e._v("BrcmBluetoothInjector\n"),r("ul",[r("li",[e._v("Do not use with macOS 12, use BlueToolFixup instead")]),e._v(" "),r("li",[e._v("If you dual boot both macOS 11 or under and macOS 12, "),r("code",[e._v("MinKernel")]),e._v(" and "),r("code",[e._v("MaxKernel")]),e._v(" under "),r("code",[e._v("Kernel -> Add")]),e._v(" in your config can be used to load one kext or the other in a specific OS")])])]),e._v(" "),r("li",[e._v("BrcmFirmwareData")]),e._v(" "),r("li",[e._v("BrcmPatchRAM fix:\n"),r("ul",[r("li",[e._v("BrcmPatchRAM3 for macOS 10.14+ (must be paired with BrcmBluetoothInjector unless on macOS 12)")]),e._v(" "),r("li",[e._v("BrcmPatchRAM2 for macOS 10.11-10.14")]),e._v(" "),r("li",[e._v("BrcmPatchRAM for macOS 10.10 and older")])])]),e._v(" "),r("li",[e._v("BlueToolFixup:\n"),r("ul",[r("li",[e._v("Used in place of BrcmBluetoothInjector on macOS 12")]),e._v(" "),r("li",[e._v("See above dual booting note")])])])]),e._v(" "),r("p",[e._v("Note:")]),e._v(" "),r("ul",[r("li",[e._v("Apple AirPort and Fenvi cards do not need these kexts")]),e._v(" "),r("li",[e._v("OpenCore order: BrcmBluetoothInjector or BlueToolFixup -> BrcmFirmwareData -> BrcmPatchRAM")])]),e._v(" "),r("h2",{attrs:{id:"intel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intel"}},[e._v("#")]),e._v(" Intel")]),e._v(" "),r("h3",{attrs:{id:"itlwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#itlwm"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("itlwm"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("itlwm"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("itlwm.kext uses Apple's IOEthernet, is more stable than AirportItlwm.kext, and is completely based on open-source resources")]),e._v(" "),r("li",[e._v("AirportItlwm.kext uses Apple's IO80211, which is less stable than itlwm.kext, but supports certain Continuity features")]),e._v(" "),r("li",[e._v("Unfortunately, neither kext supports AirDrop; see here for features and limitations: "),r("a",{attrs:{href:"https://openintelwireless.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenIntelWireless"),r("OutboundLink")],1)])])])]),e._v(" "),r("h3",{attrs:{id:"intelbluetoothfirmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intelbluetoothfirmware"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelBluetoothFirmware"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Adds Bluetooth support to macOS when paired with an Intel wireless card")]),e._v(" "),r("h2",{attrs:{id:"atheros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atheros"}},[e._v("#")]),e._v(" Atheros")]),e._v(" "),r("h3",{attrs:{id:"high-sierra-s-io80211family"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#high-sierra-s-io80211family"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/khronokernel/IO80211-Patches/blob/main/10.13.6-High-Sierra-Kexts/IO80211HighSierra.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("High Sierra's IO80211Family"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This kext is required for all Atheros chipsets that had support dropped in Mojave, these include:")]),e._v(" "),r("ul",[r("li",[e._v("AR242x")]),e._v(" "),r("li",[e._v("AR542x")]),e._v(" "),r("li",[e._v("AR5416")]),e._v(" "),r("li",[e._v("AR5418")]),e._v(" "),r("li",[e._v("AR9280 - AR5BHB92")]),e._v(" "),r("li",[e._v("AR9285 - AR5B95")]),e._v(" "),r("li",[e._v("AR9287 - AR5B97")]),e._v(" "),r("li",[e._v("AR9380 - AR5BXB112")])]),e._v(" "),r("h3",{attrs:{id:"ath9kfixup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ath9kfixup"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/chunnann/ATH9KFixup",target:"_blank",rel:"noopener noreferrer"}},[e._v("ATH9KFixup"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("To be paired with AirPortAtheros40 to fix support for many unsupported Atheros cards, similar idea to AirportBrcmFixup:")]),e._v(" "),r("ul",[r("li",[e._v("AR946X (AR9462 & AR9463)")]),e._v(" "),r("li",[e._v("AR9485")]),e._v(" "),r("li",[e._v("AR9565")])]),e._v(" "),r("h3",{attrs:{id:"athbluetoothfirmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#athbluetoothfirmware"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/zxystd/AthBluetoothFirmware/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AthBluetoothFirmware"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Required to ensure Bluetooth firmware is loaded correctly in macOS")])])}),[],!1,null,null,null);t.default=o.exports}}]);