class InputSolverMapper {
    static COMPONENT_SIMPLTE_TEXT = 'simple-text';
    static COMPONENT_AUDIO_TEXT = 'audio-text';

    static SOLVER_SIMPLTE_TEXT = 'simple-text';
    static SOLVER_AUDIO_TEXT = 'audio-text';

    static HANDLER_INPUT = 'input';
    static HANDLER_SOLVER = 'solver';

    static mapper = [
        {
            'slug': InputSolverMapper.COMPONENT_SIMPLTE_TEXT,
            'label': 'Simple Text',
        },
        {
            'slug': InputSolverMapper.COMPONENT_AUDIO_TEXT,
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