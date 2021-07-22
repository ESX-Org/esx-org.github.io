# utils.game.getPlayersInArea

```lua
utils.game.getPlayersInArea(includePlayer, coords, maxDistance)
```
This function returns a table with information about all players in range of a position or player

### Arguments
| Argument      | Data Type | Optional | Default Value | Explanation |
|---------------|-----------|----------|---------------|-------------|
| includePlayer | boolean | Yes | - | Is the player a valid target |
| coords | vector3 | Yes | player coords | Calculate distance from the given coords |
| maxDistance | float | Yes | 100 | Maximum range a player can be to return data |

### Dependency
```lua
local utils = M("utils")
```

### Example
```lua
local players = utils.game.getPlayersInArea()
if next(players) then
  for k, v in pairs(players)
    print(v.id, v.ped, v.coords, v.distance)
  end
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getplayersinarea.md)
