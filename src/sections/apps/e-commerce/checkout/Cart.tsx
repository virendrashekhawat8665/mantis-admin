import { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { sum } from 'lodash';
import CurrencyFormat from 'react-currency-format';
import OrderSummary from './OrderSummery';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import Avatar from 'components/@extended/Avatar';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { path } from 'utilsNew/Api';
import { useDispatch } from 'react-redux';
// import { actions } from 'pages/userproduct/redux/slice';

interface IncrementProps {
  itemId: string | number | undefined;
  quantity: number;
  updateQuantity: (id: string | number | undefined, quantity: number) => void;
}

const Increment = ({ itemId, quantity, updateQuantity }: IncrementProps) => {
  const [value, setValue] = useState(quantity);
  const theme = useTheme();

  const incrementHandler = () => {
    setValue(value - 1);
    updateQuantity(itemId, value - 1);
  };

  const decrementHandler = () => {
    setValue(value + 1);
    updateQuantity(itemId, value + 1);
  };

  return (
    <Stack direction="row">
      <Button
        key="three"
        variant="text"
        disabled={value <= 1}
        onClick={incrementHandler}
        sx={{ pr: 0.75, pl: 0.75, minWidth: '0px !important', '&:hover': { bgcolor: 'transparent' } }}
      >
        <MinusOutlined style={{ fontSize: 'inherit' }} />
      </Button>
      <Typography key="two" sx={{ p: '9px 15px', border: `1px solid ${theme.palette.grey.A800}` }}>
        {quantity}
      </Typography>
      <Button
        key="one"
        variant="text"
        onClick={decrementHandler}
        sx={{ pl: 0.75, pr: 0.75, minWidth: '0px !important', '&:hover': { bgcolor: 'transparent' } }}
      >
        <PlusOutlined style={{ fontSize: 'inherit' }} />
      </Button>
    </Stack>
  );
};

const Cart = ({ checkout, onNext, removeProduct, item }: any) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    setTotalQuantity(sum(checkout.products.map((item: any) => item.quantity)));
  }, [checkout.products]);

  useEffect(() => {
    console.log(item, checkout, 'itemlist');
    return () => {};
  }, [item]);

  const names: string[] = item.map((item: any) => item.totalCoins);
  const totalValue = names.reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0);
  console.log(names, totalValue, 'names');
  const dispatch = useDispatch();
  const handleBooking = () => {
    // dispatch(
    //   actions.doProductBooking({
    //     callback: () => {
    //       dispatch(actions.doGetAddToCartList());
    //       dispatch(actions.setShowThankyouPage(true));
    //     }
    //   })
    // );
  };
  const updateQuantity = (id: any, value: number) => {
    // dispatch(
    //   actions.doUpdateCartQuentity({
    //     id:id,
    //     quentity: value,
    //     callback: () => {
    //       dispatch(actions.doGetAddToCartList());
    //     }
    //   })
    // );
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Stack spacing={2}>
          <MainCard content={false}>
            <Grid container>
              <Grid item xs={12} sx={{ py: 2.5, pl: 2.5 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="subtitle1">Cart</Typography>
                  <Avatar color="secondary" size="xs">
                    {totalQuantity}
                  </Avatar>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      {item.map((data: any, index: number) => {
                        // const colorsData = row.color ? getColor(row.color) : false;
                        return (
                          <TableRow key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                              <Grid container alignItems="center" spacing={2}>
                                <Chip
                                  color={data.stockCount > 0 ? 'success' : 'error'}
                                  label={data.stockCount > 0 ? 'In Stock' : 'Out of Stock'}
                                  size="small"
                                  variant="light"
                                />
                                <Grid item>
                                  <Avatar
                                    size="lg"
                                    variant="rounded"
                                    color="secondary"
                                    type="combined"
                                    src={`${path()}${data.productPhoto}`}
                                  />
                                </Grid>
                                <Grid item>
                                  <Stack spacing={0}>
                                    <Typography variant="subtitle1" color="textPrimary" sx={{ textDecoration: 'none' }}>
                                      {data.productTitle}
                                    </Typography>
                                  </Stack>
                                </Grid>
                              </Grid>
                            </TableCell>
                            <TableCell align="right">
                              <Stack alignItems="center">
                                <Typography variant="subtitle1">
                                  <CurrencyFormat
                                    decimalScale={2}
                                    fixedDecimalScale
                                    // value={data.salePrice * row.quantity}
                                    value={data.totalCoins}
                                    displayType="text"
                                    thousandSeparator
                                    // prefix="$"
                                  />
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell align="right">
                              <Increment quantity={data.quantity} itemId={data.id} updateQuantity={updateQuantity} />
                            </TableCell>
                            <TableCell align="right">
                              <IconButton
                                onClick={() => removeProduct(data.id)}
                                size="medium"
                                sx={{ opacity: 0.5, '&:hover': { bgcolor: 'transparent' } }}
                              >
                                <DeleteOutlined style={{ color: 'grey.500' }} />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </MainCard>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          {/* <MainCard>
            <CartDiscount />
          </MainCard> */}
          <OrderSummary checkout={checkout} total={totalValue} show />
          <Button variant="contained" sx={{ textTransform: 'none' }} fullWidth onClick={handleBooking}>
            Process to Checkout
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Cart;
