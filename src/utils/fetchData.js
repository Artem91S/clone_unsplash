

export async function fetchData(props) {
    // console.log(props);
    const resp = await fetch(
      `https://api.unsplash.com/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&per_page=11&page=${props.pageParam}`
    );
    return resp.json();
  }


  export async function fetchDataCategoria(props,queryValue) {
    // console.log(props);
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&query=${queryValue}&per_page=30&page=${props.pageParam}`
    );
    return resp.json();
  }

 export async function fetchPhoto(photoId) {
    // console.log(props);
    const resp = await fetch(
      `https://api.unsplash.com/photos/${photoId}?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c`
      // `https://api.unsplash.com/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&per_page=11&page=${props.pageParam}`
    );
    return resp.json();
  }