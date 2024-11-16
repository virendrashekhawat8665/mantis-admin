import moment from 'moment';
import React from 'react';

function DateFormat(createdAt: string, timeFormat?: boolean) {
  return <div>{timeFormat == false ? moment(createdAt).format('DD/MM/yyyy') : moment(createdAt).format('DD/MM/yyyy hh:mm A')}</div>;
}

export default DateFormat;
