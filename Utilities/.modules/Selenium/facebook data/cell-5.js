var importer = require('../Core');
// TODO: pass profile path in as parameter becomes readFacebookProfileInfo
var readFacebookProfileInfo = () => {
    var profile = {};    // TODO: check for profile path    return client.execute(() => {        var people = document.evaluate(            '//*[contains(@class, "scrollable")]//h4[contains(., "Profile")]/parent::*//a',            document, null,            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;        if (!people) {            return '';        }        people.setAttribute('target', '_self');        return people;    })        .then(r => r.value != ''            ? client.elementIdClick(r.value.ELEMENT)
                .pause(2000)
                .then(() => importer.runAllPromises([
                    client.getText('[role="main"] h1'),
                    client.isExisting('#intro_container_id li').then(is => is
                        ? client.getText('#intro_container_id li')
                        : Promise.resolve('')),
                    client.getUrl()
                ]))
                .then(r => (profile = ({
                    name: r[0],
                    description: r[1],
                    url: r[2]
                })))            : client)        .then(() => profile)        .catch(e => console.log(e))};module.exports = readFacebookProfileInfo;readFacebookProfileInfo;