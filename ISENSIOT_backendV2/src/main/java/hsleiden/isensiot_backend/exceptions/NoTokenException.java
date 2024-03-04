package hsleiden.isensiot_backend.exceptions;

public class NoTokenException extends RuntimeException {
    public NoTokenException(String message) {
        super(message);
    }
}