# utils.game.getPedsInArea

```lua
utils.game.getPedsInArea(coords, maxDistance, modelFilter)
```
This function returns a table with information about all peds in range of a position or player

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| coords | vector3 | Yes | player coords | Calculate distance from the given coords |
| maxDistance | float | Yes | - | Maximum range for a ped to return data |
| modelFilter | table | Yes | - | Only entities with a whitelisted model will return data |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local peds = utils.game.getPedsInArea(false, 30, {[`a_m_y_skater_01`]=true, [`a_m_y_skater_02`]=true})
if next(peds) then
  for k, v in pairs(peds) do
    print(v.entity, v.distance, v.coords)
  end
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getpedsinarea.md)
