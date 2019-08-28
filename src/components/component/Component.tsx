import * as React from 'react';
import { DefaultShapeProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';

export interface ComponentProps extends DefaultShapeProps {
    style?: LayoutStyleProperties;
}

export const Component: React.ElementType<ComponentProps> = props => {
    const componentProps = {
        ...transformLayoutStyleProperties(props.style),
        ...props
    };

    return <component {...componentProps} />;
};