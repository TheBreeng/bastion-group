import { HOME__PATH, ADDPRODUCTTYPE__PATH, ADDPRODUCT__PATH } from './consts';

interface IPath {
    path: string;
    tittle: string;
}

const routes: IPath[] = [
    { path: HOME__PATH, tittle: 'Главная' },
    {
        path: ADDPRODUCTTYPE__PATH,
        tittle: 'Типы продуктов',
    },
    {
        path: ADDPRODUCT__PATH,
        tittle: 'Продукты',
    },
];

export default routes;
