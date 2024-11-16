import { openSnackbar } from 'store/reducers/snackbar';
import { dispatch } from 'store';
const fileSizeExtenshion = (data: any, type: string) => {
  if (type == 'photo') {
    const allowed_file_size = 2;
    if (data.size / (1024 * 1024) > allowed_file_size) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'File too large',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );

      return false;
    } else {
      const array_of_allowed_files = ['png', 'jpeg', 'jpg'];
      const file_extension = data.name.slice(((data.name.lastIndexOf('.') - 1) >>> 0) + 2);
      if (!array_of_allowed_files.includes(file_extension)) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Invalid file',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: false
          })
        );

        return false;
      } else {
        return true;
      }
    }
  }
  // For Home Page Image

  if (type == 'video') {
    const allowed_file_size = 50;
    if (data.size / (1024 * 1024) > allowed_file_size) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'File too large',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );

      return false;
    } else {
      const array_of_allowed_files = ['mp4'];
      const file_extension = data.name.slice(((data.name.lastIndexOf('.') - 1) >>> 0) + 2);
      if (!array_of_allowed_files.includes(file_extension)) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Invalid file',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: false
          })
        );
        return false;
      } else {
        return true;
      }
    }
  }
  if (type == 'pdf') {
    const allowed_file_size = 2;
    if (data.size / (1024 * 1024) > allowed_file_size) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'File too large',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );

      return false;
    } else {
      const array_of_allowed_files = ['pdf'];
      const file_extension = data.name.slice(((data.name.lastIndexOf('.') - 1) >>> 0) + 2);
      if (!array_of_allowed_files.includes(file_extension)) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Invalid file',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: false
          })
        );
        return false;
      } else {
        return true;
      }
    }
  }
};
export default fileSizeExtenshion;
