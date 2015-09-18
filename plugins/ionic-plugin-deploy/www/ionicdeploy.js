var IonicDeploy = {
  init: function (app_id, domain, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'initialize',
      [app_id, domain]
      );
  },
  check: function (app_id, channel_tag, domain, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'check',
      [app_id, channel_tag, domain]
      );
  },
  download: function (app_id, domain, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'download',
      [app_id, domain]
      );
  },
  extract: function (app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'extract',
      [app_id]
      );
  },
  redirect: function (app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'redirect',
      [app_id]
      );
  },
  info: function (app_id, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'info',
      [app_id]
      );
  }
}

module.exports = IonicDeploy;
