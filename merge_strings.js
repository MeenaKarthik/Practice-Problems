const input = require('readline-sync');
let word1 = input.question("Provide first word: ");
let word2 = input.question("Provide second word: ");
let regex = /^[a-z]+$/;


if(regex.test(word1)&& regex.test(word2)){
  console.log(word1+" "+word2);
  let length1 = word1.length;
  let length2 = word2.length;
  let merge = '';
      if(length1 >=1 && length1 <= 100 && length2 >=1 && length2 <= 100){
      console.log("words length meets condition");
              if(length1<length2){
                let diff = length2-length1;
                for(let i=0;i<diff;i++){
                  word1 += ' ';
                }
              }else if(length1>length2){
                let diff = length1-length2;
                for(let i=0;i<diff;i++){
                  word2 += ' ';
                }
              }
              for(let i=0;i<word1.length;i++){
                merge += word1[i]+word2[i];
                
              }
              console.log("merged: "+merge);
              merge = merge.replaceAll(" ",'');
              console.log("after removing spaces, merged: "+merge);
              
      } else{
          console.log("words length condition fails");
      }
}
else
console.log("regex fails");



