import { Operator } from "./Operator";
import { Student } from "./Student";

export interface AuthEmployee {
  firstName: string;
  fullName: string;
  id: number;
  surname: string;
  student: Student;
  operator: Operator;
}
  