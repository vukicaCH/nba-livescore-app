import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../features/date/dateSlice';
import { formatDate } from '../../helper';
import useStyles from '../../styles'

export default function GameDatePicker({ date }) {

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = (newValue) => dispatch(changeDate(formatDate(newValue)))

  const onKeyDown = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.gameDatePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
        <DatePicker
          value={date}
          onChange={handleChange}
          renderInput={(params) =>
            <TextField
              onKeyDown={onKeyDown}
              {...params}
              disabled={true}
            />}
        />
      </LocalizationProvider>
    </div>
  );
}
