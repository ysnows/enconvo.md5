const utils = require("./utils");
(async () => {
    try {
        const paramText = $text || $context.value || await $clipboard.readText();
        // md5 加密
        console.log(`paramText: ${process.env['appid']}`);
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


