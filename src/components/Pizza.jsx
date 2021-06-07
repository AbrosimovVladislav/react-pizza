import React from 'react';
import classNames from "classnames";


function Pizza(props) {

    const typesNames = ['тонкое', 'традиционное'];
    const sizesNames = [26, 30, 40];
    const [activeType, setActiveType] = React.useState(props.types[0]);
    const [activeSize, setActiveSize] = React.useState(props.sizes[0]);

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typesNames.map((typeName, index) =>
                        <li className={classNames({
                            'active': activeType === index,
                            'disabled': !props.types.includes(index)
                        })}
                            onClick={() => setActiveType(index)}
                            key={typeName}
                        >
                            {typeName}
                        </li>)}
                </ul>
                <ul>
                    {
                        //если items не пустой из каждого имени формируем элемент
                        sizesNames.map((sizeName) =>
                            //className меняется в зависимости от значение индекса лежащего в activeItem
                            <li className={classNames({
                                'active': activeSize === sizeName,
                                'disabled': !props.sizes.includes(sizeName)
                            })}
                                // при нажатии на элемент меняем значение в стейте на индекс текущего элемента
                                onClick={() => setActiveSize(sizeName)}
                                key={sizeName}>
                                {sizeName} см
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} Р</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    );
}

export default Pizza;