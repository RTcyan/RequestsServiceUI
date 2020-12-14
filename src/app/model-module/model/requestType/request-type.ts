import { Department } from "../department/department";

export interface RequestType {
  id: number;

  name: string;

  department: Department;

  fields: string;
}