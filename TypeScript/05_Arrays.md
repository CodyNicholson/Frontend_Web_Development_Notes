# Arrays

```ts
// Creates an array of strings that only excepts
// string values
var employees: string[] = ["Bob", "Sally", "Sam"];
 
// This would cause an error
// employees.push(5);
 
// Print all values in array
document.write(employees.toString() + "<br />");
 
// You can create arrays of interfaces
var superheroes: SuperHero[] = [];
 
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});

document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
```
