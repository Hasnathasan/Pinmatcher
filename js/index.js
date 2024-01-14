document.getElementById('genarateBtn').addEventListener('click', function(){
    const random = genarateRamdom();
    setValue('pin-genarate', random);
    const pinMatch = document.getElementById('pinMatch');
    pinMatch.style.display = 'none';
    const pinUnmatch = document.getElementById('pinUnmatch');
    pinUnmatch.style.display = 'none';
});
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number) === false){
        const inputCheck = document.getElementById('inputCheck');
        inputCheck.value = inputCheck.value + number;
    }
});
document.getElementById('submit').addEventListener('click', function(){
    const otp = document.getElementById('pin-genarate');
    const otpMatcher = document.getElementById('inputCheck');
    if(otp.value === otpMatcher.value){
        const pinMatch = document.getElementById('pinMatch');
        pinMatch.style.display = 'block';
    }
    else{
        const pinUnmatch = document.getElementById('pinUnmatch');
        pinUnmatch.style.display = 'block';
    }
    otp.value = '';
    otpMatcher.value = '';
})




function genarateRamdom(){
    const pin = random();
    const pinstring = pin + '';
    console.log(pinstring);
    if(pinstring.length === 4){
        return pin;
    }
    else{
        return random();
    }
}
function random(){
    const random = Math.round(Math.random()*10000);
    return random;
}
function setValue(id, value){
    const addressToSet = document.getElementById(id);
    addressToSet.value = value;
}