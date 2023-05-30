import { ColumnBase, DeliveryColumn } from './interfaces';

export const deliveryColumns: DeliveryColumn[] = [
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
    sortable: true,
  },
  {
    label: 'Hôtel',
    accessor: 'hotel',
    sortable: true,
  },
];

export const driverColumns: ColumnBase[] = [
  { label: 'Prénom', accessor: 'firstName', sortable: true },
  {
    label: 'Nom',
    accessor: 'lastName',
    sortable: true,
  },
  {
    label: 'Email',
    accessor: 'email',
    sortable: true,
  },
  { label: 'Téléphone', accessor: 'phone', sortable: true },
  { label: 'Actif', accessor: 'active', sortable: true },
];

export const providerColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', sortable: true },
  {
    label: 'Nom de contact',
    accessor: 'contactName',
    sortable: true,
  },
  {
    label: 'Email',
    accessor: 'contactMail',
    sortable: true,
  },
  {
    label: 'Téléphone',
    accessor: 'contactPhone',
    sortable: true,
  },
  {
    label: 'Siège',
    accessor: 'headquarter',
    sortable: true,
  },
  {
    label: 'Dépôt',
    accessor: 'wharehouse',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', sortable: true },
];

export const vehicleColumns: ColumnBase[] = [
  { label: 'Immatriculation', accessor: 'immatriculation', sortable: true },
  {
    label: 'Marque',
    accessor: 'brand',
    sortable: true,
  },
  {
    label: 'Modèle',
    accessor: 'model',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', sortable: true },
];

export const clientColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', sortable: true },
  {
    label: 'Numéro',
    accessor: 'streetNumber',
    sortable: false,
  },
  {
    label: 'Rue',
    accessor: 'streetName',
    sortable: true,
  },
  { label: 'Ville', accessor: 'city', sortable: true },
  { label: 'Code Postal', accessor: 'postalCode', sortable: true },
  { label: 'Pays', accessor: 'country', sortable: true },
  { label: 'Actif', accessor: 'active', sortable: true },
];

export const groupColumns: ColumnBase[] = [
  { label: 'Nom', accessor: 'name', sortable: true },
  {
    label: 'Clients',
    accessor: 'clients',
    sortable: true,
  },
  { label: 'Actif', accessor: 'active', sortable: true },
];
