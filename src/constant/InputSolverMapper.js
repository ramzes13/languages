class InputSolverMapper {
    static SIMPLTE_TEXT = 'simple-text';
    static AUDIO_TEXT = 'audio-text';

    static mapper = [
        {
            'slug': InputSolverMapper.SIMPLTE_TEXT,
            'label': 'Simple Text',
        },
        {
            'slug': InputSolverMapper.AUDIO_TEXT,
            'label': 'Audio with text',
        },
    ];

    static getInfoAvailableInputs() {
        return this.mapper.map(input => {
            return {'slug': input.slug, 'label': input.label}
        })
    }
}

export default InputSolverMapper;