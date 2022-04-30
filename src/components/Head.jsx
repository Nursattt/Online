import './../css/Head.css';
import logo from './../img/onlineshop.png';

let Head = () => {
    return (
        <div className='head'>
            <div className='divLogo'>
                <img src={logo} className='imgLogo'/>
            </div>

            <div className='search'>
                <input placeholder='Поиск'/>
                <button>Найти</button>
            </div>

            <div className='contacts'>
                <p>
                    <span>+7 (777) 777 77 77</span><br />
                    Без выходных с 9:00 до 22:00
                </p>
            </div>
        </div>
    );
};

export default Head;