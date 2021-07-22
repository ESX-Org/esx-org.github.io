# utils.game.getVehiclesInArea

```lua
utils.game.getVehiclesInArea(coords, maxDistance, modelFilter)
```
This function returns a table with information about all peds in range of a position or player

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
local vehicles = utils.game.getVehiclesInArea(false, 30, {[`sultan`]=true, [`jester`]=true})
if next(vehicles) then
  for k, v in pairs(vehicles) do
    print(v.entity, v.distance, v.coords)
  end
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getvehiclesinarea.md)
