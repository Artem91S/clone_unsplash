import React, { useEffect } from 'react'
import { useGetDataCategoria } from '../../hooks/useGetDataCategoria';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function CategoriaPage({queryValue}) {
    useDocumentTitle(queryValue)
    const {data} =useGetDataCategoria(queryValue)
  
    console.log(data);
  return (
    <div>
    {/* <Article title={title} /> */}
    </div>
  )
}

export default CategoriaPage