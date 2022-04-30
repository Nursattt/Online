import './../css/Content.css';
import TopNav from "./TopNav";
import Navbar_parent from "./Navbar_parent";
import Items from "./Items";

let Content = () => {
    return (
        <div className='content'>
            <TopNav />
            <Navbar_parent />
            <Items />
        </div>
    );
};

export default Content;