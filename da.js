var figure = {
    0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-40px -16px','-372px -17px', '-484px -22px','-263px -19px'],
    1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
    2 : ["a","a","a","a","a","a","a","a"],
    3 : ["a","a","a","a","a","a","a","a"],
    4 : ["a","a","a","a","a","a","a","a"],
    5 : ["a","a","a","a","a","a","a","a"],
    6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
    7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-40px -116px','-372px -116px', '-484px -116px','-263px -116px'],
};//Array of figures
var hod =true;//for turns

drawBoard();

function drawChess(){
    let mainBlock=document.querySelector(".main-block");// refers to main-block
    let block=mainBlock.querySelectorAll("div");//refers to  squares
    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (  figure[i][j]!=="a"){
                block[i*8+j].style.backgroundImage = 'url(сhess_symbols_set_.png)';
                block[i*8+j].style.backgroundPosition = figure[i][j];
            }//draw figures
            if(figure[i][j]=="a"){
                block[i*8+j].style.backgroundImage = null;
                block[i*8+j].style.backgroundPosition = figure[i][j];
            }//draw void
        }
    }
    hod=!hod//swap turns
}
function drawBoard(){//draw first board
   let  mainBlock = document.querySelector('.main-block');// create main-block
     
    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
           
            let block= document.createElement('div');// create squares

            if (i%2==j%2!=0) block.className = 'block black';//draw black block
            else block.className = 'block white';//draw white block

            if (  figure[i][j]!=="a"){
                block.style.backgroundImage = 'url(сhess_symbols_set_.png)';
                block.style.backgroundPosition = figure[i][j];
            }//draw figures
            
            block.onclick=()=>{
                click(i,j)
            }//click on a board

            mainBlock.appendChild(block);   //save board
            }
        }
    }
function click(i,j){
if ( figure[i][j]!="a" ){
    if(hod==true){
         switch(figure[i][j]){//white pawn
             case '-595px -116px':
            pawn(figure,i,j);
            drawChess();   
        }     
    } 
    if(hod==false){
        switch(figure[i][j]){
            case '-595px -19px':
            console.log("a");
           pawn(figure,i,j);
           drawChess();//black pawn
       }       
    }            
    }         
} 
function pawn(arr,i,j){
    if(hod==true){
    arr[i-1][j]=arr[i][j];
    arr[i][j]="a";//white pawn
    }
    if(hod==false){
    arr[i+1][j]=arr[i][j];
    arr[i][j]="a"; //black pawn
    }
}