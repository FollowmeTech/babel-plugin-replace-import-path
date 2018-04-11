'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = replaceImportPath;
function replaceImportPathPlugin(path, t, opts) {
    var src = opts.src,
        dest = opts.dest;

    if (!src || !dest) {
        console.error('src & dest should be provided in babel-plugin-replace-import-path');
        return;
    }

    var node = path.node;
    if (node && node.source.value === src) {
        node.source.value = dest;
    }
}

function replaceImportPath(_ref) {
    var t = _ref.types;

    return {
        name: 'replace-import-path',
        visitor: {
            ImportDeclaration: function ImportDeclaration(path, _ref2) {
                var _ref2$opts = _ref2.opts,
                    opts = _ref2$opts === undefined ? {} : _ref2$opts;

                if (Object.prototype.toString.call(opts) === '[object Array]') {
                    opts.forEach(function (opt) {
                        replaceImportPathPlugin(path, t, opt);
                    });
                } else {
                    replaceImportPathPlugin(path, t, opts);
                }
            }
        }
    };
};