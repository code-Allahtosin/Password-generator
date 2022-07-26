const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1box=document.getElementById('p1box')
let p2box=document.getElementById('p2box')
let i=0


function generatePassword(){
    p1box.textContent=''
    p2box.textContent=''

    for (i=0;i< 15; i++){
        p1box.textContent+=charRand()
        p2box.textContent+=charRand()
    }
         
}

//Function to copy clicked password into clipboard
function copy(a){
    // genPass1=document.getElementById('p1box').innerText
    whatToCopy=document.getElementById(a).innerText

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = whatToCopy;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    // alert("Copied the text: " + whatToCopy);
    // var dummyContent = genPass1;
    // var dummy = $('<input>').val(dummyContent).appendTo('body').select()
    // document.execCommand('copy')
    // genPass1.select();
    // navigator.clipboard.writeText(genPass1.value)
    
    document.getElementById('popup').style.opacity = '1';
    // If you want to remove it from the page after the fadeout
    document.getElementById('popup').addEventListener('transitionend', () => document.getElementById('popup').style.opacity='0');
}


//Function to return a random character from the characters array.
function charRand(){    
    let  a = Math.floor(Math.random()*characters.length)
    return characters[a]
}
