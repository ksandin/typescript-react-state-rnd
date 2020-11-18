import moment from "moment";

export const commonDateFormat = (date: Date) => moment(date).format("MMMM Do");
