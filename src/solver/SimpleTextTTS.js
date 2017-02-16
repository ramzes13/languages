import Speech from 'speak-tts';

class SimpleTextTTS {
    constructor() {
        console.log('simte text tts');
        Speech.init({
            'onVoicesLoaded': (data) => {
                console.log('voices', data.voices);
                Speech.speak({
                    text: 'Hello, how are you today ?',
                    onError: (e) => {
                        console.log('sorry an error occured.', e)
                    }, // optionnal error callback
                    onEnd: () => {
                        console.log('your text has successfully been spoken.')
                    } // optionnal onEnd callback
                })
            },
            'lang': 'en-GB', // specify en-GB language (no detection applied)
            'volume': 0.5,
            'rate': 0.8,
            'pitch': 0.8
        })


    }
}

export default SimpleTextTTS;