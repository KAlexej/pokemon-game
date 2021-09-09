import s from './style.module.css';

const Layout = (props) => {
    const {title, desc, urlBg, colorBg} = props;
    const bgStyle = {
        backgroundImage: urlBg ? `url(${urlBg})` : ' none',
        backgroundColor: colorBg ? colorBg : 'none'
    };

    return (
        <section style={bgStyle}  className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;