import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import styled from "styled-components";

export default function SurveyQuestion({
  question,
  setQuestion,
  removeQuestion,
  moveQuestionUp,
  moveQuestionDown
}) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <QuestionField>
      {editing ? (
        <QuestionForm question={question} setQuestion={setQuestion} />
      ) : (
        <>
          <p>{question.text}</p>
          {question.hasOptions ? (
            question.options.map((option, i) => (
              <label key={i}>
                <input
                  type={question.inputType}
                  id={option}
                  name={option}
                  value={option}
                  disabled
                />
                {option}
              </label>
            ))
          ) : (
            <textarea disabled />
          )}
        </>
      )}
      <Button onClick={toggleEditing}>
        {editing ? (
          <>
            <i className="fas fa-save icon" />
            설문 저장하기
          </>
        ) : (
          <>
            <i className="fas fa-pen icon" />
            설문 작성하기
          </>
        )}
      </Button>
      <Button onClick={removeQuestion}>
        <i className="fas fa-trash-alt icon" />
        설문 삭제하기
      </Button>
      <br />
      설문지 질문 순서바꾸기:{" "}
      <Button onClick={moveQuestionUp}>
        <i className="fas fa-angle-up icon" />
        Up
      </Button>
      <Button onClick={moveQuestionDown}>
        <i className="fas fa-angle-down icon" />
        Down
      </Button>
    </QuestionField>
  );
}

const QuestionField = styled.li`
  margin-top: 1em;
  border-top: #ddd solid 1.5px
  padding-bottom: 1.5em;
`;

const Button = styled.button`
  margin: 0.3em;
`;
