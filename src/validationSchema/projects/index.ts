import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  project_manager_id: yup.string().nullable().required(),
});
