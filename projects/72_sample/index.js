var { fork } = require("child_process");
var path = require("path");

var child = fork(path.join(__dirname, "child.js"), { execArgv: [] });
// 子から親へメッセージ送信
// child.on("message", (data) => {
//   console.log(data);
// })

// 親から子へメッセージ送信
child.send({ hello: "message form parent." });


// 子を終了
child.on("close", (code) => {
  console.log(`child process exit whith code ${code}`);
})