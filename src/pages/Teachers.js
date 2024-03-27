import { useEffect, useState } from "react";
import { fetchTeachers } from "../redux/teachers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectGetTeachers,
  selectIsLoading,
} from "../redux/selectors";
import { Loader } from "../components/Loader/Loader";
import { Container, TeachersContainer } from "../CommonStyles.styled";
import { CardsList } from "../components/Teachers/CardsList/CardsList";
import { LoadMore } from "../components/LoadMore/LoadMore";

const LIMIT_PER_PAGE = 4;

const Teachers = () => {
  const [teacherCount, setTeacherCount] = useState(LIMIT_PER_PAGE);

  const dispatch = useDispatch();
  const teachers = useSelector(selectGetTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers());
    }
  }, [dispatch, teachers]);

  const limitedTeachers = teachers.slice(0, teacherCount);

  const clickLoadMore = () => {
    if (teacherCount >= teachers.length) {
      return;
    }
    setTeacherCount((prevTeacherCount) => prevTeacherCount + LIMIT_PER_PAGE);
  };

  return (
    <section style={{ background: "#f8f8f8" }}>
      <Container>
        {isLoading && !error && <Loader />}
        {error && <p>Something went wrong, try reloading the page</p>}
        <TeachersContainer>
          <CardsList teachers={limitedTeachers} allTeachers={teachers} />
          {teachers.length === 0 && !isLoading && (
            <p>Sorry, no matches were found. Please try again.</p>
          )}
          {teacherCount < teachers.length && (
            <LoadMore clickLoadMore={clickLoadMore} />
          )}
        </TeachersContainer>
      </Container>
    </section>
  );
};

export default Teachers;
