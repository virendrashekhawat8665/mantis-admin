import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link,Table,TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
// import Dot from 'components/@extended/Dot';

// // assets
// import { ColorProps } from 'types/extended';

// types
interface Data {
  name: string;
  carbs: number;
  fat: number;
  tracking_no: number;
  protein: number;
}

function createData(tracking_no: number, name: string, fat: number, carbs: number, protein: number): Data {
  return { tracking_no, name, fat, carbs, protein };
}

const rows = [
  createData(1, 'Rajasthan', 40, 2, 40570),
  createData(2, 'Delhi', 300, 0, 180139),
  createData(3, 'Rajasthan', 40, 2, 40570),
  createData(4, 'Delhi', 300, 0, 180139),
  createData(5, 'Rajasthan', 40, 2, 40570),
  createData(6, 'Delhi', 300, 0, 180139),
  createData(7, 'Rajasthan', 40, 2, 40570),
  createData(8, 'Delhi', 300, 0, 180139),
  createData(9, 'Rajasthan', 40, 2, 40570),
  createData(10, 'Delhi', 300, 0, 180139),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  align: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'tracking_no',
    align: 'left',
    disablePadding: false,
    label: 'S.No'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Departure'
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Arrival'
  },
  // {
  //   id: 'carbs',
  //   align: 'left',
  //   disablePadding: false,

  //   label: 'Status'
  // },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'No.of Search'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

interface OrderTableHeadProps {
  order: Order;
  orderBy: string;
}

function OrderTableHead({ order, orderBy }: OrderTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| ORDER TABLE - STATUS ||============================== //

// interface Props {
//   status: number;
// }

// const OrderStatus = ({ status }: Props) => {
//   let color: ColorProps;
//   let title: string;

//   switch (status) {
//     case 0:
//       color = 'warning';
//       title = 'Pending';
//       break;
//     case 1:
//       color = 'success';
//       title = 'Approved';
//       break;
//     case 2:
//       color = 'error';
//       title = 'Rejected';
//       break;
//     default:
//       color = 'primary';
//       title = 'None';
//   }

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Dot color={color} />
//       <Typography>{title}</Typography>
//     </Stack>
//   );
// };

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState<Order>('asc');
  const [orderBy] = useState<keyof Data>('tracking_no');

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-child': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.tracking_no}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.tracking_no}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  {/* <TableCell align="left">
                    <OrderStatus status={row.carbs} />
                  </TableCell> */}
                  <TableCell align="right">
                    <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
