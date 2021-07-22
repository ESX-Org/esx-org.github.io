# utils.game.getPickupsInArea

```lua
utils.game.getPickupsInArea(coords, maxDistance, modelFilter)
```
This function returns a table with information about all peds in range of a position or player

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| coords | vector3 | Yes | player coords | Calculate distance from the given coords |
| maxDistance | float | Yes | - | Maximum range for a pickup to return data |
| modelFilter | table | Yes | - | Only entities with a whitelisted model will return data |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local pickups = utils.game.getPickupsInArea(false, 30, {[`PICKUP_AMMO_PISTOL`]=true, [`PICKUP_WEAPON_PISTOL`]=true})
if next(pickups) then
  for k, v in pairs(pickups) do
    print(v.entity, v.distance, v.coords)
  end
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getpickupsinarea.md)
