const preDefineErrorCode = [
  5200, 5201, 5202, 5203, 5205, 5206, 5207, 5208, 5209, 5210, 5211, 1000, 5020, 5021, 5022, 5023, 5024, 5025, 5026, 5070, 5071, 5072, 5073,
  5074, 5300, 5000, 5001, 5002, 5301, 5050, 5051, 5052, 5030, 5031, 5032, 5033, 50010, 50011, 5040, 5041, 5100, 5101, 5102, 5103, 5104, 5105
];
const errorCode = (errorCode: any) => {
  if (preDefineErrorCode?.includes(errorCode)) {
    if (errorCode == 5000) {
      localStorage.clear();
      return false;
    }
    return true;
  } else {
    return true;
  }
};
export default errorCode;
