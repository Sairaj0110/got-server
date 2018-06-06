const express = require(`express`);
const bodyparser = require(`body-parser`);
const appConstants = require(`./appConstants.json`)
const BattleRouteHandler = require(`./battles/BattleRouter`)

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
     extended: false//false when vlue is string or array, true for anyother type
}));
app.use(`/`, BattleRouteHandler.handle());//This example shows a middleware function mounted on the / path. The function is executed for any type of HTTP request on the / path.
app.listen(appConstants.PORT);

console.log(`Express Started`)