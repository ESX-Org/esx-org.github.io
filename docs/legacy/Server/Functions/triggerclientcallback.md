# TriggerClientCallback

```lua
ESX.TriggerClientCallback(name, source, cb, ...args)
```

This function triggers a client callback. See [ESX.RegisterClientCallback](./../../client/functions/registerclientcallback) on registering client callbacks.

## Arguments

| Argument | Data Type | Optional | Default Value | Explaination                                                                                                                                                         |
| -------- | --------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | string    | No       | -             | A valid client callback name                                                                                                                                        |
| source   | number    | No       | -             | The source of the player to trigger the callback on                                                                                                                  |
| cb       | function  | No       | -             | The returned function when the async task has completed. The invoked function a varied size of arguments depending on how many arguments are parsed from the client |
| args     | any       | Yes      | -             | Any arguments to parse to the async function                                                                                                                        |

## Example

```lua
local myArgument = 'hello'

ESX.TriggerClientCallback('esx_example:test', source, function(isBusy, numKills)
  print(isBusy, numKills)
  print('this code is an asynchronous task')
end, myArgument)

print('this code is running in sync')
```
