import './Home.scss';
import { useAppSelector } from '../../../hooks/redux';
import Product from '../../Product/Product';
import GOSTList from '../../GOSTList/GOSTList';
import Filters from '../../Filters/Filters';

const Home = () => {
    const { products } = useAppSelector((state) => state.productReducer);
    const { priceFilter } = useAppSelector((state) => state.filterReducer);
    const { gostsFilter, typesFilter } = useAppSelector(
        (state) => state.filterReducer
    );

    const productsList = () => {
        let productsList = products;

        if (gostsFilter.length && typesFilter.length) {
            productsList = products.filter(
                (prod) =>
                    gostsFilter.includes(prod.gost) &&
                    typesFilter.includes(prod.type)
            );
        } else if (gostsFilter.length && !typesFilter.length) {
            productsList = products.filter((prod) =>
                gostsFilter.includes(prod.gost)
            );
        } else if (!gostsFilter.length && typesFilter.length) {
            productsList = products.filter((prod) =>
                typesFilter.includes(prod.type)
            );
        }

        return productsList.filter(
            (prod) =>
                prod.price <= priceFilter.max && prod.price >= priceFilter.min
        );
    };

    return (
        <div className="Home wrapper">
            <Filters />
            <div className="Home__content">
                <GOSTList />
                <div>
                    {productsList().length ? (
                        productsList().map((prod) => (
                            <Product key={prod.id} props={prod} />
                        ))
                    ) : (
                        <h1>Подходящих товаров не найдено</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
