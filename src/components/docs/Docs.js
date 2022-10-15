import classNames from 'classnames/bind';

import style from './Docs.module.scss';

const cx = classNames.bind(style);

const Docs = ({ data, className }) => {
    return (
        <div>
            {data.map((data, index) => {
                let Comp = 'p';
                let classes = cx('text', {
                    [className]: className,
                    header: !!data.header,
                    separate: data.separate,
                    center: data.center,
                    redColor: data.color === 'red',
                });

                if (data.title) {
                    Comp = 'h3';
                } else if (data.header) {
                    Comp = 'h1';
                }

                return (
                    <Comp key={index} className={classes}>
                        {(data.href && (
                            <a href={data.href}> {data.content}</a>
                        )) ||
                            (typeof data.content === 'object' &&
                                data.content.map((data, index) => {
                                    if (data.tag) {
                                        const Tag = data.tag;
                                        return (
                                            <Tag key={index}> {data.text} </Tag>
                                        );
                                    }
                                    return data;
                                })) ||
                            data.content ||
                            data.title ||
                            data.header}
                        {data.src && <img src={data.src} alt="" />}
                        {data.mainTitle && (
                            <span className={cx('main-title')}>
                                {data.mainTitle}
                            </span>
                        )}
                        {data.list && (
                            <ul>
                                {data.list.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <strong>{item}</strong>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </Comp>
                );
            })}
        </div>
    );
};

export default Docs;
