export interface IJwtServicePayload {
  id: string;
  username: string;
}

export interface IJwtService {
  checkToken(token: string): Promise<any>;
  createToken(payload: IJwtServicePayload): string;
}
