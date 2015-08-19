/* global require: false */
define('main', function () {
    var scriptBase = "js/",
        appConfig;
    
    appConfig = {
        "baseUrl": scriptBase,
        "paths": {
            "backbone":  "backbone"
        }
    };

    require.config(appConfig);
    require(['app']);
});
