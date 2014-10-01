logTable.js
===========

Logs an array of javascript objects in a text table format in the console

##Usage
Example array:
```
var testDB = [
        {'first_name': 'Millard', 'last_name': 'Evans', 'age': 34, 'state': 'Texas'},
        {'first_name': 'Sally', 'last_name': 'Barrows', 'age': 42, 'state': 'California'},
        {'first_name': 'George', 'last_name': 'Whitman', 'age': 27},
        {'first_name': 'Timothy', 'last_name': 'Hudson', 'age': 46, 'state': 'North Carolina'},
        {'first_name': 'Samantha', 'last_name': 'Carrington', 'age': 27},
        {'first_name': 'Gerald', 'last_name': 'Ross', 'age': 35, 'state': 'Washington'}
]
```

Log this array to a table:
```
arrayOfObjects.logTable()
```

The output is:
```
+------------------------------------------------+
| first_name | last_name  | age | state          |
+------------------------------------------------+
| Millard    | Evans      | 34  | Texas          |
| Sally      | Barrows    | 42  | California     |
| George     | Whitman    | 27  |                |
| Timothy    | Hudson     | 46  | North Carolina |
| Samantha   | Carrington | 27  |                |
| Gerald     | Ross       | 35  | Washington     |
+------------------------------------------------+
```
