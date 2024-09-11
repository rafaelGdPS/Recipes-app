import { CategoryObject } from "../../utils/types";

type CategoriesProps = {
  categories: CategoryObject[]
};

function Categories({ categories }: CategoriesProps) {
  return (
    <nav>
    {categories.map((category) => (
      <button key={ category.strCategory }>
        {category.strCategory}
      </button>
    ))}
  </nav>
  );
}

export default Categories;