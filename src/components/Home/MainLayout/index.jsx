import React, { useEffect } from "react";
import { useGetData } from "../../../hooks/useGetData,";
import MasonryContainer from "../../ui/MasonryContainer/MasonryContainer";
import { useInView } from "react-intersection-observer";

function MainLayout() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status
  } = useGetData();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const allItems = React.useMemo(
    () =>
      data?.pages.reduce(function (a, b) {
        return a.concat(b);
      }),
    [data]
  );
  // console.log(allItems);
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div>
      <MasonryContainer
        columnsCountBreakPoints={{
          350: 1,
          640: 2,
          700: 3,
        }}
        gutter="24px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "start",
        }}
      >
        {allItems?.map((photo) => (
          <a key={photo.id} ref={ref} to={`/${photo.id}`}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
          // </div>
        ))}
      </MasonryContainer>
    </div>
  );
}

export default MainLayout;
