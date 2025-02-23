# getJob

```lua
xPlayer.getJob()
```

This function returns the current player job object.

## Returned Table Content

| Child        | Data Type | Explanation       |
| ------------ | --------- | ----------------- |
| id           | number    | Job identifier id |
| name         | string    | Job name          |
| label        | string    | Job label         |
| grade        | number    | Job grade         |
| grade_name   | string    | Grade name        |
| grade_label  | string    | Grade label       |
| grade_salary | number    | Grade salary      |
| skin_male    | table     | Male skin         |
| skin_female  | table     | Female skin       |
| onDuty       | boolean   | Job Duty State    |