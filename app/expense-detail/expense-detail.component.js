'use strict';

angular.module('expenseDetail').
    component('expenseDetail', {
        templateUrl: 'expense-detail/expense-detail.template.html',
        controller: function ExpenseDetailController() {
            this.expenses = [
                {
                  desc: 'Lunch',
                  cost: 15.00,
                  category: 'FOOD'
                }, {
                  desc: 'Myki Top-up',
                  cost: 20.00,
                  category: 'TRANSPORTATION'
                }, {
                  desc: 'Weekly groceries',
                  cost: 40.00,
                  category: 'GROCERIES'
                }
              ];

            this.total = 0.00;
        }
    });