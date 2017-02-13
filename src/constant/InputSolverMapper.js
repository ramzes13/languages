class InputSolverMapper {
    static INPUT_SIMPLTE_TEXT = 'simple-text';
    static INPUT_AUDIO_TEXT = 'audio-text';

    static SOLVER_SIMPLTE_TEXT = 'simple-text';
    static SOLVER_AUDIO_TEXT = 'audio-text';

    static HANDLER_INPUT = 'input';
    static HANDLER_SOLVER = 'solver';

    static mapper = [
        {
            'slug': InputSolverMapper.INPUT_SIMPLTE_TEXT,
            'label': 'Simple Text',
        },
        {
            'slug': InputSolverMapper.INPUT_AUDIO_TEXT,
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