import React from "react";
import Category from "../components/Category";
import SortPopup from "../components/SortPopup";
import Pizza from "../components/Pizza";

function Home(props) {

    const categoriesList = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortList = ['популярности', 'цене', 'алфавиту'];

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