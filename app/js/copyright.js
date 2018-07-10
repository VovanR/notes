import {e} from './utils.js'

const Copyright = () => e('a', {
        className: 'copyright',
        href: 'https://github.com/vovanr/notes',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
        e('span', {className: 'copyright__license'}, 'MIT ©'),
        ' ',
        e('span', {className: 'copyright__author'}, 'Vladimir Rodkin')
    )

export default Copyright;
