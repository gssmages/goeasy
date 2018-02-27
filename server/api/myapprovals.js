  var logger = require('powwow-server-common').logger;

exports.approve = function (page, params) {
  
    logger.info('Sending myapproval page data to save ', params);
    page.update('myapprovals', params);
    setTimeout(function () {
        page.action('myapprovals', 'approve');
       /* setTimeout(function () {
             page.action('myapprovals', 'approve');
        }, 5000);*/
    }, 2000);
}
exports.reject = function (page, params) {
  
    logger.info('Sending myapproval page data to save ', params);
    page.update('myapprovals', params);
    setTimeout(function () {
        page.action('myapprovals', 'reject');
       /* setTimeout(function () {
             page.action('myapprovals', 'approve');
        }, 5000);*/
    }, 2000);
}

exports.sendRequest = function (page, params) {
    
      logger.info('Sending adhoc page data to save ', params);
      page.update('adhocrequest', params);
      setTimeout(function () {
          page.action('myapprovals', 'sendRequest')
          .screen("adhocrequest");

         /* setTimeout(function () {
               page.action('myapprovals', 'approve');
          }, 5000);*/
      }, 2000);
  }

exports.tripcancel = function (page, params) {
    
      logger.info('Sending tripcancel page data to save ', params);
      page.update('tripCancellation', params);
      setTimeout(function () {
          page.action('myapprovals', 'tripcancel');
         /* setTimeout(function () {
               page.action('myapprovals', 'approve');
          }, 5000);*/
      }, 2000);
  }