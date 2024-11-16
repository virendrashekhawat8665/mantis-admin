import CustomSnackbar from 'components/Common/CustomSnackbar';
import errorCode from 'hooks/ErrorCode';

export default function Index(error: any) {
  if (error?.response?.data?.statusCode) {
    if (errorCode(error?.response?.data?.statusCode)) {
      if (error.response.data.errors) {
        for (let index = 0; index < error.response.data.errors.length; index++) {
          const element = error.response.data.errors[index];
          CustomSnackbar(element.message, 'error');
        }
        return;
      } else {
        CustomSnackbar(error.response.data.message, 'error');
        return;
      }
    }
  } else {
    if (error.message !== 'call: argument fn is undefined or null') {
      if (error.message !== "Cannot read properties of undefined (reading 'apply')") {
        if (error.message !== 'e is undefined') {
          if (error.message !== 'call: argument of type {context, fn} has undefined or null `fn`') {
            if (error.message !== 'mime.getType is not a function') {
              if (error.message !== "undefined is not an object (evaluating 'e.context')") {
                if (error.message !== "Cannot read properties of undefined (reading 'context')") {
                  if (error.message !== "Cannot read properties of undefined (reading '0')") {
                    if (error.message !== 'call: argument fn is undefined or null') {
                      if (error.message !== "Cannot read properties of undefined (reading 'results')") {
                        if (error.response) {
                          if (error.response.status == 401) {
                            localStorage.removeItem('token');
                          }
                        } else {
                          CustomSnackbar(error.message, 'error');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
