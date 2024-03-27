import { Loader } from "../../Loader/Loader";
import { Card } from "../Card/Card";
import { TeachersItem } from "./CardsList.styled";

export const CardsList = ({ teachers, allTeachers }) => {
  if (!teachers) {
    <>
      <p>Loading...</p>
      <Loader />
    </>;
  }

  return (
    <ul>
      {teachers?.map((teacher) => (
        <TeachersItem key={teacher.id}>
          <Card teacher={teacher} />
        </TeachersItem>
      ))}
    </ul>
  );
};
