import moment from "moment";

export const commonDateFormat = (date: Date, withYear: boolean = false) =>
  moment(date).format(withYear ? "MMMM Do, YYYY" : "MMMM Do");
