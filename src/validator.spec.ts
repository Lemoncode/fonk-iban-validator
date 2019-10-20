import { validator, setErrorMessage } from './validator';

// TODO: Add specs
describe('fonk-iban-validator specs', () => {
  it('should return succeeded=false and an error message validation when it feeds value equals undefined string', () => {
    // Arrange
    const value = undefined;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });
  it('should return succeeded=false and an error message validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = 'test';
    const message = 'other message';

    // Act
    const result = validator({ value, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IBAN',
    });
  });

  it('should return Invalid IBAN message and succeded = false when null value', () => {
    // Arrange
    const value = null;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });
  it('should return Invalid IBAN message and succeded = false when invalid IBAN', () => {
    // Arrange
    const value = 'test';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  it("should return Succeded==true and message='' when valid IBAN", () => {
    // Arrange
    const value = 'ES91 2100 0418 4502 0005 1332';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = 'test';

    setErrorMessage('other message');

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IBAN',
    });
  });
});
