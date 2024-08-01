let totalMarks = 0;

        function total(input) {
            let sum = input.parentNode.parentNode;
            let input1 = sum.querySelector('.input1').value;
            let input2 = sum.querySelector('.input2').value;
            let total = parseInt(input1) + parseInt(input2);
            sum.querySelector('.total').innerText = total;
            sum.querySelector('.total-words').innerText = Words(total);
            
    
            let inputsfield = true;
            let inputs = document.querySelectorAll('.input1, .input2');
            inputs.forEach(function(input) {
              if (input.value === '') {
                inputsfield = false;
              }
            });
            
            if (inputsfield) {
              totalMarks = 0;
              inputs.forEach(function(input) {
                totalMarks += parseInt(input.value);
              });
              document.querySelector('.totalmarks').innerText = totalMarks;
              calculatePercentage();
            }
          }
            
          function calculatePercentage() {
            let percentage = (totalMarks / 500) * 100;
            document.querySelector('.percentage').innerText = percentage.toFixed(2);
          }
          
        let input1 = sum.querySelector('.input1').value;
        let input2 = sum.querySelector('.input2').value;
        if (!isNaN(input1) && !isNaN(input2)) {
            let total = parseInt(input1) + parseInt(input2);
        }

        function Words(num) {
            let ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
            let teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
            let tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred'];
            if (num < 10) {
                return ones[num];
            } else if (num < 20) {
                return teens[num - 10];
            } else {
                return tens[Math.floor(num / 10)] + (num % 10 != 0 ? ' ' + ones[num % 10] : '');
            }
        }