export class ApiConstants {
    public static readonly server: string = 'http://localhost:8080/dailylearning';
    public static readonly user: string = '/user';
    public static readonly loginUrl: string = '/login';
    public static readonly create: string = '/create';
    public static readonly slash = '/';

    static getHostUrl(): string {
        return ApiConstants.server;
    }
}