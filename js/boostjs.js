/**********************************************************************************************************/
/*                                     Fuctions for Cyberboost web                                        */
/*                                        Author: Manuel Alarcón                                          */
/*                                             version: 1.0                                               */
/**********************************************************************************************************/

function sound(element){
    document.getElementById(element).play();
}

function silence(element){
    document.getElementById(element).pause();
}