import * as React from 'react';
import {ReactDOM} from "react";

export default (props) => {
    const addClass = (id, content) => {
        const style = document.createElement("style");
        style.media = 'screen';
        style.innerText = content;
        return style;
    }
    const styleElement = document.querySelector(`.${props.className}`);

    if (styleElement instanceof HTMLStyleElement) {
        styleElement.innerText =
            `div[class="${props.className}"] { content: url(${props.src}); height: ${props.height}; width: ${props.width}; }`;
    } else {
        document.querySelector('head').appendChild(addClass(props.className,
            `div[class="${props.className}"] { content: url(${props.src}); height: ${props.height}; width: ${props.width}; }`));
    }

    return (
        <div
            className={props.className}
        />
    );
};
