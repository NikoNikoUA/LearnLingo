import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import icons from "../../../sprite.svg";

export const TrialLessonForm = ({ teacher, closeModal }) => {
  const { avatar_url, name, surname } = teacher;
  console.log(teacher);

  const TrialLessonSchema = Yup.object().shape({
    reason: Yup.string(),
    name: Yup.string(),
    email: Yup.number(),
    phone: Yup.number(),
  });

  return (
    <Formik
      initialValues={{
        reason: "",
        name: "",
        email: "",
        phone: "",
      }}
      validationSchema={TrialLessonSchema}
    >
      <Form>
        <button type="button" onClick={closeModal}>
          <svg width="32px" height="32px">
            <use href={`${icons}#icon-modal-cross`}></use>
          </svg>
        </button>
        <h1>Book trial lesson</h1>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div>
          <div>
            <img src={avatar_url} height="32px" width="32px" alt="teacher" />
          </div>
          <div>
            <p>Your teacher</p>
            <p>
              {name}
              {surname}
            </p>
          </div>
        </div>
        <h2>What is your main reason for learning English?</h2>
        <div>
          <label>
            <Field type="radio" name="reason" value="career" />
            Career and business
          </label>
          <label>
            <Field type="radio" name="reason" value="lesson" />
            Lesson for kids
          </label>
          <label>
            <Field type="radio" name="reason" value="living" />
            Living abroad
          </label>
          <label>
            <Field type="radio" name="reason" value="exams" />
            Exams and coursework
          </label>
          <label>
            <Field type="radio" name="reason" value="culture" />
            Culture, travel or hobby
          </label>
        </div>
        <div>
          <label htmlFor="name"></label>
          <ErrorMessage name="name" component="div" />
          <Field name="name" placeholder="Full name" />

          <label htmlFor="email"></label>
          <ErrorMessage name="email" component="div" />
          <Field name="email" placeholder="Email" />

          <label htmlFor="phone"></label>
          <ErrorMessage name="phone" component="div" />
          <Field name="phone" placeholder="Phone number" />
        </div>
        <button
          type="button"
          onClick={() => (window.location.href = "tel:+380730000000")}
        >
          Book
        </button>
      </Form>
    </Formik>
  );
};
