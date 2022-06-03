import { useEffect, useState } from "react";

const useProducts = () => {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://gentle-escarpment-15468.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return [product, setProduct];

}

export default useProducts;