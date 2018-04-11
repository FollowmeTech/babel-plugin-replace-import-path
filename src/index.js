function replaceImportPathPlugin (path, t, opts) {
    const { src, dest } = opts;
    if (!src || !dest) {
        console.error('src & dest should be provided in babel-plugin-replace-import-path');
        return;
    }

    const node = path.node;
    if (node && node.source.value === src) {
        node.source.value = dest;
    }
}

export default function replaceImportPath ({types: t}) {
    return {
        name: 'replace-import-path',
        visitor: {
            ImportDeclaration (path, { opts = {} }) {
                if (Object.prototype.toString.call(opts) === '[object Array]') {
                    opts.forEach(opt => {
                        replaceImportPathPlugin(path, t, opt);
                    });
                } else {
                    replaceImportPathPlugin(path, t, opts);
                }
            }
        }
    };
};