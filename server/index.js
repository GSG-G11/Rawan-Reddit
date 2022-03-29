const app = require('./app');
require("env2")(".env");

app.set("PORT", process.env.PORT || 3000);
const port = app.get('PORT');
app.listen(port, () => {
    console.log('hello server is running on port http://localhost:' + port);
});
