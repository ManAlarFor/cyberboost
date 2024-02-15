/**********************************************************************************************************/
/*                                     Fuctions for Cyberboost web                                        */
/*                                        Author: Manuel Alarcon                                          */
/*                                             version: 1.0                                               */
/**********************************************************************************************************/

function sound(element){
    document.getElementById(element).play();
}

function silence(element){
    document.getElementById(element).pause();
}

function validate(){
    let username = document.getElementById('username').value ;
    let password = document.getElementById('password').value ;
    let email = document.getElementById('email').value ;
    let valor = true ;

    if (username=="" || ! /^[A-Za-zñÑ0-9]+$/.test(username)){
        document.getElementById('usernameHelp').style.visibility="visible" ;
        document.getElementById('username').style.borderColor="red" ;
        valor = false ;
    }

    if (password==""  || ! /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) ){
        document.getElementById('passwordHelp').style.visibility="visible" ;
        document.getElementById('password').style.borderColor="red" ;
        valor = false ;
    }

    if (email==""  || ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ){
        document.getElementById('emailHelp').style.visibility="visible" ;
        document.getElementById('email').style.borderColor="red" ;
        valor = false ;
    }


    return valor ;

}