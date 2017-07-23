'use strict';

angular.module('core.expense').
    factory('ExpenseDateService', ExpenseDateService);

function ExpenseDateService() {
//    return {expenseDate : ""};
    var expenseDate = "";
//    this.getExpenseDate = function() {
//        return expenseDate;
//    };

    return {
        setExpenseDate: function(expenseDateParam) {
            expenseDate = expenseDateParam;
        },
        getExpenseDate: function() {
            return expenseDate;
        }
    }
}