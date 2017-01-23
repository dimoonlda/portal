package ua.kiev.dimoon.portal.back.model.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * Based class for response.
 * Created by lutay.d on 23.01.2017.
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class BaseResult<T> {
    private Integer errorCode = 0;
    private String errorMessage;
    private T data;

    public BaseResult() {
    }

    public BaseResult(T data) {
        this.data = data;
    }

    /**
     * By default errorCode = 0.
     * @return errorCode
     */
    public Integer getErrorCode() {
        return errorCode;
    }

    public BaseResult setErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public BaseResult setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }

    public T getData() {
        return data;
    }

    public BaseResult setData(T data) {
        this.data = data;
        return this;
    }

    @Override
    public String toString() {
        return "BaseResult{" +
                "errorCode=" + errorCode +
                ", errorMessage='" + errorMessage + '\'' +
                ", data=" + data +
                '}';
    }
}
