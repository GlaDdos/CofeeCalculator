/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var resultTable = [];
var currentValue = [0];
var evalValue = "";

function updateView(){
    
    var strHTML = "";
    if(arguments.length === 1){
        strHTML = "<h3> " + parseFloat(arguments[0].join('')) + "</h3>";
    }else if(arguments.length === 2){
        strHTML = "<h3> " + parseFloat(arguments[0].join('')) +" "+ "</h3>";
    }
    
    $(".result-container").html(strHTML);
}


$(document).ready(function () {
    $("button").on("click", function () {
        if ($(this).val() === 'C'){
            currentValue = [];
            updateView([0]);
            return 0;
        }
        
        if ($(this).val() === 'AC'){
            resultTable = [0];
            evalValue = "";
            currentValue = [0];
            updateView(currentValue);
            return 0;
        }
        
        if ($(this).val() === 'BS'){
            if(currentValue.length > 1){
                currentValue.pop();
                updateView(currentValue);
                return 0;
            }
            else{
                currentValue = [0];
                //updateView(currentValue);
            }
            updateView(currentValue);
            return 0;
        }
        
        
        if ($(this).val() < 10) {
            currentValue.push(($(this).val()));
            updateView(currentValue);
            return 0;
        } 
        
        if (isNaN($(this).val())) {
            if ($(this).val() === '.') {
                currentValue.push(($(this).val()));
                updateView(currentValue);
                
            } else if ($(this).val() === 'EV'){
                
                if(currentValue.length > 0){
                    resultTable.push(parseFloat(currentValue.join('')));
                }
                
                if(isNaN(resultTable[resultTable.length - 1])){
                    resultTable.pop();
                    console.log("Syntax Error!");
                    return 0;
                }
                
               
                for (var i = 0; i < resultTable.length; i++) {
                    evalValue += resultTable[i];
                    console.log(evalValue);
                }
                
                resultTable = [];
                resultTable[0] = eval(evalValue);
                evalValue = "";
                currentValue = [];
                updateView(resultTable);
                
            } else {
                 
                if (currentValue.length === 0 && isNaN(resultTable[resultTable.length - 1])) {
                    resultTable.pop();
                    resultTable.push($(this).val());
                } else {
                    if(currentValue.length > 0 && isNaN(resultTable[resultTable.length - 1])){
                        resultTable.push(parseFloat(currentValue.join('')));
                    } else if(currentValue.length > 0){
                        resultTable = [];
                        resultTable.push(parseFloat(currentValue.join('')));
                    }
                    resultTable.push($(this).val());
                    currentValue = [];
                }
                              
            }

        } 
        console.log(resultTable);
    });
});

