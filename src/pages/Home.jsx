import React from "react";
import Category from "../component/Category";
import SortPopup from "../component/SortPopup";
import Pizza from "../component/Pizza";
import store from "../redux/store";

function Home(props) {

    const categoriesList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortList = [{name:'популярности', type:'popular'}, {name:'цене', type:'price'}, {name:'алфавиту',type: 'abc'}];

    return (
        <div className="container">
            <div className="content__top">
                <Category items={categoriesList}/>
                <SortPopup items={sortList}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.items.map(item => <Pizza {...item} key={item.id}/>)
                }
            </div>
        </div>
    )
}

export default Home;