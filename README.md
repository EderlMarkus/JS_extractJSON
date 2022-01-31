# JS_extractJSON
A Javascript-Module for extracting JSONs from a String.

## Usage
  ```
  const extractJSON = require("extractjson");

  const str = `my string that has a json-object like this: {"parameter": "value"}, and also one with several layers: {"parameter": {"parameter2":"value"}}`;
  console.log(extractJSON(str));
  ```
 returns: ```[
    {
        "parameter": "value"
    },
    {
        "parameter": {
            "parameter2": "value"
        }
    }
]```

## Parameter
```extractJSON(string, levels)```</br>
<table>
  <tr>
    <th>ParameterName</th>
    <th>Description</th>
  </tr>
  <tr><td>String</td><td> the string you want to extract JSONs from.</td></tr>
   <tr><td>Levels (optional)</td><td>How many Levels deep should the given string be analysed? Defaults to 4.</td></tr>
</table>
