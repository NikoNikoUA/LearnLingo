import { useSelector } from "react-redux";
import { selectFavTeachers } from "../redux/selectors";
import { Card } from "../../src/components/Teachers/Card/Card";

const Favorites = () => {
  const favTeachers = useSelector(selectFavTeachers);
  return (
    <>
      <ul>
        {favTeachers?.map((teacher) => (
          <li key={teacher.id}>
            <Card teacher={teacher} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
