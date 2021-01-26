import { RequestType } from "../requestType/request-type";
import { OperatorDTO } from "../user/OperatorDTO";
import { StudentDTO } from "../user/StudentDTO";
import { RequestStatus } from "./request-status";

export interface UserRequest {
  id: number;
   /// <summary>
  /// Тип завяки
  /// </summary>
  type: RequestType;

  /// <summary>
  /// Все данные по заявке в виде JSON
  /// </summary>
  data: string;

  /// <summary>
  /// Оператор, которые обрабатывает заявку
  /// </summary>
  operator: OperatorDTO;

  /// <summary>
  /// Студент, который создал запрос
  /// </summary>
  student: StudentDTO;

  /// <summary>
  /// Результат по заявке
  /// </summary>
  resultFileId: string;

  /// <summary>
  /// Дата создания заявки
  /// </summary>
  created: Date;

  /// <summary>
  /// Дата начала обработки заявки
  /// </summary>
  processingStartDate: Date;

  /// <summary>
  /// Дата конца обработки заявки
  /// </summary>
  processingEndDate: Date;

  /// <summary>
  /// Комментарий пользователя
  /// </summary>
  userComment: string;

  /// <summary>
  /// Комментарий оператора
  /// </summary>
  operatorComment: string;

  /// <summary>
  /// Статус заявки
  /// </summary>
  requestStatus: RequestStatus;
}