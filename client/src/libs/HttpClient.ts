export default class HttpClient {

    private path = "/";

    private get baseUrl(): string {
        return "http://localhost:8080/api";
    }

    setPath(uPath: string) {
        this.path = uPath;
        return this;
    }

    static Builder(): HttpClient {
        return new HttpClient();
    }

    call(): Promise<Response> {
        return fetch(this.baseUrl + this.path);
    }

}