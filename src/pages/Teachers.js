import { useEffect } from "react";
import { fetchTeachers } from "../redux/teachers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectGetTeachers,
  selectIsLoading,
  selectPage,
} from "../redux/selectors";
import { Loader } from "../components/Loader/Loader";
import { Container, TeachersContainer } from "../CommonStyles.styled";
import { CardsList } from "../components/Teachers/CardsList/CardsList";
// import { LoadMore } from "../components/LoadMore/LoadMore";

const Teachers = () => {
  // const [loadMore, setLoadMore] = useState(false);

  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const teachers = useSelector(selectGetTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (page === 1 && teachers.length === 0) {
      dispatch(fetchTeachers());
      // setLoadMore(true);
    }
  }, [dispatch, page, teachers]);

  // const clickLoadMore = () => {
  //   if (page < totalNumberOfPages) {
  //     setLoadMore(true);
  //     dispatch(fetchTeachers(page));
  //   }
  // };

  return (
    <Container>
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong, try reloading the page</p>}
      <TeachersContainer>
        <CardsList teachers={teachers} />
        {teachers.length === 0 && !isLoading && (
          <p>Sorry, no matches were found. Please try again.</p>
        )}
        {/* {loadMore && page < totalNumberOfPages && (
          <LoadMore clickLoadMore={clickLoadMore} />
        )} */}
      </TeachersContainer>
    </Container>
  );
};

export default Teachers;
