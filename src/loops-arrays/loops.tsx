import React from 'react'

const loops = () => 
{
  /* CASE 1: For loop example */
  console.log('CASE 1: For loop example');
  for(let i=0;i<=5;i++)
  {
    console.log(i);
  }

  /* CASE 2: Array of Numbers */
  console.log('CASE 2: Arrays of Numbers')
  let reviews: number[]=[1,12,13,4,6];
  for(let j=0;j<reviews.length;j++)
  {
    console.log(reviews[j]);
  }

  /* CASE 3: Arrays of Numbers + Total */
  console.log('CASE 3: Arrays of Numbers + Total')
  let reviews1: number[]=[1,12,13,4,6];
  let total: number=0;

  for(let j=0;j<reviews1.length;j++)
  {
    console.log(reviews1[j]);
    total+=reviews1[j];
  }
  console.log(`Total: ${total}`);

  let average: number= total/reviews1.length;
  console.log(`Average: ${average}`);

   /* CASE 4: Arrays of Strings */

  console.log(`CASE 4: Arrays of Strings`);
  let sportOne: string[]=[`Golf`,`Football`,`Cricket`,`Volleyball`];
  for (let k=0; k < sportOne.length; k++)
  {
    console.log(sportOne[k]);
  }

  /* CASE 5: Simplified FOR LOOP */
  console.log(`CASE 5: Simplified FOR LOOP `);
  for(let t of sportOne)
  {
    console.log(t);
  }

   /* CASE 5: Simplified FOR LOOP  IF condition */
   console.log(`CASE 5: Simplified FOR LOOP `);
   for(let t of sportOne)
   {
    if(t ===`Cricket`)
    {
      console.log(`Favourite Sport: ${t}`);
    }
     
   }

      /* CASE 6: Growable Array */
      console.log(`CASE 6: Growable Array `);
   let sportTwo: string[]=[`Golf`,`Football`,`Cricket`,`Volleyball`]

   sportTwo.push(`Baseball`);
   sportTwo.push(`Badminton`);

   console.log(`${sportTwo}`);


  return (
    <div>
      
    </div>
  )
}

export default loops
