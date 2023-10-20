interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Project Manager', 'Installation Technician'],
  tenantName: 'Company',
  applicationName: 'Smart Home Automation System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Create, read, and update orders',
    'Read company information',
    'Read project and installation status',
  ],
  ownerAbilities: ['Manage user information', 'Manage company data', 'Manage project details', 'Manage product orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/fb99cd1e-3a3c-4c04-90d4-49d20dda2fc1',
};
