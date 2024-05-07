import React from 'react';
import CategoryComponent from '../components/CategoryComponent';
import categories from '../data/categoryData';

const CategoryContainer = () => {
  return (
    <div>
      <CategoryComponent categories={categories} />
    </div>
  );
};

export default CategoryContainer;
