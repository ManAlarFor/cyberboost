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

//Gallery

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

    // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}