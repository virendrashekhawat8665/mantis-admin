import { FormControl, MenuItem, Select, styled } from "@mui/material";

type Props = {
  value: any;
  onChange: any;
  name: string;
  data: any;
  sx?: any;
  disabled?: boolean;
};

const OptionSelector: React.FC<Props> = ({
  value,
  onChange,
  name,
  data,
  sx,
  disabled,
}) => {
  return (
    <>
      <FormControl fullWidth sx={sx}>
        <NewSelectorStyled
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          name={name}
        >
          {data?.map((data: any, index: number) => (
            <NewMenuItem key={index} value={data}>
              {data}
            </NewMenuItem>
          ))}
        </NewSelectorStyled>
      </FormControl>
    </>
  );
};

export default OptionSelector;

const NewSelectorStyled = styled(Select)({
  borderRadius: 8,
  " fieldset": {
    outline: "0px !important",
    border: "1px solid #BFC4D7 !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#BFC4D7 !important",
  },
  "& .MuiOutlinedInput-input": {
    color: "#2E2E2E !important",
    fontSize: 14,
    fontWeight: 400,
    padding: "10px 16.81px !important",
  },
  "& .MuiSvgIcon-root": {
    color: "#000 !important",
    width: 30,
    height: 30,
  },
});
const NewMenuItem = styled(MenuItem)({
  fontSize: 14,
  color: "#2E2E2E",
  textTransform: "uppercase",
  ":hover": {
    backgroundColor: "#3B3B3B",
    color: "#fff",
  },
  "&[aria-selected='true']": {
    backgroundColor: "#3B3B3B !important",
    color: "#fff",
  },
});
