import { ColumnBase } from './interfaces';

export const deliveryColumns: ColumnBase[] = [
  {
    label: 'Chauffeurs',
    accessor: 'driver',
    type: 'IDArray',
    sortable: true,
  },
  {
    label: 'Véhicules',
    accessor: 'vehicle',
    type: 'IDArray',
    sortable: true,
  },
  {
    label: 'Date',
    accessor: 'pickups-date',
    type: 'objectArray',
    sortable: true,
  },
  {
    label: 'Commissionnaire',
    accessor: 'provider',
    type: 'IDString',
    sortable: true,
  },
  {
    label: 'Hôtel',
    accessor: 'hotel',
    type: 'common',
    sortable: true,
  },
];

export const driverColumns: ColumnBase[] = [
  { label: 'Prénom', accessor: 'firstName', type: 'common', sortable: true },
  {
    label: 'Nom',
    accessor: 'lastName',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Email',
    accessor: 'email',
    type: 'common',
    sortable: true,
  },
  { label: 'Téléphone', accessor: 'phone', type: 'common', sortable: true },
  { label: 'Actif', accessor: 'active', type: 'common', sortable: true },
];

export const providerColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', type: 'common', sortable: true },
  {
    label: 'Nom de contact',
    accessor: 'contactName',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Email',
    accessor: 'contactMail',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Téléphone',
    accessor: 'contactPhone',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Siège',
    accessor: 'headquarter',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Dépôt',
    accessor: 'wharehouse',
    type: 'common',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', type: 'common', sortable: true },
];

export const vehicleColumns: ColumnBase[] = [
  {
    label: 'Immatriculation',
    accessor: 'immatriculation',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Marque',
    accessor: 'brand',
    type: 'common',
    sortable: true,
  },
  {
    label: 'Modèle',
    accessor: 'model',
    type: 'common',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', type: 'common', sortable: true },
];

export const clientColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', type: 'common', sortable: true },
  {
    label: 'Numéro',
    accessor: 'streetNumber',
    type: 'common',
    sortable: false,
  },
  {
    label: 'Rue',
    accessor: 'streetName',
    type: 'common',
    sortable: true,
  },
  { label: 'Ville', accessor: 'city', type: 'common', sortable: true },
  {
    label: 'Code Postal',
    accessor: 'postalCode',
    type: 'common',
    sortable: true,
  },
  { label: 'Pays', accessor: 'country', type: 'common', sortable: true },
  { label: 'Actif', accessor: 'active', type: 'common', sortable: true },
];

export const groupColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', type: 'common', sortable: true },
  {
    label: 'Clients',
    accessor: 'clients',
    type: 'IDArray',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', type: 'common', sortable: true },
];
