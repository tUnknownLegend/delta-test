import * as React from 'react';

export default ({children}) => {
    const genRandomNumber = (len) => Math.ceil(Math.random() * len);
    const rand = () => Math.random() > 0.5;
    const getPartOfStr = (prevState, currState, text, visibleClass) => (rand() ?
        (<div className={visibleClass}>{text.slice(prevState, prevState + currState)}</div>) :
        text.slice(prevState, prevState + currState));

    const getHiddenDiv = (hiddenClass) => (
        <div className={hiddenClass}>text.split(Math.random(), genRandomNumber(text.length -
            state))</div>);

    const [text, [visibleClass, hiddenClass]] = children;
    const getSpploittedText = () => {
        let prevState = 0;
        let currState = 0;
        const splittedText = [];

        while (prevState < text.length - 4) {
            prevState += currState;
            currState = genRandomNumber(4);
            splittedText.push(getPartOfStr(prevState, currState, text, visibleClass));
            if (rand() && rand()) {
                splittedText.push(getHiddenDiv(hiddenClass));
            }
        }
        splittedText.push(
            getPartOfStr(prevState + currState, text.length - currState, text, visibleClass));

        return splittedText;
    };

    return (<div className={visibleClass}>
        {getSpploittedText()}
    </div>);
};
