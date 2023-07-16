const utils = require("./utils");
const {Clipboard} = require("enconvo.sdk/src/lib/bridge/clipboard");

(async () => {
    try {
        console.log(`copy: ${await Clipboard.copy()}`);
        const paramText = $text || await Clipboard.copy();
        // md5 加密
        console.log(`paramText: ${JSON.stringify($context)}`);
        const completeContent = await utils.md5(paramText)
        console.log(`completeContent: ${completeContent}`);

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
    console.log("error: " + err.message);
    completion({
        result: {
            type: "error",
            value: JSON.parse(err).error.message || '未知错误',
        },
    });
});


