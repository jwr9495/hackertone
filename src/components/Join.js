import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { baseURL } from "../common/config";

export default function Join({
  id,
  setId,
  password,
  setPassword,
  name,
  setName,
  company_no,
  setCompany_no,
  company_name,
  setCompany_name,
  company_location,
  setCompany_location,
  phonenumber,
  setPhonenumber
}) {
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [company_no, setCompany_no] = useState("");
  // const [company_name, setCompany_name] = useState("");
  // const [company_location, setCompany_location] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  const [isIdChecked, setIsIdChecked] = useState("yet");
  const [joinResult, setJoinResult] = useState(false);

  const checkdupId = async () => {
    const { data } = await axios.get(`${baseURL}/stamp/user_check?id=${id}`);
    setIsIdChecked(data.result);
    console.log(data);
  };

  const handleSubmit = async e => {
    //  중복체크 다시보자
    e.preventDefault();
    if (!isIdChecked || isIdChecked === "yet") {
      alert("아이디중복체크해주세요");
      return;
    }

    const { data } = await axios.post(`${baseURL}/stamp/join`, {
      id,
      password,
      name,
      company_no,
      company_name,
      company_location,
      phonenumber
    });
    if (data.result) {
      console.log(data.result);
      setJoinResult(true);
    } else {
      alert("Sign Up failed, please call admin");
    }
  };

  return (
    <>
      {joinResult && <Redirect to="/login" />}
      <form onSubmit={handleSubmit} class="formManager">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label className="labelManager">ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
            id="id"
            value={id}
            onChange={e => {
              setIsIdChecked("yet");
              setId(e.target.value);
            }}
          />
          <button
            type="button"
            className="btns btn-secondary"
            onClick={checkdupId}
          >
            {isIdChecked === "yet"
              ? "중복체크점요"
              : isIdChecked
              ? "아이디 사용가능"
              : "중복입니다."}
          </button>
        </div>

        <div className="form-group">
          <label className="labelManager">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="숫자, 특수문자, 영어대,소문자 1개 포함 필수"
            id="password"
            // pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label className="labelManager">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="이름을 써주세요"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="labelManager">company_no</label>
          <input
            type="text"
            className="form-control"
            placeholder="회사등록번호"
            id="company_no"
            value={company_no}
            onChange={e => {
              setCompany_no(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="labelManager">company_name</label>
          <input
            type="text"
            className="form-control"
            placeholder="회사명"
            id="company_name"
            value={company_name}
            onChange={e => {
              setCompany_name(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="labelManager">company_location</label>
          <input
            type="text"
            className="form-control"
            placeholder="회사위치"
            id="company_location"
            value={company_location}
            onChange={e => {
              setCompany_location(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="labelManager">phonenumber</label>
          <input
            type="text"
            className="form-control"
            placeholder="연락처"
            id="phonenumber"
            value={phonenumber}
            onChange={e => {
              setPhonenumber(e.target.value);
            }}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="btns">
          Submit
        </button>
      </form>
    </>
  );
}
