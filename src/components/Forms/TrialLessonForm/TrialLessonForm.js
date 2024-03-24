import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import icons from "../../../sprite.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import {
  CloseBtn,
  MainHeading,
  Text,
  TeacherContainer,
  Img,
  HeaderThree,
  Name,
  Question,
  InputContainer,
  BtnBook,
  Error1,
  Error2,
  Error3,
} from "./TrialLessonForm.styled";
import { useState } from "react";

export const TrialLessonForm = ({ teacher, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState("career");
  const { avatar_url, name, surname } = teacher;

  const buttonColor = [
    {
      value: "Career and business",
      color: "#F4C550",
    },
    {
      value: "Lessons for kids",
      color: "#F4C550",
    },
    {
      value: "Living abroad",
      color: "#F4C550",
    },
    {
      value: "Exams and coursework",
      color: "#F4C550",
    },
    {
      value: "Culture, travel or hobby",
      color: "#F4C550",
    },
  ];

  const onRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const UkrRegExp = /^\+38\(\d{3}\)\d{7}$/;

  const TrialLessonSchema = Yup.object().shape({
    radioGroup: Yup.string().required("A radio option is required"),
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(32, "Name is too long!")
      .required("Name is required!")
      .lowercase()
      .trim(),
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "Email error",
        excludeEmptyString: true,
      })
      .required("Email is required"),
    phone: Yup.string()
      .matches(UkrRegExp, "Phone number is not valid")
      .required("A phone number is required"),
  });

  return (
    <Formik
      initialValues={{
        radioGroup: selectedValue,
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={TrialLessonSchema}
      onSubmit={(values, actions) => {
        console.log("form subitted");
        console.log(values);
        actions.resetForm();
        closeModal();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <CloseBtn type="button" onClick={closeModal}>
            <svg width="32px" height="32px">
              <use href={`${icons}#icon-modal-cross`}></use>
            </svg>
          </CloseBtn>
          <MainHeading>Book trial lesson</MainHeading>
          <Text>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </Text>
          <TeacherContainer>
            <div>
              <Img src={avatar_url} height="44px" width="44px" alt="teacher" />
            </div>
            <div>
              <HeaderThree>Your teacher</HeaderThree>
              <Name>
                {name}&nbsp;
                {surname}
              </Name>
            </div>
          </TeacherContainer>
          <Question>What is your main reason for learning English?</Question>
          <FormControl>
            <RadioGroup>
              {buttonColor.map((button) => (
                <FormControlLabel
                  name="radioGroup"
                  key={button.value}
                  sx={{
                    color: `${(props) => props.theme.colors.textColor}`,
                    marginBottom: "16px",
                    padding: 0,
                    "& .Mui-checked.MuiRadio-root": {
                      color: button.color,
                    },
                    "& .MuiFormControlLabel-label": {
                      fontSize: 16,
                      letterSpacing: "0.02rem",
                    },
                    "& .MuiButtonBase-root.MuiRadio-root": {
                      color: `${(props) => props.theme.colors.textHoverColor}`,
                      padding: 0,
                      backgroundColor:
                        selectedValue === button.value
                          ? "transparent"
                          : `${(props) => props.theme.colors.textHoverColor}`,
                    },
                    "& .MuiTypography-root": {
                      marginLeft: 1,
                    },
                  }}
                  value={button.value}
                  control={<Radio />}
                  label={button.value}
                  onChange={onRadioChange}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <InputContainer>
            <label htmlFor="name"></label>
            <Error1 name="name" component="div" />
            <Field name="name" placeholder="Full name" />

            <label htmlFor="email"></label>
            <Error2 name="email" component="div" />
            <Field name="email" placeholder="Email" />

            <label htmlFor="phone"></label>
            <Error3 name="phone" component="div" />
            <Field name="phone" placeholder="Phone number" />
          </InputContainer>
          <BtnBook
            type="submit"
            onClick={() => (window.location.href = "tel:+380730000000")}
          >
            Book
          </BtnBook>
        </Form>
      )}
    </Formik>
  );
};
