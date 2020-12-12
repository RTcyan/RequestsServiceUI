export interface SignUpUser {
    /// <summary>
    /// Login
    /// </summary>
    login: string;

    /// <summary>
    /// Пароль
    /// </summary>
    password: string;

    /// <summary>
    /// Имя
    /// </summary>
    firstName: string;

    /// <summary>
    /// Фамилия
    /// </summary>
    surname: string;

    /// <summary>
    /// Адрес электронной почты
    /// </summary>
    email: string;

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
    photoStudentCardId?: string;

    /// <summary>
    /// Курс
    /// </summary>
    grad: number;

    /// <summary>
    /// Факультет
    /// </summary>
    facultyID: number;
    }