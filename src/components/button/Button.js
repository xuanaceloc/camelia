import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './Button.module.scss';

const cx = classNames.bind(style);

const Button = ({
    href,
    to,
    primary,
    grey,
    outline,
    large,
    className,
    children,
    onClick,
}) => {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }

    const classes = cx('wrapper', {
        primary,
        grey,
        outline,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
