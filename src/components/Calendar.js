import React, { Component } from "react";
import ReactLightCalendar from "@lls/react-light-calendar";
import "@lls/react-light-calendar/dist/index.css";

const DAY_LABELS = ["월", "화", "수", "목", "금", "토", "일"];
const MONTH_LABELS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월"
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    // Get initial startDate and endDate
    this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
  }

  onChange = (startDate, endDate) => this.setState({ startDate, endDate });

  render = () => {
    const { startDate, endDate } = this.state;

    return (
      <ReactLightCalendar
        dayLabels={DAY_LABELS}
        monthLabels={MONTH_LABELS}
        onChange={this.onChange}
        startDate={startDate}
        endDate={endDate}
        range="true"
        displayTime
        {...this.props} // Add parent's additionnal props
      />
    );
  };
}

export default Calendar;
