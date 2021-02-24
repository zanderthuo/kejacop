import React from 'react';
import $ from 'jquery';
// import Maintenance from './App/components/MaintenancePage/Maintenance';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('../src/App/components/Dashboard/Dashboard'));
const Tenantspage = React.lazy(() => import('../src/App/components/Tenantspage/TenantsPage'));
const AddLandlordModal = React.lazy(() => import('../src/App/components/Modals/AddLandlord'));
const Maintenance = React.lazy(() => import('../src/App/components/MaintenancePage/Maintenance'));
const PropertiesPage = React.lazy(() => import('../src/App/components/PropertiesPage/PropertiesPage'));
const PropertiesViewPage = React.lazy(() => import('../src/App/components/PropertiesPage/PropertiesViewPage'));
const PropertiesRentPayments = React.lazy(() => import('../src/App/components/PropertiesPage/PropertiesRentPayments'));
const AddPropertyForm = React.lazy(() => import('../src/App/components/PropertiesPage/AddPropForm'));
const AccountsPage = React.lazy(() => import('../src/App/components/Accounts/AccountsPage'));
const PaymentsPage = React.lazy(() => import('../src/App/components/Payments/PaymentsPage'));
const InvoiceGenerate = React.lazy(() => import('../src/App/components/Payments/Invoice/InvoiceGenerate'));
const Profile = React.lazy(() => import('../src/App/components/ProfileNavbarRight/Profile'));
const AddWorkOrderForm = React.lazy(() => import('../src/App/components/MaintenancePage/AddWorkOrderForm'));
const AddTenantsPage = React.lazy(() => import('../src/App/components/Tenantspage/AddTenantsPage'));
const AddLeasePage = React.lazy(() => import('../src/App/components/Tenantspage/AddLeasePage'));
const ApplicationPage = React.lazy(() => import('../src/App/components/Application/ApplicationPage'));
const Screening = React.lazy(() => import('../src/App/components/Screening/Screening'));
const ScreeningPage = React.lazy(() => import('../src/App/components/Screening/ScreeningPage'));
const PropertyManager = React.lazy(() => import('../src/App/components/PropertyManager/PropertyManager'))
const PropertyManagerReports = React.lazy(() => import('../src/App/components/PropertyManager/PropertyManagerReports'))
const ReportGenerate = React.lazy(() => import('../src/App/components/PropertyManager/Report/ReportGenerate'))

// const TenantsBillingModal = React.lazy(() => import('./components/TenantsBillingModal/TenantsBillingModal'));
// const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
// const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
// const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

// const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
// const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
// const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

// const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

// const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

// const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

// const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

// const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
// const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));


const routes = [

    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/tenantspage', exact: true, name: 'Tenants Page', component: Tenantspage },
    { path: '/tenantspage/addtenant', exact: true, name: 'Tenants Page', component: AddTenantsPage },
    { path: '/lease', exact: true, name: 'Lease', component: AddLeasePage },
    { path: '/landlords/addnew', exact: true, name: 'Add New', component: AddLandlordModal },
    { path: '/maintenance', exact: true, name: 'Add New', component: Maintenance },
    { path: '/properties', exact: true, name: 'Add New', component: PropertiesPage },
    { path: '/properties/:id', exact: true, name: 'Add New', component: PropertiesViewPage },
    { path: '/properties/:id/rentpayments', exact: true, name: 'Add New', component: PropertiesRentPayments },
    { path: '/addproperty', exact: true, name: 'Add Property', component: AddPropertyForm },
    { path: '/accounts', exact: true, name: 'Add New', component: AccountsPage },
    { path: '/payments/invoice', exact: true, name: 'Add New', component: InvoiceGenerate },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
    { path: '/payments', exact: true, name: 'Payments', component: PaymentsPage},
    { path: '/application', exact: true, name: 'Application', component: ApplicationPage},
    { path: '/accounts', exact: true, name: 'Application', component: ApplicationPage},
    { path: '/maintenance/addworkorder', exact: true, name: 'Add New', component: AddWorkOrderForm },
    { path: '/payments/invoice', exact: true, name: 'Add New', component: InvoiceGenerate },
    { path: '/screening', exact: true, name: 'Screening', component: Screening },
    { path: '/screening/viewreport', exact: true, name: 'Screening', component: ScreeningPage },
    { path: '/propertymanager', exact: true, name: 'Property Manager', component: PropertyManager },
    { path: '/propertymanager/report', exact: true, name: 'Property Manager Report', component: PropertyManagerReports },
    { path: '/propertymanager/report/invoice', exact: true, name: 'Property Manager Reports Invoice', component: ReportGenerate },
    // { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    // { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    // { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    // { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    // { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    // { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    // { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    // { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    // { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    // { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    // { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    // { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;
