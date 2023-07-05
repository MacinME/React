import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch Man", "Dragon Ball"]);
  
  const onAddCategory = () => {
      setCategories([...categories, 'Valorant']);
  }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {
        <ol>
          { categories.map( category => ( <li key={ category }>{ category }</li> )) }
        </ol>
      }
      <button onClick={ onAddCategory }>Add new category</button>
    </>
  )
}
