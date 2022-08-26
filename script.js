var random_num=Math.floor(Math.random() * 10000);
console.log(random_num);
setTimeout(function() {
  $('table').append("  <tr><td class='element_that_we_need'>Alter Automaion</td><td class='first_name'>Kadyrbek Shamil</td><td class='country'>Kyrgyzstan</td></tr>");
}, random_num);