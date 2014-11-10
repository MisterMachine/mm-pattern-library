angular.module("loanCalculator")
  .controller("LoanCalculatorController", function ($scope) {

  // Helper method for calculating the total price
  $scope.calculate = function(){
    
    console.log($scope.amount);
    console.log($scope.interest);
    console.log($scope.years);
    console.log($scope.freequency);

    var monthylyInterest = ($scope.interest/100) / 12;
    var principle = $scope.amount;
    var payments = $scope.years * 12;

//        var monthly = principle * monthylyInterestRate * Math.pow(1 + monthylyInterestRate, payments)
//            / (Math.pow(1 + monthylyInterestRate, payments) - 1);
        // simplified version
    
    var monthly = principle * monthylyInterest / (1 - Math.pow(1 + monthylyInterest,(-1 * payments)));
    var roundedMonthly = Math.round(monthly*100)/100;
    var total = roundedMonthly * payments;

    // return {
    //     principle: principle.toFixed(2),
    //     total: total.toFixed(2),
    //     payments: payments.toFixed(0),
    //     monthly: roundedMonthly.toFixed(2)
    // };

    $scope.total = total.toFixed(2);

  };

  $scope.total = function(){
    var total = 0;
    return total;
  };

});
