

export async function fetchData(props) {
    // console.log(props);
    const resp = await fetch(
      `https://api.unsplash.com/photos?client_id=Djh__xzu7c6vZ1HbNEgeye1iR65ud8gOTeVMB2tkS8c&per_page=11&page=${props.pageParam}`
    );
    return resp.json();
  }