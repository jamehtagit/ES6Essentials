import Add from './includeinES6.js'
import {subtract} from './includeinES6.js'

///////////////////////////////////////
//Below Examples are shown in class 1//
////////////////////////////////////////

//Example 8: Working with import and export, named and default exports///
console.log(Add(1,2,3))

console.log(subtract(1,2))
///End of Example 8/////

//Example 6 push and spread operator
let arrayofnumbers = [20,40,50,60]
//mutating the array//

arrayofnumbers.push(90)

arrayofnumbers = [...arrayofnumbers,100]//directly mutating//

console.log(arrayofnumbers)

console.log(arrayofnumbers)

console.log("This is a string" + arrayofnumbers)
//End of exampple 6////

///Example let and const and the temporal dead zone///

/*console.log(letvariable)

let letvariable =1

console.log(varvariable)

var varvariable = 1*/

//Example 1://///////
function withLet()
{
for (let i=0;i<10;i++)
{
    setTimeout(()=>{console.log(i)},1000)
}
}
withLet()
/////End of Example 1////////

//Example 2://///////


function withVar()
{
for (var i=0;i<10;i++)
{
    setTimeout(()=>{console.log(i)},1000)
}
}

withVar()

//End of Example 2////////

//ES6
//1.string template literals
//2.arrow functions

///Example 3 : Arrow function and literal string///

let objschool = {name:'Narseemonjee institue of management',
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
///End of Example 3///////


///Example 4 : Object destructoring with spread operatorg///
let objschool1 = {name:'NarseeMonjee institute of management',
                  Rank:'10', course:'Accounts and Finance'}


let {name,Rank} = objschool1 //object destructuring ES6 feature

console.log(name)

////End of Example 4/////////
////Example 5: using map and filter

let arrayofnumber = [20,40,50,80,100]

let array1 =arrayofnumber.map((num,index)=>
{
     return num
}
)

console.log(arrayofnumber.filter((num) => num !== 80))



