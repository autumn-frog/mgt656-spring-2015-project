'use strict';

/**
 * Controller that renders our project report page.
 */
 
function showReport (request, response) {
  var currentTime = new Date();
  var contextData = {
    'title': 'MGT 656',
    'tagline': 'AutumnFrog Team.', 
    'time': currentTime
  };
  
  if (request.params.id != undefined) {
    response.render('report' + (request.params.id) +  '.html', contextData);
  } else {
    response.render('selectreport.html', contextData);
  }
}

module.exports = {
  showReport : showReport
};
