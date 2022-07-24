import { useState, useEffect } from 'react';
import './Filters.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import useDebounce from '../../hooks/useDebounce';
import { filterSlice } from '../../store/reducers/FilterSlice';
import filtersImg from '../../img/icons/filters.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filters = () => {
    const { types, products } = useAppSelector((state) => state.productReducer);
    const { typesFilter } = useAppSelector((state) => state.filterReducer);
    const { selectType, unSelectType, selectPrice } = filterSlice.actions;
    const dispatch = useAppDispatch();

    let priceRange: number[] = [];
    products.forEach((prod) => priceRange.push(prod.price));
    priceRange.sort((a, b) => a - b);
    const priceMin: number = Math.floor(priceRange[0]);
    const priceMax: number = Math.ceil(priceRange[priceRange.length - 1]);

    const [price, setPriceFilter] = useState({
        min: priceMin,
        max: priceMax,
    });

    const setTypesFilter = (value: string) => {
        if (!typesFilter.includes(value)) {
            dispatch(selectType(value));
        } else {
            dispatch(unSelectType(value));
        }
    };

    const onSliderChange = (value: any) => {
        setPriceFilter({ min: +value[0], max: +value[1] });
    };

    const checkMinPriceChange = (value: number) => {
        if (value >= priceMin && value < priceMax) {
            setPriceFilter({ ...price, min: value });
        } else {
            setPriceFilter({ ...price, min: priceMin });
        }
    };
    const debauncedMinPriceChange = useDebounce(checkMinPriceChange, 500);

    const checkMaxPriceChange = (value: number) => {
        if (value <= priceMax && value > priceMin) {
            setPriceFilter({ ...price, max: value });
        } else {
            setPriceFilter({ ...price, max: priceMax });
        }
    };
    const debauncedMaxPriceChange = useDebounce(checkMaxPriceChange, 500);

    useEffect(() => {
        dispatch(selectPrice({ max: price.max, min: price.min }));
    });

    return (
        <div className="Filters">
            <div className="Filters__tittle">
                <img src={filtersImg} alt="filters" />
                <span>Фильтры</span>
            </div>
            <div className="Filters__price">
                <span>Цена, руб.</span>
                <div className="price-inputs">
                    <input
                        type="text"
                        placeholder="от"
                        value={price.min}
                        onChange={(e) => {
                            +e.target.value &&
                                setPriceFilter({
                                    ...price,
                                    min: +e.target.value,
                                });
                            +e.target.value &&
                                debauncedMinPriceChange(+e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="до"
                        value={price.max}
                        onChange={(e) => {
                            +e.target.value &&
                                setPriceFilter({
                                    ...price,
                                    max: +e.target.value,
                                });
                            +e.target.value &&
                                debauncedMaxPriceChange(+e.target.value);
                        }}
                    />
                </div>
                <Slider
                    className="price-slider"
                    range
                    defaultValue={[price.min, price.max]}
                    min={priceMin}
                    max={priceMax}
                    allowCross={false}
                    onChange={onSliderChange}
                />
            </div>
            <div className="Filters__types">
                <span>Тип продукта</span>
                {types.length &&
                    types.map((type, i) => (
                        <label key={i}>
                            <input
                                value={type.type}
                                type="checkbox"
                                onChange={(e) => setTypesFilter(e.target.value)}
                            />
                            {type.type}
                        </label>
                    ))}
            </div>
        </div>
    );
};

export default Filters;
