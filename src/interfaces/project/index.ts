import { InstallationInterface } from 'interfaces/installation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  start_date?: any;
  end_date?: any;
  project_manager_id: string;
  created_at?: any;
  updated_at?: any;
  installation?: InstallationInterface[];
  user?: UserInterface;
  _count?: {
    installation?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  project_manager_id?: string;
}
