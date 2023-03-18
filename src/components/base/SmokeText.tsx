import * as React from 'react';

export default ({children}) => {
    const genRandomNumber = (len) => Math.ceil(Math.random() * len);
    const rand = () => Math.random() > 0.5;
    const getPartOfStr = (prevState, currState, text, visibleClass) => (rand() ?
        (<div key={visibleClass + prevState} className={visibleClass}>
            {text.slice(prevState, prevState + currState)}</div>) :
        text.slice(prevState, prevState + currState));

    const getHiddenDiv = (text, hiddenClass, strBegin) => (
        <div key={hiddenClass + strBegin} className={hiddenClass}>{
            '\n'+(Math.random() + 1).
                toString(36).substring(genRandomNumber(4)).replace(text, '')+'\n'}</div>);

    const [text, [visibleClass, hiddenClass]] = children;
    const getSpploittedText = () => {
        const maxStep = (text.length <= 4 ? 2 : 4);
        const splittedText = [];
        let prevState = 0;
        let currState = 0;

        while (prevState < text.length - maxStep) {
            prevState += currState;
            currState = genRandomNumber(maxStep);
            splittedText.push(getPartOfStr(prevState, currState, text, visibleClass));
            splittedText.push(getHiddenDiv(text, hiddenClass, prevState));
        }
        splittedText.push(
            getPartOfStr(prevState + currState, text.length - currState, text, visibleClass));

        return splittedText;
    };

    return (<div className={visibleClass}>
        {getSpploittedText()}
    </div>);
};
