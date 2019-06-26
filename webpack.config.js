const config =  {
    "mode": "development",
    "entry": "./spec/MyJSUtilities.spec.js",
    "target": "node",
    "output": {
        "path": __dirname+'/static',
        "filename": "[name].[chunkhash:8].js"
    }
}

module.exports = config;