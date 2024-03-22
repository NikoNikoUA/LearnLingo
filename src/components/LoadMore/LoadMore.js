import { LoadBtn } from "./LoadMore.styled";

export const LoadMore = ({ clickLoadMore }) => {
  return (
    <>
      <LoadBtn onClick={clickLoadMore} type="button">
        Load More
      </LoadBtn>
    </>
  );
};
