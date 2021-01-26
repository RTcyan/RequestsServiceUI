import { Faculty } from "../faculty/faculty";
import { EmployeeDTO } from "./EmployeeDTO";

export interface StudentDTO {
  /// <summary>
  /// Пользователь
  /// </summary>
  employee: EmployeeDTO;

  /// <summary>
  /// Начала обучения
  /// </summary>
  startEducation: Date;

  /// <summary>
  /// Номер студенческого
  /// </summary>
  numberStudentCard: string;

  /// <summary>
  /// UUID фото студенческого
  /// </summary>
  photoStudentCardId: string;

  /// <summary>
  /// Курс
  /// </summary>
  grade: number;

  /// <summary>
  /// Факультет
  /// </summary>
  faculty: Faculty;
}