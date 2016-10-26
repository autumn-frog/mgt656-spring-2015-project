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
  
  response.render('ProjectReport.html', contextData);
}



module.exports = {
  'showReport': showReport
};
