
const AccountRoutes = require("./acc_routes")

function routes(app){
    app.use("/acc", AccountRoutes)
}

module.exports.routes