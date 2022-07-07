document.getElementById('deposit-submit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-id');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    const depositTotal = document.getElementById('deposit-total');
    const previousdepositAmountText = depositTotal.innerText;
    const previousdepositAmount = parseFloat(previousdepositAmountText);
    const newDepositTotal = previousdepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    const blance = document.getElementById('blance-total');
    const fixdBlanceText = blance.innerText;
    const fixdBlance = parseFloat(fixdBlanceText);
    const newBlance = fixdBlance + newDepositAmount;
    blance.innerText = newBlance;

    // clear the inputfild
    depositInput.value = '';


})

document.getElementById('withdraw-submit').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-id');
    const withdrawAmountText = withdrawInput.value;
    const withdraw = parseFloat(withdrawAmountText);

    const withdrawCash = document.getElementById('withdrawCash');
    const withdrawCashText = withdrawCash.innerText;
    const previouswithdraw = parseFloat(withdrawCashText);
    const totalWithdraw = previouswithdraw + withdraw;
    withdrawCash.innerText = totalWithdraw;

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const blanceT = parseFloat(blanceTotalText);
    const wihdrawBlance = blanceT - totalWithdraw;
    blanceTotal.innerText = wihdrawBlance;



    // clear input
    withdrawInput.value = '';

})


