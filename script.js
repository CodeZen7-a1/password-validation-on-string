userID = document.querySelector("#getstr")
pass = document.querySelector("#passGet")
const ResultCon = document.querySelector("#result")


function CheckPassword() {
    inputPass = pass.value
    console.log(inputPass.length)
    const CapitalLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const Num = "1234567890"

    if (inputPass.length < 6)
         {
        console.log("Character must be greater than or equal to 6")
        ResultCon.textContent = `Character must be greater than or equal to 6`
    }
    else {
        for (i = 0; i < inputPass.length; i++) 
            {
            if (Num.includes(inputPass[i])) 
                {
                console.log("Character must not include any number")
                ResultCon.textContent = `Character must not include any number`
            }
             else if (CapitalLet.includes(inputPass[i])) 
                {
                console.log
            }
            else {
                console.log("Character must include Capital letter")
                ResultCon.textContent = `Character must include Capital letter`

            }
            
        }
    }


}

