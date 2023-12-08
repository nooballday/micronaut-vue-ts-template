package server.controller;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;

@Controller("/api")
public class GreetingsController {

    @Get("/{name}")
    String greetings(@PathVariable String name) {
        return "Hello there " + name;
    }

}
