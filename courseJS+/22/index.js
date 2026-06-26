import { wellcome , hola , PI , People} from "./module1.js";
//console.log(PI)
//document.querySelector(".ko").textContent = (hola())
const eleve1 = new People("aziz",18);
//eleve1.hi();
//console.log(People.ref)

function func1(callback) {
    setTimeout(() => {console.log("Task 1");
                      callback();}
                      ,3000 )
}
function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}
func1(func2)