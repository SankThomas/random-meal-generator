import React, { useState, useEffect } from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
  const [food, setFood] = useState([])

  const fetchFood = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.meals)
    setFood(data.meals)
  }

  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <div className='button'>
        <button onClick={() => fetchFood()} className='btn'>
          Generate Meal
        </button>
      </div>
      <section className='meals'>
        {food.map((f) => {
          const { idMeal, strMeal, strInstructions, strMealThumb } = f

          return (
            <article key={idMeal}>
              <div>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div>
                <h3>How to cook</h3>
                <div className='underline'></div>
                <p>{strInstructions}</p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Meal
