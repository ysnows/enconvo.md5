var utils = require("./utils");
function main(text, contextText, completion, streamHandler) {
    (async () => {
        try {
            const paramText = text || contextText.value || await Clipboard.readText();
            // md5 加密
            const completeContent = await utils.md5(paramText)
            // const completeContent = await digestMessage("test")

            completion({
                result: {
                    "type": "text",
                    "value": completeContent,
                },
            });

        } catch (e) {
            throw e;
        }
    })().catch((err) => {
        completion({
            result: {
                type: "error",
                value: JSON.parse(err).error.message || '未知错误',
            },
        });
    });
}


