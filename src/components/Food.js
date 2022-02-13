const Food = ({ food }) => {
    const AllFood = food.map((food) => <li key={food.toString()}> {food}</li>);
    return (
      <div>
        <h3> List of foods</h3>
        <ul>{AllFood}</ul>
      </div>
    );
  };
  
  export default Food;
  