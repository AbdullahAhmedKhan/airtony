import React, { useEffect, useState } from 'react';

const useProductDetails = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://fathomless-reaches-02788.herokuapp.com/part/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
        console.log(product);
    }, [id])
    return [product, setProduct];
};

export default useProductDetails;