import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface InstallationInterface {
  id?: string;
  installation_date: any;
  status: string;
  technician_id: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface InstallationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  technician_id?: string;
  project_id?: string;
}
