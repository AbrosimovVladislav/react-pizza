import React from "react";

function Category(props) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>Все</li>
                    {
                        //если items не пустой из каждого имени формируем элемент
                        props.items && props.items.map((name,index) =>
                            //className меняется в зависимости от значение индекса лежащего в activeItem
                            <li className={activeItem === index ? 'active' : ''}
                                // при нажатии на элемент меняем значение в стейте на индекс текущего элемента
                                onClick={() => onSelectItem(index)}
                                key={name}>
                                {name}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Category;