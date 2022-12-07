const app = require("./index");
const connect = require("./configs/db");
///nwwsadzdf

app.listen(2323, async () => {

  try {
    await connect();
    console.log("Listening at port 2323");
  } catch (error) {
    console.log(error.message);
  }

});
