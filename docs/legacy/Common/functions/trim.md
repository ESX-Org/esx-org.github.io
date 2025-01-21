# Math.Trim

```lua
ESX.Math.Trim(value)
```

This function trims a string, removing all trailing whitespaces. Often used when sanitizing the `GetVehicleNumberPlateText()` native.

## Example

```lua
local Vehicle = GetVehiclePedIsIn(ESX.PlayerData.ped, false) -- gets the vehicle the Player is in

local LicencePlate = GetVehicleNumberPlateText(Vehicle) -- returns the Vehicles Licence Plate

print(LicencePlate) -- prints " ESX 123"

local TrimmedPlate = ESX.Math.Trim(LicencePlate)

print(TrimmedPlate) -- prints "ESX 123"
```
