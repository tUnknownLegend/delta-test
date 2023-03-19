import * as React from 'react';

/**
 * Component, inserts image in div with CSS content property
 * @param props - context
 * @returns image as div
 */
export default (props) => {
    const addStyle = (id, content) => {
        const style = document.createElement('style');
        style.media = 'screen';
        style.innerText = content;
        return style;
    };
    const styleElement = document.querySelector(`.${props.className}`);

    const elementStyle =
        `div[class="${props.className}"] { 
        content: url(${props.src});
        height: ${props.height}; 
        width: ${props.width};
        }`;

    if (styleElement instanceof HTMLStyleElement) {
        styleElement.innerText = elementStyle;
    } else {
        document.querySelector('head').appendChild(addStyle(props.className, elementStyle));
    }

    return (
        <div
            className={props.className}
        />
    );
};
