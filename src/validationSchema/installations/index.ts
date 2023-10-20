import * as yup from 'yup';

export const installationValidationSchema = yup.object().shape({
  installation_date: yup.date().required(),
  status: yup.string().required(),
  technician_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
