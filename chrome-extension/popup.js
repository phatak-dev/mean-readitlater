document.addEventListener('DOMContentLoaded', function () {
   chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;    
    $('#message').text("Adding "+ url);
    $.ajax({
    	url:'http://localhost:8080/api/addurl/'+encodeURIComponent(url),
    	type:'post' 
    }).done(function(data) {
       $('#message').text("successfully added " + url).addClass('success');
    }).fail(function(jqXHR, textStatus, errorThrown){
      $('#message').text("error in adding" + url).addClass('fail');
    });
   });
});