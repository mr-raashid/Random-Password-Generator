var keylist = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var temp = ''
    function generatepass(plength){
        temp = ''
        for (i = 0; i < plength; i++){
            temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        return temp
    }
    function populateform(enterlength){
        document.passGen.output.value = generatepass(enterlength)
    }

document.getElementById("test").innerHTML = populateform();