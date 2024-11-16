import { useMemo } from 'react';

// material-ui
import { Box, Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow ,Button } from '@mui/material';

// third-party
import { useTable, useFilters, useGlobalFilter, Column } from 'react-table';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
// import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';
import makeData from 'data/react-table';
import {
  GlobalFilter,
  DefaultColumnFilter,
  SelectColumnFilter,
  // SliderColumnFilter,
  // NumberRangeColumnFilter,
  renderFilterTypes,
  NumberRangeColumnFilter,
  // filterGreaterThan
} from 'utils/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }: { columns: Column[]; data: [] }) {
  const filterTypes = useMemo(() => renderFilterTypes, []);
  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);
  const initialState = useMemo(() => ({ filters: [{ id: 'status', value: '' }] }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    // @ts-ignore
    preGlobalFilteredRows,
    // @ts-ignore
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      defaultColumn,
      // @ts-ignore
      initialState,
      filterTypes
    },
    useGlobalFilter,
    useFilters
  );

  const sortingRow = rows.slice(0, 10);

  return (
    <Stack spacing={2}>
      <Box sx={{ p: 2, pb: 0 }} display={"flex"} justifyContent={"flex-end"} >
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          // @ts-ignore
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      
            {/* <SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} /> */}
            <Button variant="contained" color="success" style={{marginLeft:20 , marginRight:2}}>
              Export to Excel
            </Button>
            {/* <Button variant="contained">Primary</Button> */}
        
      </Box>

      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: 2 }}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <TableCell {...column.getHeaderProps([{ className: column.className }])}>{column.render('Header')}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {headerGroups.map((group: any) => (
            <TableRow {...group.getHeaderGroupProps()}>
              {group.headers.map((column: any) => (
                <TableCell {...column.getHeaderProps([{ className: column.className }])}>
                  {column.canFilter ? column.render('Filter') : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {sortingRow.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Stack>
  );
}

// ==============================|| REACT TABLE - FILTERING ||============================== //

const FilteringTable = () => {
  const data = useMemo(() => makeData(2000), []);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'visits',
        className: 'cell-center',
       
      },
      {
        Header: 'USER NAME',
        accessor: 'lastName',
        filter: 'fuzzyText',
        className: 'cell-center',
      },
      {
        Header: 'Email',
        accessor: 'email',
        className: 'cell-center',
      },
      {
        Header: 'NUMBER OF BOOKING',
        accessor: 'age',
        className: 'cell-center',
        // Filter: SliderColumnFilter,
        // filter: 'equals'
        Filter: NumberRangeColumnFilter,
        filter: 'between'
      },
      // {
      //   Header: 'Visits',
      //   accessor: 'visits',
      //   className: 'cell-right',
      //   Filter: NumberRangeColumnFilter,
      //   filter: 'between'
      // },
      {
        Header: 'Status',
        accessor: 'status',
        className: 'cell-center',
        Filter: SelectColumnFilter,
        filter: 'includes',
        Cell: ({ value }: any) => {
          switch (value) {
            // case 'Complicated':
            //   return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="BLOCK" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="UNBLOCK" size="small" variant="light" />;
          }
        }
      },
      // {
      //   Header: 'Profile Progress',
      //   accessor: 'progress',
      //   Filter: SliderColumnFilter,
      //   filter: filterGreaterThan,
      //   Cell: ({ value }: any) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      // }
    ],
    []
  );

  return (
    <MainCard content={false}>
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

export default FilteringTable;
