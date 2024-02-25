import React from 'react'

const sampleCase = () => 
{
  let found: boolean = true;
  let grade: number = 88.6
  let firstName: string = `Anup`;
  let lastName: string=`Kumar`;

  console.log(found);
  console.log("The grade is "+ grade);
  console.log("Hi " + firstName + " " + lastName);
  console.log(`Template Literal example: Hi ${firstName} and ${lastName}`);



  return (
    <div>
    
    </div>
  )
}

export default sampleCase
