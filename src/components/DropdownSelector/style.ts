
// import { fontSize } from "@mui/system";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    MuiAutoComplete: {
        "& .css-1otl3pm-MuiInputBase-root-MuiOutlinedInput-root": {
            zIndex: "3 !important",
            // height: "100% !important",
        },
        "& .MuiOutlinedInput-root": {
            // height: "33px !important",
            borderRadius: "4px !important",
        },
        '& .MuiInputBase-input-MuiOutlinedInput-input::placeholder': {
            color: 'red !important',
          }
    },

});