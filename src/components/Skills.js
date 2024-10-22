import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getSkills, addSkill } from "../app/actions/skillsAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "../components/Box";
import "../assets/styles/skills.scss";


const Skills = () => {
  const [skillOpen, setSkillsOpen] = useState(false);
  const { data } = useSelector((state) => state.skillsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    // eslint-disable-next-line
  }, []);

  const initialValues = {
    skill: "",
    range: "",
  };

  const validationSchema = Yup.object().shape({
    skill: Yup.string().required("Skill name is a required field"),
    range: Yup.number()
      .typeError("Skill range must be a `number` type")
      .required("Skill range is a required field")
      .min(10, "Skill range must be greater than or equal to 10")
      .max(100, "Skill range must be less than or equal to 100"),
  });

  const onSubmit = (values, { resetForm }) => {
    const newSkill = {
      name: values.skill,
      range: values.range,
    };
    dispatch(addSkill(newSkill));
    resetForm();
  };

  return (
    <Box id="skills">
      <div className="skills-section">
        <div className="skills-head">
          <h2>Skills</h2>
          <button className="button" onClick={() => setSkillsOpen(!skillOpen)}>
            <FontAwesomeIcon icon={faEdit} color="white" />
            <p className="button__text">Open edit</p>
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form
            className="skills-edit-container"
            style={{ display: skillOpen ? "block" : "none" }}
          >
            <div className="skill-name">
              <label htmlFor="skill">Skill name</label>
              <Field type="text" name="skill" placeholder="Enter skill name" />
            </div>
            <ErrorMessage
              name="skill"
              component="p"
              className="error-message"
            />
            <div className="skill-range">
              <label htmlFor="range">Skill range</label>
              <Field type="text" name="range" placeholder="Enter skill range" />
            </div>
            <ErrorMessage
              name="range"
              component="p"
              className="error-message"
            />
            <button className="add-skill" type="submit">
              Add skill
            </button>
          </Form>
        </Formik>
        <div className="skills-list-container">
          <ul className="skills-list">
            {data.map(({ name, range }, i) => (
              <li key={i} className="skill" style={{ width: `${range}%` }}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-levels">
          <div className="borders">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
          </div>
          <div className="levels">
            <span className="beginner">Beginner</span>
            <span className="proficient">Proficient</span>
            <span className="expert">Expert</span>
            <span className="master">Master</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Skills;

