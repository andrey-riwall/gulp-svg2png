const { src, dest } = require('gulp');
const svg2png = require('gulp-svg2png');

const assembly = () => {
    return src('./svg/**/*.svg')
        .pipe(svg2png())
        .pipe(dest('./png'))
}

exports.assembly = assembly;