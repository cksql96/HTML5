
//-----------------------------------------------------------//
// To set AJax commmon settings.
// Especially, Ajax local events lifecycle handlers.
//-----------------------------------------------------------//

$.ajaxSetup({
    async: true,
    cache: true,

    // beforeSend: function(XHR) {
    //     console.log("****************************************");
    //     console.log("1. beforeSend(XHR) invoked...");
    //     console.log("****************************************");

    //     printXHR1(XHR)
    // },   //beforeSend:fucntion(XHR)

    // complete: function(XHR) {
    //     console.log("****************************************");
    //     console.log("3. complete(XHR) invoked...");
    //     console.log("****************************************");

    //     printXHR1(XHR)
    // }  //complete

});  //ajaxSetup

function printXHR1(XHR) {
    console.log("+XHR:", XHR);
    console.log("\t1. readyState:", XHR.readyState);
    console.log("\t2. state:", XHR.state() );
    console.log("\t3. status:", XHR.status);
    console.log("\t4. statusText:", XHR.statusText);

}   //printXHR1