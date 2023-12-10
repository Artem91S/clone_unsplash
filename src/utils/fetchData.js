export async function fetchData(props) {
    const resp = await fetch(
      `https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_API_KEY}&per_page=11&page=${props.pageParam}`
    );
    return resp.json();
  }


  export async function fetchDataLink(props) {
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&query=${props.queryKey[0]}&per_page=30&page=${props.pageParam}`
    );
    return resp.json();
  }

 export async function fetchPhoto(photoId) {
    // console.log(props);
    const resp = await fetch(
      `https://api.unsplash.com/photos/${photoId}?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c`
    );
    return resp.json();
  }
  export async function fetchSearchPhoto(props) {
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&query=${props.queryKey[0]}&per_page=30&page=${props.pageParam}`
      );
    return resp.json();
  }
  export async function fetchSearchCategoria(props) {
    const resp = await fetch(
      `https://api.unsplash.com/search/collections?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&query=${props.queryKey[0]}&per_page=30&page=${props.pageParam}`
      );
    return resp.json();
  }