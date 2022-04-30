import './../css/TopNav.css';

let TopNav = () => {
    return (
        <div className='topnav'>
            <div className='btns'>Все товары</div>
            <div className='btns'>Адреса магазинов</div>
            <div className='btns'>Акции</div>
            <div className='btns'>Оплата</div>
            <div className='btns'>Доставка</div>
            <div className='btns'>Контакты</div>
            <div className='btns'>О компании</div>
        </div>
    );
};

export default TopNav;