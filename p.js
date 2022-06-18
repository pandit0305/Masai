// Given a square matrix print both the diagonals

// declare a matrix of nxn size

let arr =[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]
let row = arr.length;
let col = arr[0].length;

for(let i=0; i<row; i++){
  let val =[];
  for(let j=0; j<col; j++){
    let v = arr[i][j];
    if(i==j || i+j ==row-1){
      // console.log(v)
      val += v+' ';
    }
  }
  console.log(val);
      
}