import React from "react";
import Navbar from "./Navbar";

class Navbar_parent extends React.Component {
    render() {
        return (
            <div>
                <Navbar name="Все для дома"/>
                <Navbar name="Дектор"/>
                <Navbar name="Двери"/>
                <Navbar name="Кафель"/>
                <Navbar name="Лакокраска"/>
                <Navbar name="Мебель"/>
                <Navbar name="Инструменты"/>
            </div>
        );
    }
}

export default Navbar_parent;