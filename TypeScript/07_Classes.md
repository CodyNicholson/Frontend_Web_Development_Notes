# Classes

```ts
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
 
class Animal {
 
  // class fields
  public favFood: string;
 
  // static fields have values that are shared
  // by every object
  static numOfAnimals: number = 0;
 
  // If you define an attribute with private
  // the value is automatically assigned
  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }
 
  // You can define methods as private but then
  // it can't be seen by subclasses, or accessed
  // by any code other then that within the class
  ownerInfo() {
    document.write(this.name + " is owned by " + this.owner + "<br />");
  }
 
  // Static methods are accessed using the class
  // name
  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }
 
  // Define getters and setters
 
  private _weight: number;
 
  get weight(): number{
    return this._weight;
  }
 
  set weight(weight: number){
    this._weight = weight;
  }
 
}
 
// Create an Animal object
var spot = new Animal("Spot", "Doug");
 
spot.ownerInfo();
 
spot.weight = 100
 
document.write("Spot's weight is " + spot.weight + "<br />");
 
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
 
class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);
    Dog.numOfAnimals++;
  }
}
 
var grover = new Dog("Grover", "Jimmy");
 
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
 
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
```
