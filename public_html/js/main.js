/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var values = [];
var currentValue = [];

$(document).ready(function(){
    console.log("hey it's a me mario!");
    
    $("button").on("click", function(){
       console.log("clicked : " + $(this).val());
       
       if(isNaN($(this).val())){
//           TODO Switch? for all non numerical inputs
//           TODO reseting current value after pressing non numerical
//           TODO add backspace and ac buttons
//           TODO only 2 variables are enough? stores sum other current value?
       }
       else{
           currentValue.push(($(this).val()));
       }
       
       
       console.log(parseFloat(currentValue.join('')));
       
    });
});

