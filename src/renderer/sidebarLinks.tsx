import { IoMdStats } from 'react-icons/io';
import { Link } from './interfaces';

export const links: Link[] = [
  { title: 'Accueil', url: '/', icon: <IoMdStats /> },
  { title: 'Livraisons', url: '/deliveries', icon: <IoMdStats /> },
  { title: 'Clients', url: '/clients', icon: <IoMdStats /> },
  { title: 'Commissionnaires', url: '/providers', icon: <IoMdStats /> },
  { title: 'Véhicules', url: '/vehicles', icon: <IoMdStats /> },
  { title: 'Chauffeurs', url: '/drivers', icon: <IoMdStats /> },
  { title: 'Groupes', url: '/groups', icon: <IoMdStats /> },
];
