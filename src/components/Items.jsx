import './../css/Items.css';
import all from './../img/all.png';
import dekor from './../img/dekor.png';
import doorImg from './../img/door.png';
import kafel from './../img/kafel.png';
import kraska from './../img/kraska.png';
import mebel from './../img/mebel.png';
import pol from './../img/pol.png';
import obor from './../img/oborudovanie.png';
import electro from './../img/electro.png';
import instrum from './../img/instruments.png';
import krepej from './../img/krepezh.png';
import sant from './../img/santechnics.png';

let Items = () => {
    return (
        <div className='container'>
            <div className='item'><img src={all}/></div>
            <div className='item'><img src={dekor}/></div>
            <div className='item'><img src={doorImg}/></div>
            <div className='item'><img src={kafel}/></div>
            <div className='item'><img src={kraska}/></div>
            <div className='item'><img src={mebel}/></div>
            <div className='item'><img src={pol}/></div>
            <div className='item'><img src={obor}/></div>
            <div className='item'><img src={electro}/></div>
            <div className='item'><img src={instrum}/></div>
            <div className='item'><img src={krepej}/></div>
            <div className='item'><img src={sant}/></div>
        </div>
    );
};

export default Items;