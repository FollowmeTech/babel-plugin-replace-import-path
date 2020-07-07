const expect = require('chai').expect;
const babel = require('babel-core');
const replaceImportPath = require('../lib/index').default;

describe('replace import path', () => {
    it('replace', () => {
        const result = babel.transform('import A from "test"', {
            plugins: [[replaceImportPath, {
                src: 'test',
                dest: 'testaaaa'
            }]]
        });
        const expected = 'import A from "testaaaa";';
        expect(expected === result.code).to.be.true;
    });

    it('replace2', () => {
        const result = babel.transform('import A from "test/bbbs"', {
            plugins: [[replaceImportPath, {
                src: 'test/bbbs',
                dest: 'testaaaa'
            }]]
        });
        const expected = 'import A from "testaaaa";';
        expect(expected === result.code).to.be.true;
    });

    it('replace with regex', () => {
        const result = babel.transform('import A from "test/dir"', {
            plugins: [[replaceImportPath, {
                src: /test\/(\w+)/,
                dest: 'test/$1/src'
            }]]
        });
        const expected = 'import A from "test/dir/src";';
        expect(result.code).to.be.eq(expected);
    });
});