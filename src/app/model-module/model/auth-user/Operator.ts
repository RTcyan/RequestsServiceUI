import { Department } from "../department/department";

export interface Operator {
  /// <summary>
  /// Отделения оператора
  /// </summary>
  department: Department;
}