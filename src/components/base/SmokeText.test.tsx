import * as React from 'react';
import SmokeText from './SmokeText';
import * as assert from 'assert';
import {render} from '@testing-library/react';

const textClasses = ['visible', 'invisible'];

describe('SmokeText, regex by textContent', () => {
    it('should render "18+" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['18+', textClasses]}/>);
        assert.doesNotMatch(rendered.baseElement.textContent, /.*1.*8.*\+.*/);
    });

    it('should render "москва" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['Москва', textClasses]
        }/>);
        assert.doesNotMatch(rendered.baseElement.textContent, /.*м.*о.*с.*к.*в.*а.*/i);
    });

    it('should render "parabellum-mrochkovskiy.ru" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['parabellum-mrochkovskiy.ru', textClasses]
        }/>);
        assert.doesNotMatch(rendered.baseElement.textContent,
            /.*p.*a.*r.*a.*b.*e.*l.*l.*u.*m.*-.*m.*r.*o.*c.*h.*k.*o.*v.*s.*k.*i.*y.*.*r.*u.*/i);
    });
});

describe('SmokeText, regex by innerHTML', () => {
    it('should render "18+" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['18+', textClasses]
        }/>);
        assert.doesNotMatch(rendered.baseElement.innerHTML, /.*1.*8.*\+.*/);
    });

    it('should render "москва" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['Москва', textClasses]
        }/>);
        assert.doesNotMatch(rendered.baseElement.innerHTML, /.*м.*о.*с.*к.*в.*а.*/i);
    });

    it('should render "parabellum-mrochkovskiy.ru" not to math regex', () => {
        const rendered = render(<SmokeText children={
            ['parabellum-mrochkovskiy.ru', textClasses]
        }/>);
        assert.doesNotMatch(rendered.baseElement.innerHTML,
            /.*p.*a.*r.*a.*b.*e.*l.*l.*u.*m.*-.*m.*r.*o.*c.*h.*k.*o.*v.*s.*k.*i.*y.*.*r.*u.*/i);
    });
});
