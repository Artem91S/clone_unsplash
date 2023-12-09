import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function MasonryContainer({children, gutter,columnsCountBreakPoints,style}) {
  return (

      <ResponsiveMasonry
        columnsCountBreakPoints={columnsCountBreakPoints}
      >
        <Masonry
        gutter={gutter}
        style={style}
        >
            {children}
        </Masonry>
      </ResponsiveMasonry>

  );
}

export default MasonryContainer;
