// import Checkbox from "@mui/material/Checkbox";
// import { HeartWrap, HeartStroke, HeartFill } from "./HeartIcon.styled";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addFavTeacher,
//   removeFavTeacher,
// } from "../../redux/teachers/favTeachersSlice";
// import {
//   selectFavTeachers,
//   selectGetAllTeachers,
//   selectGetTeachers,
// } from "../../redux/selectors";
// import { useEffect, useState } from "react";

// export const HeartIcon = ({ teacher, index }) => {
//     const [isHeartFavorite, setIsHeartFavorite] = useState(false);
//   const dispatch = useDispatch();
//   const favTeachers = useSelector(selectGetTeachers);
//   console.log(favTeachers);

//   const isChecked = favTeachers?.some((teacher) => teacher.index === index);
//   console.log(isChecked);

//   const onHeartClick = () => {
//     if (isChecked) {
//       dispatch(removeFavTeacher(index));
//     } else {
//       dispatch(addFavTeacher(teacher));
//     }
//   };

//     useEffect(() => {
//       if (favTeachers?.some((teacher) => teacher.index === index)) {
//         setIsHeartFavorite(true);
//       } else {
//         setIsHeartFavorite(false);
//       }
//     }, [favTeachers, index]);

//     const onHeartClick = () => {
//       isHeartFavorite
//         ? dispatch(removeFavTeacher(index))
//         : dispatch(addFavTeacher(teacher));
//     };

//   return (
//     <HeartWrap>
//       <Checkbox
//         icon={<HeartStroke />}
//         checkedIcon={<HeartFill />}
//         checked={isChecked}
//         onChange={onHeartClick}
//       />
//     </HeartWrap>
//   );
// };
