const colors = require('tailwindcss/colors');

module.exports = {
    corePlugins: [
        /* Base Styles */
        'preflight',

        /* Layout */
        'container',
        'display',

        /* Spacing */
        'padding',
        'margin',

        /* Typography */
        'fontSize',
        'fontWeight',
        'listStyleType',
        'listStylePosition',
        'textAlign',
        'textColor',
        'textDecoration',

        /* Backgrounds */
        'backgroundColor',

        /* Borders */
        'borderRadius',

        /* Effects */
        'boxShadow'
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px'
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: colors.amber,
            secondary: colors.sky,
            tertiary: colors.violet,
            gray: colors.coolGray,
            white: colors.white,
        }
    }
};

