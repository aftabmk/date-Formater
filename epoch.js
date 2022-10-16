  var currentTime   = "21/02/2021 12:00"
  var monthPosition = currentTime.split('/', 2).join('/').length
  var day           = currentTime.substring(0, currentTime.indexOf('/'))
  var month         = currentTime.substring(currentTime.indexOf('/') + 1, monthPosition);
  var time          = month + "/" + day + currentTime.substring(month.length + day.length  + 1); 
//"02/21/2021 12:00"
  var epochTime = Date.parse(time);

//or get current time of epoch time
  var currentEpoch = Date.parse(new Date());

var currentEpochErr = Date.parse(new Date().toString());
