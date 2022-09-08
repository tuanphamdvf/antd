const { override } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
            },
        },
    }),
);
