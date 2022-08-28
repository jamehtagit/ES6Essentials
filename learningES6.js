import Add  from './includeinES6.js'
import {subtract}  from './includeinES6.js'

console.log(Add(1,2,3))

console.log(subtract(1,2))

let arrayofnumbers = [20,40,50,60]
//mutating the array//

arrayofnumbers.push(90)

arrayofnumbers = [...arrayofnumbers,100]//directly mutating//

console.log(arrayofnumbers)

console.log(arrayofnumbers)

console.log("This is a string" + arrayofnumbers)

console.log(`${} is the name of college`)

/*let objschool = {name:'Narseemonjee institue of management',
                 Ranking:'Top 10',
                Course:"Accounts and Finance",
                displayInfo:function abc(){
                
                    () =>
                    {
                        console.log(`${this.name} is ${this.Ranking} and specializes in ${this.Course}`)
                    }
                    
                    }
        }
        //String literals//
//arrow function does not have its own this
objschool.displayInfo()
*/
//ES6
//1.string template literals
//2.arrow functions

/*let objschool1 = {name:'NarseeMonjee institute of management',
                  Rank:'10', course:'Accounts and Finance'}


let {name,Rank} = objschool1 //object destructuring ES6 feature

console.log(name)*/

//map,filter,reduce,findIndex//

/*let arrayofnumber = [20,40,50,80,100]

/*let array1 =arrayofnumber.map((num,index)=>
{
     return num
}
)*/

//console.log(arrayofnumber.filter((num) => num !== 80))



