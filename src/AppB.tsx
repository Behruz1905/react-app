import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";


function AppB() {
 
  const ref = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState('')

  //after Render
  useEffect(() => {
    //Side effect
    if(ref.current) ref.current.focus();
  })

  return (
    <div>
      <>
        <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
        </select>

        <ProductList category={category}/>
        <br />
      <input ref={ref} type="text" className="form-control" />
      </>
    </div>
  )
}

export default AppB;
