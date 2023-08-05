$(document).ready(function() {

    AOS.init();

new Typed("#test",{
    strings: [
        "this is first sentence", 
        "this is second sentence", 
        "this is third sentence"
    ],
    typeSpeed: 100
})

$("#counter").counter()

})