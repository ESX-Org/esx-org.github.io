# RegisterClientCallback

```lua
ESX.RegisterClientCallback(name, handler)
```

This function registers a client callback, which is used for sending Client Data, to the Server.

## Arguments

| Argument | Data Type | Optional | Default Value | Explaination                                                                                                      |
| -------- | --------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| name     | string    | No       | -             | Client callback name                                                                                             |
| cb       | function  | No       | -             | Callback function, which contains an varied size of arguments depending on how many arguments parsed from client |
| ...args  | any       | No       | -             | The args provided after the handler on the client TriggerClientCallback                                          |

## Example

```lua
local myVariable = 'hello'

ESX.RegisterClientCallback('esx_example:test', function(cb, myArgument)
  print(myArgument)
  print('this code is an asynchronous task')
  cb(myVariable)
end)

print('this code is running in sync')
```
