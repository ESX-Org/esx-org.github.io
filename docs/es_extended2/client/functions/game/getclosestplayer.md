# utils.game.getClosestPlayer

```lua
utils.game.getClosestPlayer(includePlayer, coords, maxDistance)
```
This function returns a table with information about the closest player to a position or player

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
local player = utils.game.getClosestPlayer()
if next(player) then
  print(player.id, player.ped, player.coords, player.distance)
end
```

[Improve this documentation](https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/es_extended2/client/functions/game/getclosestplayer.md)
