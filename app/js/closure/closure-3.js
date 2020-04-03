/*
    Set time out closes over var i
    the same i is used for each loop unless chage it to let
    (ver i = 1; i <= 5; i++) - (let i = 1; i <= 5; i++)
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);

    setTimeout(function() {
        console.log(i);
    }, 1000);
}
