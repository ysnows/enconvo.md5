import {md5} from "enconvo/tools";
import {clipboard, req, res} from "enconvo/bridge";

(async () => {
    try {
        const {text, context} = req.body();
        const copiedText = await clipboard.copy();
        console.log(`text:${text} copy: ${copiedText}`);
        const paramText = text || copiedText;
        // md5 加密
        console.log(`context: ${JSON.stringify(context)}`);
        const completeContent = await md5(paramText)
        console.log(`completeContent: ${completeContent}`);

        res.text(completeContent)
    } catch (e) {
        throw e;
    }
})().catch((err) => {
    console.log("error: " + err.message);
    res.error(JSON.parse(err).error.message || '未知错误')
});


