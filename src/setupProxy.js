const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'http://s.h5.jumei.com/',
        changeOrigin:true,
        pathRewrite:{
            "^/api": ""
        }
    }));
};
