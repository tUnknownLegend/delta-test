import * as React from 'react';

/**
 * Component, masks string against getting with regex and XPath queries
 * @param children - context
 * @returns string, wrapped in divs
 */
export default ({children}) => {
    const genRandomNumber = (len) => Math.ceil(Math.random() * len);
    const rand = () => Math.random() > 0.5;

    /**
     * Function, takes random splice of string and adds random symbol in the end
     * @param text - initial string
     * @param prevState - offset
     * @param currState - current number of symbols to cut
     * @param visibleClass - name of class to add
     * @returns part if the initial string, wrapped in div
     */
    const getPartOfStr = (text, visibleClass, prevState, currState) => (rand() ?
        (<div key={visibleClass + prevState} className={visibleClass}>
            {text.slice(prevState, prevState + currState)}</div>) :
        text.slice(prevState, prevState + currState));

    /**
     * Function, takes random splice of string and adds random symbol in the end
     * @param text - initial string
     * @param hiddenClass - name of class, hiding element
     * @param strBegin - offset
     * @param strEnd - offset + number of symbols to cut
     * @returns invisible div
     */
    const getHiddenDiv = (text, hiddenClass, strBegin, strEnd) => (
        <div key={hiddenClass + strBegin} className={hiddenClass}>
            {`\n${text.slice(strBegin, strEnd)}
            ${String.fromCharCode(genRandomNumber(100) + 10)}\n`}
        </div>);

    const [text, [visibleClass, hiddenClass]] = children;
    const getSplittedText = () => {
        const maxStep = (text.length <= 4 ? 2 : 4);
        const splittedText = [];
        let prevState = 0;
        let currState = 0;

        while (prevState < text.length - maxStep) {
            prevState += currState;
            currState = genRandomNumber(maxStep);
            splittedText.push(getPartOfStr(text, visibleClass, prevState, currState));
            splittedText.push(getHiddenDiv(text, hiddenClass, prevState,
                prevState + genRandomNumber(maxStep)));
        }
        splittedText.push(
            getPartOfStr(text, visibleClass, prevState + currState, text.length - currState));

        return splittedText;
    };

    return (<div className={visibleClass}>
        {getSplittedText()}
    </div>);
};
