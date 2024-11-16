import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';

export default function index(message: string, type: string) {
  return dispatch(
    openSnackbar({
      open: true,
      message: message,
      variant: 'alert',
      alert: {
        color: type
      },
      close: true
    })
  );
}
