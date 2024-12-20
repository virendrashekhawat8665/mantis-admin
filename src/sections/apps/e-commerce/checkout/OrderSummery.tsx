// material-ui
import { Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

// third-party
import CurrencyFormat from 'react-currency-format';

// types
import { CartCheckoutStateProps } from 'types/cart';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| CHECKOUT CART - ORDER SUMMARY ||============================== //

const OrderSummary = ({ checkout, show, total }: { checkout: CartCheckoutStateProps; show?: boolean; total: any }) => (
  // {  console.log(checkout,"item")}

  <Stack spacing={3}>
    {console.log(total, 'total')}
    <MainCard content={false} sx={{ borderRadius: show ? '4px' : '0 0 4px 4px', borderTop: show ? '1px inherit' : 'none' }}>
      <TableContainer>
        <Table sx={{ minWidth: 'auto' }} size="small" aria-label="simple table">
          <TableBody>
            {show && (
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1">Order Summary</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            )}
            <TableRow>
              <TableCell sx={{ borderBottom: 'none', opacity: 0.5 }}>Sub Total</TableCell>
              <TableCell align="right" sx={{ borderBottom: 'none' }}>
                <Typography variant="subtitle1">
                  <CurrencyFormat decimalScale={2} fixedDecimalScale value={total} displayType="text" thousandSeparator  />
                </Typography>
              </TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell sx={{ borderBottom: 'none', opacity: 0.5 }}>Estimated Delivery</TableCell>
              <TableCell align="right" sx={{ borderBottom: 'none' }}>
                <Typography variant="subtitle1">
                  {checkout.shipping <= 0 ? (
                    '-'
                  ) : (
                    <CurrencyFormat
                      decimalScale={2}
                      fixedDecimalScale
                      value={checkout.shipping}
                      displayType="text"
                      thousandSeparator
                      prefix="+ $"
                    />
                  )}
                </Typography>
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell sx={{ borderBottom: 'none', opacity: 0.5 }}>Voucher</TableCell>
              <TableCell align="right" sx={{ borderBottom: 'none' }}>
                <Typography variant="subtitle1" sx={{ color: 'success.main' }}>
                  {checkout.discount <= 0 ? (
                    '-'
                  ) : (
                    <CurrencyFormat
                      decimalScale={2}
                      fixedDecimalScale
                      value={checkout.discount}
                      displayType="text"
                      thousandSeparator
                      prefix="- $"
                    />
                  )}
                </Typography>
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
    <MainCard>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">Total</Typography>
        <Typography variant="subtitle1" align="right">
          <CurrencyFormat decimalScale={2} fixedDecimalScale value={total} displayType="text" thousandSeparator />
        </Typography>
      </Stack>
    </MainCard>
  </Stack>
);

export default OrderSummary;
