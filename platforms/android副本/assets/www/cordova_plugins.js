cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/ionic-plugin-deploy/www/ionicdeploy.js",
        "id": "ionic-plugin-deploy.IonicDeploy",
        "clobbers": [
            "IonicDeploy"
        ]
    },
    {
        "file": "plugins/cn.jpush.phonegap.JPushPlugin/www/JPushPlugin.js",
        "id": "cn.jpush.phonegap.JPushPlugin.JPushPlugin",
        "clobbers": [
            "window.plugins.jPushPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "ionic-plugin-deploy": "0.3.0",
    "cn.jpush.phonegap.JPushPlugin": "2.0.2"
}
// BOTTOM OF METADATA
});