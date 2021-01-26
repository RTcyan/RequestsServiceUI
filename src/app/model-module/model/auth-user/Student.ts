import { Faculty } from "../faculty/faculty";

export interface Student {
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
  PhotoStudentCardId: string;

  /// <summary>
  /// Курс
  /// </summary>
  grade: number;
  
  /// <summary>
  /// Факультет
  /// </summary>
  faculty: Faculty;
}