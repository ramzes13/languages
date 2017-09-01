class TextMetaGenerator {

    static generateTTsMeta(text) {
        return text.split(".")
            .map((phrase) => {
                return phrase.trim()
            })
            .filter((phrase) => {
                return (phrase.length > 0);
            });
    }

}

export default TextMetaGenerator;