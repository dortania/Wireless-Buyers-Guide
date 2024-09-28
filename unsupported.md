# Supported/Unsupported Chipsets

With macOS, there's a limited amount of supported hardware regardless of which category, and wireless cards are no different.

## Supported chipsets

### Big Sur (11) and Monterey (12) and older

* BCM943602
* BCM94360
* BCM94352
* BCM94350

### Catalina (10.15) and older

* BCM943224
* BCM94331
  * May require you to force load IO80211Family.kext when running macOS Catalina; see `Kernel -> Force` in OpenCore for more details
* All those mentioned in Big Sur are also supported in Catalina

### Mojave (10.14) and older

* BCM94322
* All those mentioned in Catalina and newer are also supported in Mojave
* Mojave and up dropped support for all Atheros cards natively. Support for them can be restored with kexts listed on the next page.

### High Sierra (10.13) and older

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112
* All those mentioned in Mojave and newer are also supported in High Sierra

### El Capitan (10.11) and older

* BCM4311
* BCM4318
* BCM4306
* BCM4309
* BCM4321
* BCM4322
* All those mentioned in High Sierra and newer are also supported in El Capitan

# Unsupported Chipsets

## Broadcom

* BCM4312
* BCM4313
* BCM4356
* BCM43142
* BCM43228

## Atheros

* AR5424

## Intel

Currently no Intel chipsets are officially supported in macOS, however great work has been done in this space with itlwm: [Where's my Intel Wi-Fi?](../misc/intel.md):
