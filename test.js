// function squareDigits(num){
//     let str = num +"";
//     let arr = str.split("");
//     let arrN = arr.map(Number);
//     let arrN2 = arrN.map( number => number**2);

//     result = arrN2.reduce( (acc, next) => `${acc}${next}` );

//     console.log(typeof result)

//     return result;


//   }


//   function squareDigits(num){
//     let str = num +"";
//     let arr = str.split("");
//     let arrN = arr.map(Number);
//     let arrN2 = arrN.map( number => number**2).join("");

//     result = parseInt(arrN2,10);

//     return result;
//   }

function isIsogram(str){
    if(str === ""){
        return true
    }

    let lowerCase = str.toLowerCase();
    for(i=0; i< lowerCase.length; i++){


        if( lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])){
            return true;
        }
        else{
            return false
        }
    }

  }

  isIsogram("moOse");
  console.log(isIsogram("moOse"));

  isIsogram("aba");
  console.log(isIsogram("aba"));

  isIsogram("isIsogram");
  console.log(isIsogram("isIsogram"));