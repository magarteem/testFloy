import { CiryResultsType } from "../cityGlobalType";

interface PortfoliosType {
  name: string;
  uri: string;
}
interface ContactsType {
  contactType: string;
  value: string;
}
interface AdditionalPropType {
  start: string;
  end: string;
}
interface GeolocationsType {
  longitude: number;
  lattitude: number;
}
interface ScheduleType {
  additionalProp1: AdditionalPropType[];
  additionalProp2: AdditionalPropType[];
  additionalProp3: AdditionalPropType[];
}
export interface DocumentType {
  name: string;
  city: CiryResultsType;
  description: string;
  contacts: ContactsType[];
  schedule: ScheduleType;
  geolocations: GeolocationsType[];
}

// ===========================================
export interface AccountMainGlobalType {
  id: string;
  isVerified: true;
  privateType: string;
  avatarLink: string;
  portfolios: PortfoliosType[];
  document: DocumentType;
}
