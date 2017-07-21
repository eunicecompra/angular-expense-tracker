'use strict';

angular.module('expenseInput').
    component('expenseInput', {
        templateUrl: 'expense-input/expense-input.template.html',
        controller: function ExpenseInputController() {
            var self = this;
            self.categories = ['FOOD', 'TRANSPORTATION', 'GROCERIES', 'SHOPPING', 'OTHERS'];
            self.category = '';
            self.desc = '';
            self.cost = 0;

        }


    });