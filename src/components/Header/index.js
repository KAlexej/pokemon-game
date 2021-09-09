import s from './style.module.css';

const Header = (props) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{props.title ?? 'Title'}</h1>
                <p>{props.desc ?? 'Description'}</p>
            </div>
        </header>
    );
}

export default Header;