import './GOSTList.scss';
import { useAppSelector } from '../../hooks/redux';
import GOSTItem from '../GOSTItem/GOSTItem';

const GOSTList = () => {
    const { gosts } = useAppSelector((state) => state.productReducer);

    return (
        <div className="GOSTList">
            {gosts.length ? (
                gosts.map((gost, i) => <GOSTItem gost={gost} key={i} />)
            ) : (
                <p>Список ГОСТов пуст</p>
            )}
        </div>
    );
};

export default GOSTList;
