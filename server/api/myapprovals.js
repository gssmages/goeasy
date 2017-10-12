  var logger = require('powwow-server-common').logger;

exports.approve = function (page, params) {
  
    logger.info('Sending myapproval page data to save ', params);
    page.update('myapprovals', params);
    setTimeout(function () {
        page.action('myapprovals', 'approve');
        setTimeout(function () {
             page.action('myapprovals', 'approve');
        }, 5000);
    }, 2000);
}