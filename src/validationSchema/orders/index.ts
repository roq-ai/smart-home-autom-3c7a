import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  status: yup.string().required(),
  total_amount: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
