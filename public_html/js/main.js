/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var resultTable = [];
var currentValue = [0];
var evalValue = "";


$(document).ready(function () {
    $("button").on("click", function () {
        if ($(this).val() === 'C'){
            currentValue = [0];
            return 0;
        }
        
        if ($(this).val() === 'AC'){
            resultTable = [0];
            evalValue = "";
            currentValue = [0];
            return 0;
        }
        
        if ($(this).val() === 'BS'){
            if(currentValue.length > 0){
                currentValue.pop();
            }
            else{
                currentValue = [0];
            }
            return 0;
        }
        
        
        if ($(this).val() < 10) {
            currentValue.push(($(this).val()));
            return 0;
        } 
        
        if (isNaN($(this).val())) {
            if ($(this).val() === '.') {
                currentValue.push(($(this).val()));
                
            } else if ($(this).val() === 'EV'){
                
                if(currentValue.length > 0){
                    resultTable.push(parseFloat(currentValue.join('')));
                }
                
                if(isNaN(resultTable[resultTable.length - 1])){
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

