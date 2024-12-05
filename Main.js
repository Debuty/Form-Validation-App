

const Name_Input = document.querySelector(".Name_Input")
const Name_Error = document.querySelector(".Name_Error")


const Phone_Input = document.querySelector(".Phone_Input")
const Phone_Error = document.querySelector(".Phone_Error")


const Email_Input = document.querySelector(".Email_Input")
const Email_Error = document.querySelector(".Email_Error")


const Massege_Input = document.querySelector(".Massege_Input")
const Massege_Error = document.querySelector(".Massege_Error")


const Submit = document.querySelector(".Submit")


let Name_Pattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

let Phone_Pattern = /^\d{11}$/;

let Email_Pattern = /^[A-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




Submit.onclick = (submit) => {


    let Test_Name_Pattern = Name_Pattern.test(Name_Input.value)

    let Test_Phone_Pattern = Phone_Pattern.test(Phone_Input.value)

    let Test_Email_Pattern = Email_Pattern.test(Email_Input.value)


    if (!(Test_Name_Pattern && Test_Phone_Pattern && Test_Email_Pattern)) {

        submit.preventDefault();

        if (!Test_Name_Pattern) {

            Name_Input.nextElementSibling.style.display = "inline "; 
          Name_Input.nextElementSibling.innerHTML="Name Is Wrong"
     
          
        }

        if (!Test_Phone_Pattern) {
            Phone_Input.nextElementSibling.style.display = "inline "; 
             Phone_Input.nextElementSibling.innerHTML=" Phone Is Wrong"
          
        }

        if (!Test_Email_Pattern) {
            Email_Input.nextElementSibling.style.display = "inline "; 
             Email_Input.nextElementSibling.innerHTML="Email Is Wrong"
           
        }

    }






}


document.body.oninput = (e) => {


    if (e.target.value.length == 0 && !(e.target.id == "MessageId")) {

        e.target.nextElementSibling.style.display = "inline "; 
        e.target.nextElementSibling.innerHTML = `${e.target.id} required`

    }

      else { e.target.nextElementSibling.style.display = "none "; }


    //  console.log(e.target.nextElementSibling)

}