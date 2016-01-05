/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var resultTable = [];
var currentValue = [0];

$(document).ready(function(){
    console.log("hey it's a me mario!");
    
    $("button").on("click", function(){
       if($(this).val() < 10){
           currentValue.push(($(this).val()));
       }
       else if($(this).val() < 15){
           console.log($(this).val());
           resultTable.push(parseFloat(currentValue.join('')));
           resultTable.push($(this).val());
           currentValue = [0];
       }
           
       else{
           for(var i = 1; i < resultTable.length; i++){
               
           }
       }
       console.log(resultTable);
    });
});

