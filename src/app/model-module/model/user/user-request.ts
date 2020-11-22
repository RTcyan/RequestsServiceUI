import { UserRole } from './user-role';

export class UserRequest {
  /**
   * Pagging definitions
   */
  public pageSize!: number;
  public pageNumber!: number;

  /**
   * filter definitions
   */
  public fullNameLike!: string;
  public role!: UserRole;

  public static builder() {
    return new UserRequestBuilder();
  }

}

export class UserRequestBuilder {

  private user: UserRequest;

  constructor() {
    this.user = new UserRequest();
  }

  public pageSize(pageSize: number): UserRequestBuilder {
    this.user.pageSize = pageSize;
    return this;
  }

  public pageNumber(pageNumber: number): UserRequestBuilder {
    this.user.pageNumber = pageNumber;
    return this;
  }

  public fullNameLike(fullNameLike: string): UserRequestBuilder {
    this.user.fullNameLike = fullNameLike;
    return this;
  }

  public role(role: UserRole): UserRequestBuilder {
    this.user.role = role;
    return this;
  }

  public build(): UserRequest {
    return this.user;
  }

}
