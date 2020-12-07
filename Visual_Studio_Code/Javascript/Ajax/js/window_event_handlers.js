
//-----------------------------------------------------------//
// To set the load / unload event handlers for window
//-----------------------------------------------------------//

$(window).load(function (e) {
    console.debug(">>> onload event for window triggered.");

    console.debug("\t+e:", e);
});  //window.load

$(window).unload(function (e) {
    console.debug(">>>onunload event for window triggered.");

    console.debug("\te:", e);
});  //window.unload