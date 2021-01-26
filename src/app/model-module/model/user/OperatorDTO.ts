import { Department } from "../department/department";
import { EmployeeDTO } from "./EmployeeDTO";

export interface OperatorDTO {
  /// <summary>
  /// Пользователь
  /// </summary>
  employee: EmployeeDTO;

  /// <summary>
  /// Отделения оператора
  /// </summary>
  department: Department;
}