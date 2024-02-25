import React from 'react'

const Customer = () => 
{
  class Customer
  {
  
    //We will reduce constructor boiler plate code by implementing 
    //parameter property inside the constructor
    constructor(private _firstName: string, private _lastName: string)
    {
     
    }


    public get firstName(): string //Getter access modifier
    {
        return this._firstName;
    }
    public set firstName(value: string) //setter access modifier
    {
      this._firstName = value;
    }

    public get lastName(): string //Getter access modifier
    {
      return this._lastName;
    }

    public set lastName(value: string)//setter access modifier
    {
     
      this._lastName = value;
    
    }

  }
  
  let myCustomer = new Customer("Martin","Darwin");
  
  myCustomer.firstName="Susan";   //setting teh value using set access modifier
  

 
  console.log(myCustomer.firstName);
  console.log(myCustomer.lastName);
 


  return (
    <div>
      
    </div>
  )
}

export default Customer


/*

* Developers of typescript will use `_...` as a convention. It is not any method.
* To use access modifiers in typescript we use keyword `get` and `set`
* To generate `get` and `set` automatically in this code. Go to the line where you have defined the attribute.
  select the index line. You will see a `Lightbulb`. Click on the `lightbulb` and you will see the `get` and `set` 
  options.


*/