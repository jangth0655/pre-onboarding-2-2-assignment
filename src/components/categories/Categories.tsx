import Category from 'components/category/Category';
import { CategoryType } from 'interfaces/CarsInterface';
import S from './styles';

const categories: CategoryType[] = ['전체', 'SUV', '대형', '중형', '소형'];
const Categories = () => {
  return (
    <S.Nav>
      <ul>
        {categories.map((item) => (
          <Category key={item} text={item} />
        ))}
      </ul>
    </S.Nav>
  );
};

export default Categories;
