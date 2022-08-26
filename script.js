let random_num=Math.floor(Math.random() * 100000);
console.log('Initial timer: '+random_num);
$(document).on('click', '#reset_timer', function() {
    random_num=Math.floor(Math.random() * 100000);
    console.log('New timer: '+random_num);
});
$(document).on('click', '#load_data', function() {
    setTimeout(function() {
      $('table').append("  <tr><td class='element_that_we_need'>Alter Automaion</td><td class='first_name'>Kadyrbek Shamil</td><td class='country'>Kyrgyzstan</td></tr>");
    }, random_num);
    console.log('Loading data...')
});
$(document).on('click', '#refresh', function() {
  random_num=Math.floor(Math.random() * 10000);
  location.reload();
  console.log('Refreshing the page...')
});