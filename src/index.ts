import { hello, hi, nice } from "./component";
import { Layout } from "@components";
import { handleSomething } from "./header";

class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const a = new Person("Hai Bui");
console.log("a", a);
console.log(hello, hi, nice);

console.log(Layout());
console.log(handleSomething());
