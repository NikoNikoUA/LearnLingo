import Checkbox from "@mui/material/Checkbox";
import { HeartStroke, HeartFill } from "./HeartIcon.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavTeacher,
  removeFavTeacher,
} from "../../redux/teachers/favTeachersSlice";
import { selectFavTeachers } from "../../redux/selectors";
import { useEffect, useState } from "react";

export const HeartIcon = ({ teacher, id }) => {
  const [isHeartFavorite, setIsHeartFavorite] = useState(false);
  const dispatch = useDispatch();
  const favTeachers = useSelector(selectFavTeachers);

  useEffect(() => {
    if (favTeachers?.some((item) => item.id === id)) {
      setIsHeartFavorite(true);
    } else {
      setIsHeartFavorite(false);
    }
  }, [favTeachers, id]);

  const onHeartClick = () => {
    setIsHeartFavorite(!isHeartFavorite);
    isHeartFavorite
      ? dispatch(removeFavTeacher(teacher))
      : dispatch(addFavTeacher(teacher));
  };

  return (
    <>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        checked={isHeartFavorite}
        onChange={onHeartClick}
      />
    </>
  );
};
