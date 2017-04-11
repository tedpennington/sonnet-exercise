var sonnet = document.getElementById('sonnet').innerHTML;
console.log(sonnet)

var index = sonnet.indexOf('orphans');
console.log('index of orphans');

//Output the  # of char. in sonnet

var length = sonnet.length
console.log('length of sonnet', length);

//Replace the first the occurance of the string "winter" with "yuletide"

sonnet = sonnet.replace('winter', 'yuletide');
console.log('replace winter', sonnet);



