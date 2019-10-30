import {
  sanitizeValue,
  hasIbanPattern,
  hasValidLength,
} from './validator.business';

describe('validator.business specs', () => {
  describe('sanitizeValue', () => {
    it('should return string without spaces and upper case when it feeds string equals "test"', () => {
      // Arrange
      const value = 'test';

      // Act
      const result = sanitizeValue(value);

      // Assert
      expect(result).toEqual('TEST');
    });

    it('should return string without spaces and upper case when it feeds string equals " t e s t "', () => {
      // Arrange
      const value = ' t e s t ';

      // Act
      const result = sanitizeValue(value);

      // Assert
      expect(result).toEqual('TEST');
    });

    it('should return string without spaces and upper case when it feeds string equals " t e s t 1 2 3 test"', () => {
      // Arrange
      const value = ' t e s t 1 2 3 test';

      // Act
      const result = sanitizeValue(value);

      // Assert
      expect(result).toEqual('TEST123TEST');
    });
  });

  describe('hasIbanPattern', () => {
    it('should return false when it feeds value with only numbers', () => {
      // Arrange
      const value = '12345';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with only chars', () => {
      // Arrange
      const value = 'test';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with two first chars equals number and rest string', () => {
      // Arrange
      const value = '12test';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with two first chars equals lower case string and rest numbers', () => {
      // Arrange
      const value = 'ab1234';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return true when it feeds value with two first chars equals upper case string and rest numbers', () => {
      // Arrange
      const value = 'AB1234';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with non alpha-numeric chars', () => {
      // Arrange
      const value = '-*/?¿';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with two first chars equals upper case string and rest numbers and non alpha-numeric char', () => {
      // Arrange
      const value = 'AB1234/';

      // Act
      const result = hasIbanPattern(value);

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('hasValidLength', () => {
    it('should return false when it feeds value with only numbers', () => {
      // Arrange
      const value = '12345';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with numbers and string at the end', () => {
      // Arrange
      const value = '12345ES';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with invalid country code first and then numbers', () => {
      // Arrange
      const value = 'XX1234';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with invalid country code first and then numbers and string', () => {
      // Arrange
      const value = 'XX1234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AD) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'AD12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AD) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'AD12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AD) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'AD12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AE) first and then numbers and string with length equals 23', () => {
      // Arrange
      const value = 'AE1234567890123456789AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AE) first and then numbers and string with length greater than 23', () => {
      // Arrange
      const value = 'AE1234567890123456789AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AE) first and then numbers and string with length lower than 23', () => {
      // Arrange
      const value = 'AE1234567890123456789A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AL) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'AL123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AL) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'AL123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AL) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'AL123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AO) first and then numbers and string with length equals 25', () => {
      // Arrange
      const value = 'AO123456789012345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AO) first and then numbers and string with length greater than 25', () => {
      // Arrange
      const value = 'AO123456789012345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AO) first and then numbers and string with length lower than 25', () => {
      // Arrange
      const value = 'AO123456789012345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AT) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'AT1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AT) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'AT1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AT) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'AT1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (AZ) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'AZ123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (AZ) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'AZ123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (AZ) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'AZ123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BA) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'BA1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BA) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'BA1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BA) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'BA1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BE) first and then numbers and string with length equals 16', () => {
      // Arrange
      const value = 'BE123456789012AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BE) first and then numbers and string with length greater than 16', () => {
      // Arrange
      const value = 'BE123456789012AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BE) first and then numbers and string with length lower than 16', () => {
      // Arrange
      const value = 'BE123456789012A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BF) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'BF12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BF) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'BF12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BF) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'BF12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BG) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'BG123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BG) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'BG123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BG) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'BG123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BH) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'BH123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BH) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'BH123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BH) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'BH123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BI) first and then numbers and string with length equals 16', () => {
      // Arrange
      const value = 'BI123456789012AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BI) first and then numbers and string with length greater than 16', () => {
      // Arrange
      const value = 'BI123456789012AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BI) first and then numbers and string with length lower than 16', () => {
      // Arrange
      const value = 'BI123456789012A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BJ) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'BJ123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BJ) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'BJ123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BJ) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'BJ123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BR) first and then numbers and string with length equals 29', () => {
      // Arrange
      const value = 'BR1234567890123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BR) first and then numbers and string with length greater than 29', () => {
      // Arrange
      const value = 'BR1234567890123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BR) first and then numbers and string with length lower than 29', () => {
      // Arrange
      const value = 'BR1234567890123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (BY) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'BY123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (BY) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'BY123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (BY) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'BY123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CH) first and then numbers and string with length equals 21', () => {
      // Arrange
      const value = 'CH12345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CH) first and then numbers and string with length greater than 21', () => {
      // Arrange
      const value = 'CH12345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CH) first and then numbers and string with length lower than 21', () => {
      // Arrange
      const value = 'CH12345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CI) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'CI123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CI) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'CI123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CI) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'CI123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CM) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'CM12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CM) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'CM12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CM) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'CM12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CR) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'CR123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CR) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'CR123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CR) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'CR123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CV) first and then numbers and string with length equals 25', () => {
      // Arrange
      const value = 'CV123456789012345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CV) first and then numbers and string with length greater than 25', () => {
      // Arrange
      const value = 'CV123456789012345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CV) first and then numbers and string with length lower than 25', () => {
      // Arrange
      const value = 'CV123456789012345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CY) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'CY123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CY) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'CY123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CY) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'CY123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (CZ) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'CZ12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (CZ) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'CZ12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (CZ) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'CZ12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (DE) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'DE123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (DE) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'DE123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (DE) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'DE123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (DK) first and then numbers and string with length equals 18', () => {
      // Arrange
      const value = 'DK12345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (DK) first and then numbers and string with length greater than 18', () => {
      // Arrange
      const value = 'DK12345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (DK) first and then numbers and string with length lower than 18', () => {
      // Arrange
      const value = 'DK12345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (DO) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'DO123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (DO) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'DO123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (DO) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'DO123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (DZ) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'DZ12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (DZ) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'DZ12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (DZ) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'DZ12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (EE) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'EE1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (EE) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'EE1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (EE) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'EE1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (ES) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'ES12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (ES) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'ES12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (ES) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'ES12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (FI) first and then numbers and string with length equals 18', () => {
      // Arrange
      const value = 'FI12345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (FI) first and then numbers and string with length greater than 18', () => {
      // Arrange
      const value = 'FI12345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (FI) first and then numbers and string with length lower than 18', () => {
      // Arrange
      const value = 'FI12345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (FO) first and then numbers and string with length equals 18', () => {
      // Arrange
      const value = 'FO12345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (FO) first and then numbers and string with length greater than 18', () => {
      // Arrange
      const value = 'FO12345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (FO) first and then numbers and string with length lower than 18', () => {
      // Arrange
      const value = 'FO12345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (FR) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'FR12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (FR) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'FR12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (FR) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'FR12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GB) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'GB123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GB) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'GB123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GB) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'GB123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GE) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'GE123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GE) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'GE123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GE) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'GE123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GI) first and then numbers and string with length equals 23', () => {
      // Arrange
      const value = 'GI1234567890123456789AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GI) first and then numbers and string with length greater than 23', () => {
      // Arrange
      const value = 'GI1234567890123456789AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GI) first and then numbers and string with length lower than 23', () => {
      // Arrange
      const value = 'GI1234567890123456789A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GL) first and then numbers and string with length equals 18', () => {
      // Arrange
      const value = 'GL12345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GL) first and then numbers and string with length greater than 18', () => {
      // Arrange
      const value = 'GL12345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GL) first and then numbers and string with length lower than 18', () => {
      // Arrange
      const value = 'GL12345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GR) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'GR12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GR) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'GR12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GR) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'GR12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (GT) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'GT123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (GT) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'GT123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (GT) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'GT123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (HR) first and then numbers and string with length equals 21', () => {
      // Arrange
      const value = 'HR12345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (HR) first and then numbers and string with length greater than 21', () => {
      // Arrange
      const value = 'HR12345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (HR) first and then numbers and string with length lower than 21', () => {
      // Arrange
      const value = 'HR12345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (HU) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'HU123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (HU) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'HU123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (HU) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'HU123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IE) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'IE123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IE) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'IE123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IE) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'IE123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IL) first and then numbers and string with length equals 23', () => {
      // Arrange
      const value = 'IL1234567890123456789AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IL) first and then numbers and string with length greater than 23', () => {
      // Arrange
      const value = 'IL1234567890123456789AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IL) first and then numbers and string with length lower than 23', () => {
      // Arrange
      const value = 'IL1234567890123456789A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IQ) first and then numbers and string with length equals 23', () => {
      // Arrange
      const value = 'IQ1234567890123456789AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IQ) first and then numbers and string with length greater than 23', () => {
      // Arrange
      const value = 'IQ1234567890123456789AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IQ) first and then numbers and string with length lower than 23', () => {
      // Arrange
      const value = 'IQ1234567890123456789A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IS) first and then numbers and string with length equals 26', () => {
      // Arrange
      const value = 'IS1234567890123456789012AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IS) first and then numbers and string with length greater than 26', () => {
      // Arrange
      const value = 'IS1234567890123456789012AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IS) first and then numbers and string with length lower than 26', () => {
      // Arrange
      const value = 'IS1234567890123456789012A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IR) first and then numbers and string with length equals 26', () => {
      // Arrange
      const value = 'IR1234567890123456789012AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IR) first and then numbers and string with length greater than 26', () => {
      // Arrange
      const value = 'IR1234567890123456789012AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IR) first and then numbers and string with length lower than 26', () => {
      // Arrange
      const value = 'IR1234567890123456789012A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (IT) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'IT12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (IT) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'IT12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (IT) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'IT12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (JO) first and then numbers and string with length equals 30', () => {
      // Arrange
      const value = 'JO12345678901234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (JO) first and then numbers and string with length greater than 30', () => {
      // Arrange
      const value = 'JO12345678901234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (JO) first and then numbers and string with length lower than 30', () => {
      // Arrange
      const value = 'JO12345678901234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (KW) first and then numbers and string with length equals 30', () => {
      // Arrange
      const value = 'KW12345678901234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (KW) first and then numbers and string with length greater than 30', () => {
      // Arrange
      const value = 'KW12345678901234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (KW) first and then numbers and string with length lower than 30', () => {
      // Arrange
      const value = 'KW12345678901234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (KZ) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'KZ1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (KZ) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'KZ1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (KZ) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'KZ1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LB) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'LB123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LB) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'LB123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LB) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'LB123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LC) first and then numbers and string with length equals 32', () => {
      // Arrange
      const value = 'LC1234567890123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LC) first and then numbers and string with length greater than 32', () => {
      // Arrange
      const value = 'LC1234567890123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LC) first and then numbers and string with length lower than 32', () => {
      // Arrange
      const value = 'LC1234567890123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LI) first and then numbers and string with length equals 21', () => {
      // Arrange
      const value = 'LI12345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LI) first and then numbers and string with length greater than 21', () => {
      // Arrange
      const value = 'LI12345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LI) first and then numbers and string with length lower than 21', () => {
      // Arrange
      const value = 'LI12345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LT) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'LT1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LT) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'LT1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LT) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'LT1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LU) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'LU1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LU) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'LU1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LU) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'LU1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (LV) first and then numbers and string with length equals 21', () => {
      // Arrange
      const value = 'LV12345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (LV) first and then numbers and string with length greater than 21', () => {
      // Arrange
      const value = 'LV12345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (LV) first and then numbers and string with length lower than 21', () => {
      // Arrange
      const value = 'LV12345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MC) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'MC12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MC) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'MC12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MC) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'MC12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MD) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'MD12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MD) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'MD12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MD) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'MD12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (ME) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'ME123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (ME) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'ME123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (ME) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'ME123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MG) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'MG12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MG) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'MG12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MG) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'MG12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MK) first and then numbers and string with length equals 19', () => {
      // Arrange
      const value = 'MK123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MK) first and then numbers and string with length greater than 19', () => {
      // Arrange
      const value = 'MK123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MK) first and then numbers and string with length lower than 19', () => {
      // Arrange
      const value = 'MK123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (ML) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'ML123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (ML) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'ML123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (ML) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'ML123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MR) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'MR12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MR) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'MR12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MR) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'MR12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MT) first and then numbers and string with length equals 31', () => {
      // Arrange
      const value = 'MT123456789012345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MT) first and then numbers and string with length greater than 31', () => {
      // Arrange
      const value = 'MT123456789012345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MT) first and then numbers and string with length lower than 31', () => {
      // Arrange
      const value = 'MT123456789012345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MU) first and then numbers and string with length equals 30', () => {
      // Arrange
      const value = 'MU12345678901234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MU) first and then numbers and string with length greater than 30', () => {
      // Arrange
      const value = 'MU12345678901234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MU) first and then numbers and string with length lower than 30', () => {
      // Arrange
      const value = 'MU12345678901234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (MZ) first and then numbers and string with length equals 25', () => {
      // Arrange
      const value = 'MZ123456789012345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (MZ) first and then numbers and string with length greater than 25', () => {
      // Arrange
      const value = 'MZ123456789012345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (MZ) first and then numbers and string with length lower than 25', () => {
      // Arrange
      const value = 'MZ123456789012345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (NL) first and then numbers and string with length equals 18', () => {
      // Arrange
      const value = 'NL12345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (NL) first and then numbers and string with length greater than 18', () => {
      // Arrange
      const value = 'NL12345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (NL) first and then numbers and string with length lower than 18', () => {
      // Arrange
      const value = 'NL12345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (NO) first and then numbers and string with length equals 15', () => {
      // Arrange
      const value = 'NO12345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (NO) first and then numbers and string with length greater than 15', () => {
      // Arrange
      const value = 'NO12345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (NO) first and then numbers and string with length lower than 15', () => {
      // Arrange
      const value = 'NO12345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (PK) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'PK12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (PK) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'PK12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (PK) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'PK12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (PL) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'PL123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (PL) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'PL123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (PL) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'PL123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (PS) first and then numbers and string with length equals 29', () => {
      // Arrange
      const value = 'PS1234567890123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (PS) first and then numbers and string with length greater than 29', () => {
      // Arrange
      const value = 'PS1234567890123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (PS) first and then numbers and string with length lower than 29', () => {
      // Arrange
      const value = 'PS1234567890123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (PT) first and then numbers and string with length equals 25', () => {
      // Arrange
      const value = 'PT123456789012345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (PT) first and then numbers and string with length greater than 25', () => {
      // Arrange
      const value = 'PT123456789012345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (PT) first and then numbers and string with length lower than 25', () => {
      // Arrange
      const value = 'PT123456789012345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (QA) first and then numbers and string with length equals 29', () => {
      // Arrange
      const value = 'QA1234567890123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (QA) first and then numbers and string with length greater than 29', () => {
      // Arrange
      const value = 'QA1234567890123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (QA) first and then numbers and string with length lower than 29', () => {
      // Arrange
      const value = 'QA1234567890123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (RO) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'RO12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (RO) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'RO12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (RO) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'RO12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (RS) first and then numbers and string with length equals 22', () => {
      // Arrange
      const value = 'RS123456789012345678AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (RS) first and then numbers and string with length greater than 22', () => {
      // Arrange
      const value = 'RS123456789012345678AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (RS) first and then numbers and string with length lower than 22', () => {
      // Arrange
      const value = 'RS123456789012345678A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SA) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'SA12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SA) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'SA12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SA) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'SA12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SC) first and then numbers and string with length equals 31', () => {
      // Arrange
      const value = 'SC123456789012345678901234567AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SC) first and then numbers and string with length greater than 31', () => {
      // Arrange
      const value = 'SC123456789012345678901234567AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SC) first and then numbers and string with length lower than 31', () => {
      // Arrange
      const value = 'SC123456789012345678901234567A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SE) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'SE12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SE) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'SE12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SE) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'SE12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SI) first and then numbers and string with length equals 19', () => {
      // Arrange
      const value = 'SI123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SI) first and then numbers and string with length greater than 19', () => {
      // Arrange
      const value = 'SI123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SI) first and then numbers and string with length lower than 19', () => {
      // Arrange
      const value = 'SI123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SK) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'SK12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SK) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'SK12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SK) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'SK12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SM) first and then numbers and string with length equals 27', () => {
      // Arrange
      const value = 'SM12345678901234567890123AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SM) first and then numbers and string with length greater than 27', () => {
      // Arrange
      const value = 'SM12345678901234567890123AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SM) first and then numbers and string with length lower than 27', () => {
      // Arrange
      const value = 'SM12345678901234567890123A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SN) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'SN123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SN) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'SN123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SN) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'SN123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (ST) first and then numbers and string with length equals 25', () => {
      // Arrange
      const value = 'ST123456789012345678901AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (ST) first and then numbers and string with length greater than 25', () => {
      // Arrange
      const value = 'ST123456789012345678901AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (ST) first and then numbers and string with length lower than 25', () => {
      // Arrange
      const value = 'ST123456789012345678901A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (SV) first and then numbers and string with length equals 28', () => {
      // Arrange
      const value = 'SV123456789012345678901234AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (SV) first and then numbers and string with length greater than 28', () => {
      // Arrange
      const value = 'SV123456789012345678901234AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (SV) first and then numbers and string with length lower than 28', () => {
      // Arrange
      const value = 'SV123456789012345678901234A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (TN) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'TN12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (TN) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'TN12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (TN) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'TN12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (TL) first and then numbers and string with length equals 23', () => {
      // Arrange
      const value = 'TL1234567890123456789AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (TL) first and then numbers and string with length greater than 23', () => {
      // Arrange
      const value = 'TL1234567890123456789AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (TL) first and then numbers and string with length lower than 23', () => {
      // Arrange
      const value = 'TL1234567890123456789A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (TR) first and then numbers and string with length equals 26', () => {
      // Arrange
      const value = 'TR1234567890123456789012AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (TR) first and then numbers and string with length greater than 26', () => {
      // Arrange
      const value = 'TR1234567890123456789012AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (TR) first and then numbers and string with length lower than 26', () => {
      // Arrange
      const value = 'TR1234567890123456789012A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (UA) first and then numbers and string with length equals 29', () => {
      // Arrange
      const value = 'UA1234567890123456789012345AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (UA) first and then numbers and string with length greater than 29', () => {
      // Arrange
      const value = 'UA1234567890123456789012345AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (UA) first and then numbers and string with length lower than 29', () => {
      // Arrange
      const value = 'UA1234567890123456789012345A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (VG) first and then numbers and string with length equals 24', () => {
      // Arrange
      const value = 'VG12345678901234567890AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (VG) first and then numbers and string with length greater than 24', () => {
      // Arrange
      const value = 'VG12345678901234567890AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (VG) first and then numbers and string with length lower than 24', () => {
      // Arrange
      const value = 'VG12345678901234567890A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return true when it feeds value with valid country code (XK) first and then numbers and string with length equals 20', () => {
      // Arrange
      const value = 'XK1234567890123456AB';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeTruthy();
    });

    it('should return false when it feeds value with valid country code (XK) first and then numbers and string with length greater than 20', () => {
      // Arrange
      const value = 'XK1234567890123456AB1';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });

    it('should return false when it feeds value with valid country code (XK) first and then numbers and string with length lower than 20', () => {
      // Arrange
      const value = 'XK1234567890123456A';

      // Act
      const result = hasValidLength(value);

      // Assert
      expect(result).toBeFalsy();
    });
  });
});
