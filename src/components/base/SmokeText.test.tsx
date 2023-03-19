import * as React from 'react';
import SmokeText from './SmokeText';
import * as assert from 'assert';
import {render} from '@testing-library/react';

const textClasses = ['visible', 'invisible'];

const runTest = (prop) => ({testString, regex}) => {
    const rendered = render(<SmokeText children={
        [testString, textClasses]
    }/>);
    assert.doesNotMatch(rendered.baseElement[prop], regex,
        rendered.baseElement[prop]);
};

const testData = [
    {
        testString: '18+',
        regex: /.*1.*8.*\+.*/,
    },
    {
        testString: 'Москва',
        regex: /.*м.*о.*с.*к.*в.*а.*/i,
    },
    {
        testString: 'parabellum-mrochkovskiy.ru',
        regex: /.*p.*a.*r.*a.*b.*e.*l.*l.*u.*m.*-.*m.*r.*o.*c.*h.*k.*o.*v.*s.*k.*i.*y.*.*r.*u.*/i,
    },
];

describe('SmokeText, regex by textContent', () => {
    const runTextContentTest = runTest('textContent');

    it('should render "18+" not to math regex', () => {
        runTextContentTest(testData[0]);
    });

    it('should render "москва" not to math regex', () => {
        runTextContentTest(testData[1]);
    });

    it('should render "parabellum-mrochkovskiy.ru" not to math regex', () => {
        runTextContentTest(testData[2]);
    });
});

describe('SmokeText, regex by innerHTML', () => {
    const runInnerHTMLTest = runTest('innerHTML');

    it('should render "18+" not to math regex', () => {
        runInnerHTMLTest(testData[0]);
    });

    it('should render "москва" not to math regex', () => {
        runInnerHTMLTest(testData[1]);
    });

    it('should render "parabellum-mrochkovskiy.ru" not to math regex', () => {
        runInnerHTMLTest(testData[2]);
    });
});
