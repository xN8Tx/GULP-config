const buildFolder = 'dist'
const devFolder = 'src'

export const path = {
    build: {
        pathRoot: `${buildFolder}`,
        pathJS: `${buildFolder}/scripts/`,
        pathIMG: `${buildFolder}/images/`
    },
    dev: {
        pathRoot: `${devFolder}`,
        pathSCSS: `${devFolder}/style/scss/style.scss`,
        pathCSS: `${devFolder}/style/`,
        pathJS: `${devFolder}/scripts/index.js`,
        pathBunJS: `${devFolder}/scripts/`,
        pathIMG: `${devFolder}/images/**/*.*`
    },
}
