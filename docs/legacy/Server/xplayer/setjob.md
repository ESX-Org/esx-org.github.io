# setJob

```lua
xPlayer.setJob(name, grade, dutyState)
```

This functions sets the player job, the job must be defined in the `jobs` database table.

## Arguments

| Argument | Data Type     | Optional | Default Value | Explanation |
| -------- | ------------- | -------- | ------------- | ----------- |
| name     | string        | No       | -             | Job name    |
| grade    | string&number | No       | -             | Job grade   |
| grade    | boolean       | Yes      | -             | Job grade   |

## Example

```lua
local xPlayer = ESX.GetPlayerFromId(source)
local Job = 'police'
local Grade = 4 -- highest police grade
local DutyState = false -- setting the dutyState false

if ESX.DoesJobExist(Job, Grade) then -- make sure the Job and Grade are both defined in the database
  xPlayer.setJob(Job, Grade, DutyState)
end
```
