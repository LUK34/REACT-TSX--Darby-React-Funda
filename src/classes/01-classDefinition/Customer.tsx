import React from 'react'

const Customer = () => 
{
  class Customer
  {
    firstName: string;
    lastName: string;
  
    constructor(theFirst: string, theLast: string)
    {
      this.firstName = theFirst;
      this.lastName = theLast;
    }
  }
  
  let myCustomer = new Customer("Martin","Darwin");
  
  
  
  console.log(myCustomer.firstName);
  console.log(myCustomer.lastName);
  


  return (
    <div>
      
    </div>
  )
}

export default Customer


