# utils.game.getClosestPickup

```lua
utils.game.getClosestPickup(coords, maxDistance, modelFilter)
```
This function returns a table with information about the closest pickup to a position or player

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| coords | vector3 | Yes | player coords | Calculate distance from the given coords |
| maxDistance | float | Yes | - | Maximum range for an pickup to return data |
| modelFilter | table | Yes | - | Only entities with a whitelisted model will return data |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local pickup = utils.game.getClosestPickup(false, 30, {[`PICKUP_AMMO_PISTOL`]=true, [`PICKUP_WEAPON_PISTOL`]=true})
if next(pickup) then
  print(pickup.entity, pickup.distance, pickup.coords)
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getclosestpickup.md)
