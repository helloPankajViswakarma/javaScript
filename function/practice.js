// function coutVowels(str){
//     // MakhanlalChaturvediVniversity
//     let count = 0;
//     for(const char of str){
//         if(char ==="a" || 
//          char ==="e" ||
//          char ==="i" ||
//           char ==="o"||
//          char==="u" ){
//             count++;
//         }
//     }
//     console.log(count);

//  }
// // const thisString=coutVowels("Makhanlal");
// // document.write(thisString);
// coutVowels("Makhanlal");

const countVow =(str) =>{
    let count = 0;
    for(const char of str){
        if(char ==="a" || 
         char ==="e" ||
         char ==="i" ||
          char ==="o"||
         char==="u" ){
            count++;
        }
    }
    console.log(count);
}
countVow("makhanlal");