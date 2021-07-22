# utils.game.getClosestVehicle

```lua
utils.game.getClosestVehicle(coords, maxDistance, modelFilter)
```
This function returns a table with information about the closest vehicle to a position or player

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| coords | vector3 | Yes | player coords | Calculate distance from the given coords |
| maxDistance | float | Yes | - | Maximum range for a vehicle to return data |
| modelFilter | table | Yes | - | Only entities with a whitelisted model will return data |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local vehicle = utils.game.getClosestVehicle(false, 30, {[`sultan`]=true, [`jester`]=true})
if next(vehicle) then
  print(vehicle.entity, vehicle.distance, vehicle.coords)
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getclosestvehicle.md)
