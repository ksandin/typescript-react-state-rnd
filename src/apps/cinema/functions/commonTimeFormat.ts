import moment from "moment";

export const commonTimeFormat = (date: Date) => moment(date).format("HH:mm");
