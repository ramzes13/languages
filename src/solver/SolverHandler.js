import React from 'react';

import InputSolverMapper from '../constant/InputSolverMapper';

// const mapper = [
//     {
//         'slug': InputSolverMapper.INPUT_SIMPLTE_TEXT,
//         'component': SimpleTextInput
//     },
//     {
//         'slug': InputSolverMapper.INPUT_AUDIO_TEXT,
//         'component': AudioTextInput
//     }
// ]
//
// function getComponentNameBySlug(slug) {
//     let element = mapper.find(el => {
//         return slug === el.slug
//     });
//
//     return element.component;
// }

class SolverHandler extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1> test </h1>
        )
    }
}

export default SolverHandler;