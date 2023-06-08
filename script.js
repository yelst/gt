function calculateColumnSums() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var sums = [0, 0, 0, 0]; // Initialize sums for each column

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      var column = parseInt(checkbox.parentNode.cellIndex) - 2; // Get the column index
      sums[column] += parseInt(checkbox.value); // Add checkbox value to the corresponding column sum
    }
  });

  // Update the sum cells with the calculated sums
  document.getElementById('sum1').textContent = sums[0] + '%';
  document.getElementById('sum2').textContent = sums[1] + '%';
  document.getElementById('sum3').textContent = sums[2] + '%';
  document.getElementById('sum4').textContent = sums[3] + '%';

  // Calculate the values for s1, s2, s3, and s4
  var s1Value = Math.floor((1 + sums[0] * 0.01) * 130000000);
  var s2Value = Math.floor((1 + sums[1] * 0.01) * 130000000);
  var s3Value = Math.floor((1 + sums[2] * 0.01) * 130000000);
  var s4Value = Math.floor((1 + sums[3] * 0.01) * 180000000);

  // Select the higher value between s3 and s4
  var higherValue = Math.max(s3Value, s4Value);

  // Calculate the totalSum by adding s1, s2, and the higher value
  var totalSum = s1Value + s2Value + higherValue;

  // Format the values with thousands separators
  var formattedS1 = s1Value.toLocaleString();
  var formattedS2 = s2Value.toLocaleString();
  var formattedHigherValue = higherValue.toLocaleString();
  var formattedTotalSum = totalSum.toLocaleString();

  // Update the s1, s2, totalSum cells with the calculated and formatted values
  document.getElementById('s1').textContent = formattedS1;
  document.getElementById('s2').textContent = formattedS2;
  document.getElementById('s3').textContent = s3Value.toLocaleString();
  document.getElementById('s4').textContent = s4Value.toLocaleString();
  document.getElementById('totalSum').textContent = formattedTotalSum;
}
