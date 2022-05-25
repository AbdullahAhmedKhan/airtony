import React, { useEffect, useState } from 'react';

const useProductDetails = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
            console.log(product);
    }, [id])
    return [product, setProduct];
};

export default useProductDetails;