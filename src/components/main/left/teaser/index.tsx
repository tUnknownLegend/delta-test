import * as React from 'react';

import Block from '../../../base/Block';
import Image from '../../../base/Image';
import SmokeText from '../../../base/SmokeText';

export default ({item, index, transform}) => {
    const {
        body,
        domain,
        images,
        region,
        title,
        warning,
    } = item;

    let imageSrc;
    let imageWidth;
    let imageHeight;

    if (images[0]) {
        [imageSrc, imageWidth, imageHeight] = images[0];
    }

    const classes = [
        transform('teaser'),
    ];

    if (imageSrc) {
        classes.push(transform('teaser_image'));
    }

    const textClasses = [transform('text-content'), transform('text-content_hidden')];

    return (
        <Block className={classes.join(' ')}>

            <Block className={transform('title')}>
                {title}
            </Block>

            {imageSrc && (
                <Block className={transform('picture')}>
                    <Image
                        className={transform(`picture__image_${index}`)}
                        src={imageSrc}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </Block>
            )}

            <Block className={transform('content')}>
                {body}
            </Block>

            {warning && (
                <Block className={transform('warning')}>
                    <SmokeText>
                        {warning}
                        {textClasses}
                    </SmokeText>
                </Block>
            )}

            <Block className={transform('contacts')}>

                <Block className={transform('contacts__item contacts__item_link')}>
                    <SmokeText>
                        {domain}
                        {textClasses}
                    </SmokeText>
                </Block>

                {region && (
                    <Block className={transform('contacts__item')}>
                        <SmokeText>
                            {region}
                            {textClasses}
                        </SmokeText>
                    </Block>
                )}
            </Block>
        </Block>
    );
};
