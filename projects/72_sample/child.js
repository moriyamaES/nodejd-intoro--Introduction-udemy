// 子から親へメッセージ送信
setTimeout(() => {
    process.send({ hello: "message form child." });
}, 3000);

// 親から子へメッセージ送信
process.on("message", (data) => {
    console.log(data);
    process.exit(0);
})
