function createRandomColor(){
    let hex ="1234567890ABCDEF";
    let str ="#";

    for(let i=0;i<6;i++){
        let clr= Math.floor(Math.random()*(hex.length-1)+1);
        str +=hex[clr];
    }

    document.body.style.backgroundColor=str;
    console.log(str)
}
