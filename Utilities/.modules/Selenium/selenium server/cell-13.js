var importer = require('../Core');
var express = require('express');
var router = express.Router();

var clickElement = (id) => {
    // TODO: scroll page
    return promisifyChrome('debugger.sendCommand', {
        tabId: getTab()
    }, 'DOM.resolveNode', {
        objectId: id
    })
        .then(r => {
        console.log(r);
        promisifyChrome('debugger.sendCommand', {
            tabId: getTab()
        }, 'Runtime.evaluate', {
            expression: `new window.BackupPromise(resolve => setTimeout(() => {
resolve();
}, 500))`,
            awaitPromise: true
        })})
        .then(r => promisifyChrome('debugger.sendCommand', {
            tabId: getTab()
        }, 'Input.dispatchMouseEvent', {
            type: 'mousePressed', 
            x: r.x,
            y: r.y, 
        }))
        .catch(e => console.log(e))
    // TODO: click center
}


router.post('/session/:sessionId/element/:id/click', (req, res) => {
    response(res, clickElement(parseInt(req.params['id'])))
}); //,"ClickElement",ExecuteClickElement,

module.exports = {
    clickElement,
    router
}
