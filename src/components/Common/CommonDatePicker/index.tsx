import { TextField } from '@mui/material';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

interface CommonProps {
  value: DateTime | string | null;
  name: string;
  onChange: (name: string, value: string | null) => void;
  label: string;
  disableFuture?: boolean;
  disablePast?: boolean;
}

const Index: React.FC<CommonProps> = ({ label, name, onChange, value, disableFuture, disablePast }) => {
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);
  useEffect(() => {
    if (String(value)?.length > 0) {
      const utcDateTime = DateTime.fromISO(value as string).toUTC();
      setSelectedDate(utcDateTime);
    }
  }, []);
  const handleDateChange = (newValue: DateTime | null) => {
    if (newValue) {
      const utcDateTime = newValue.toUTC();
      setSelectedDate(utcDateTime);
      const utcISOString = utcDateTime.toISO();
      onChange(name, utcISOString);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePicker
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        disableFuture={disableFuture}
        disablePast={disablePast}
      />
    </LocalizationProvider>
  );
};

export default Index;
