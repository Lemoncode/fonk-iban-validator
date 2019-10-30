import { validator, setErrorMessage } from './validator';

const VALIDATOR_TYPE = 'IBAN';
const defaultMessage = 'Invalid IBAN';

describe('fonk-iban-validator specs', () => {
  it('should return succeeded validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    // Arrange
    const value = null;

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
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
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeded validation when it feeds value equals valid IBAN with spaces', () => {
    // Arrange
    const value = 'ES912 100041845020005 1332';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeded validation when it feeds value equals valid IBAN from (Albania)', () => {
    // Arrange
    const value = 'AL47212110090000000235698741';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Albania)', () => {
    // Arrange
    const value = 'AL47212110190000000235698741';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Algeria
  it('should return succeded validation when it feeds value equals valid IBAN from (Algeria)', () => {
    // Arrange
    const value = 'DZ4000400174401001050486';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Algeria)', () => {
    // Arrange
    const value = 'DZ4001400174401001050486';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Angola
  it('should return succeded validation when it feeds value equals valid IBAN from (Angola)', () => {
    // Arrange
    const value = 'AO06000600000100037131174';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Angola)', () => {
    // Arrange
    const value = 'AO06000600200100037131174';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Andorra
  it('should return succeded validation when it feeds value equals valid IBAN from (Andorra)', () => {
    // Arrange
    const value = 'AD1200012030200359100100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Andorra)', () => {
    // Arrange
    const value = 'AD1220012030200359100100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Austria
  it('should return succeded validation when it feeds value equals valid IBAN from (Austria)', () => {
    // Arrange
    const value = 'AT611904300234573201';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Austria)', () => {
    // Arrange
    const value = 'AT611904300234573501';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  //  ** Azerbaijan
  it('should return succeded validation when it feeds value equals valid IBAN from (Azerbaijan)', () => {
    // Arrange
    const value = 'AZ21NABZ00000000137010001944';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Azerbaijan)', () => {
    // Arrange
    const value = 'AZ21NABZ00000000137010001344';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Bahrain
  it('should return succeded validation when it feeds value equals valid IBAN from (Bahrain)', () => {
    // Arrange
    const value = 'BH29BMAG1299123456BH00';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Bahrain)', () => {
    // Arrange
    const value = 'BH29B3AG1299123456BH00';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Bosnia and Herzegovina
  it('should return succeded validation when it feeds value equals valid IBAN from (Bosnia and Herzegovina)', () => {
    // Arrange
    const value = 'BA391290079401028494';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Bosnia and Herzegovina)', () => {
    // Arrange
    const value = 'BA391290039401028494';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Belgium
  it('should return succeded validation when it feeds value equals valid IBAN from (Belgium)', () => {
    // Arrange
    const value = 'BE68539007547034';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Belgium)', () => {
    // Arrange
    const value = 'BE68539007544034';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Benin
  it('should return succeded validation when it feeds value equals valid IBAN from (Benin)', () => {
    // Arrange
    const value = 'BJ11B00610100400271101192591';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Benin)', () => {
    // Arrange
    const value = 'BJ11B00610100403271101192591';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Brazil
  it('should return succeded validation when it feeds value equals valid IBAN from (Brazil)', () => {
    // Arrange
    const value = 'BR9700360305000010009795493P1';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Brazil)', () => {
    // Arrange
    const value = 'BR9700360303000010009795493P1';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Burkina Faso
  it('should return succeded validation when it feeds value equals valid IBAN from (Burkina Faso)', () => {
    // Arrange
    const value = 'BF1030134020015400945000643';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Burkina Faso)', () => {
    // Arrange
    const value = 'BF1030134020015430945000643';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Bulgaria
  it('should return succeded validation when it feeds value equals valid IBAN from (Bulgaria)', () => {
    // Arrange
    const value = 'BG80BNBG96611020345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Bulgaria)', () => {
    // Arrange
    const value = 'BG80BNBG96612020345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Burundi
  it('should return succeded validation when it feeds value equals valid IBAN from (Burundi)', () => {
    // Arrange
    const value = 'BI43201011067444';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Burundi)', () => {
    // Arrange
    const value = 'BI43201013067444';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Cameroon
  it('should return succeded validation when it feeds value equals valid IBAN from (Cameroon)', () => {
    // Arrange
    const value = 'CM2110003001000500000605306';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Cameroon)', () => {
    // Arrange
    const value = 'CM2110003001000200000605306';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Cape Verde
  it('should return succeded validation when it feeds value equals valid IBAN from (Cape Verde)', () => {
    // Arrange
    const value = 'CV64000300004547069110176';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Cape Verde)', () => {
    // Arrange
    const value = 'CV64000300004547069110276';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Costa Rica
  it('should return succeded validation when it feeds value equals valid IBAN from (Costa Rica)', () => {
    // Arrange
    const value = 'CR05 0152 0200 1026 2840 66';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Costa Rica)', () => {
    // Arrange
    const value = 'CR0515202001026274066';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Croatia
  it('should return succeded validation when it feeds value equals valid IBAN from (Croatia)', () => {
    // Arrange
    const value = 'HR1210010051863000160';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Croatia)', () => {
    // Arrange
    const value = 'HR1210010051862000160';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Cyprus
  it('should return succeded validation when it feeds value equals valid IBAN from (Cyprus)', () => {
    // Arrange
    const value = 'CY17002001280000001200527600';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Cyprus)', () => {
    // Arrange
    const value = 'CY17002001280000001200527500';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Czech Republic
  it('should return succeded validation when it feeds value equals valid IBAN from (Cyprus)', () => {
    // Arrange
    const value = 'CZ6508000000192000145399';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Cyprus)', () => {
    // Arrange
    const value = 'CZ6508000000192000145299';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Denmark
  it('should return succeded validation when it feeds value equals valid IBAN from (Denmark)', () => {
    // Arrange
    const value = 'DK5000400440116243';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Denmark)', () => {
    // Arrange
    const value = 'DK5000400440113243';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Dominican Republic
  it('should return succeded validation when it feeds value equals valid IBAN from (Dominican Republic)', () => {
    // Arrange
    const value = 'DO28BAGR00000001212453611324';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Dominican Republic)', () => {
    // Arrange
    const value = 'DO28BAGR00000001312453611324';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** East Timor
  it('should return succeded validation when it feeds value equals valid IBAN from (East Timor)', () => {
    // Arrange
    const value = 'TL380080012345678910157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (East Timor)', () => {
    // Arrange
    const value = 'TL380080012345478910157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Estonia
  it('should return succeded validation when it feeds value equals valid IBAN from (Estonia)', () => {
    // Arrange
    const value = 'EE382200221020145685';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Estonia)', () => {
    // Arrange
    const value = 'EE482200221020145685';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Faroe Islands
  it('should return succeded validation when it feeds value equals valid IBAN from (Faroe Islands)', () => {
    // Arrange
    const value = 'FO1464600009692713';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Faroe Islands)', () => {
    // Arrange
    const value = 'FO1464600009592713';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Finland
  it('should return succeded validation when it feeds value equals valid IBAN from (Finland)', () => {
    // Arrange
    const value = 'FI2112345600000785';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Finland)', () => {
    // Arrange
    const value = 'FI2312345600000785';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** France
  it('should return succeded validation when it feeds value equals valid IBAN from (France)', () => {
    // Arrange
    const value = 'FR1420041010050500013M02606';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (France)', () => {
    // Arrange
    const value = 'FR1450041010050500013M02606';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Guatemala
  it('should return succeded validation when it feeds value equals valid IBAN from (Guatemala)', () => {
    // Arrange
    const value = 'GT82TRAJ01020000001210029690';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Guatemala)', () => {
    // Arrange
    const value = 'GT82TRAJ01020000001210028690';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Georgia
  it('should return succeded validation when it feeds value equals valid IBAN from (Georgia)', () => {
    // Arrange
    const value = 'GE29NB0000000101904917';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Georgia)', () => {
    // Arrange
    const value = 'GE29NB0000000101904817';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Germany
  it('should return succeded validation when it feeds value equals valid IBAN from (Germany)', () => {
    // Arrange
    const value = 'DE89370400440532013000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Germany)', () => {
    // Arrange
    const value = 'DE89370400430532013000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Gibraltar
  it('should return succeded validation when it feeds value equals valid IBAN from (Gibraltar)', () => {
    // Arrange
    const value = 'GI75NWBK000000007099453';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Gibraltar)', () => {
    // Arrange
    const value = 'GI75NWIK000000007099453';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Greece
  it('should return succeded validation when it feeds value equals valid IBAN from (Greece)', () => {
    // Arrange
    const value = 'GR1601101250000000012300695';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Greece)', () => {
    // Arrange
    const value = 'GR1601101250000000012300694';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Greenland
  it('should return succeded validation when it feeds value equals valid IBAN from (Greenland)', () => {
    // Arrange
    const value = 'GL8964710001000206';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Greenland)', () => {
    // Arrange
    const value = 'GL8964710002000206';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Hungary
  it('should return succeded validation when it feeds value equals valid IBAN from (Hungary)', () => {
    // Arrange
    const value = 'HU42117730161111101800000000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Hungary)', () => {
    // Arrange
    const value = 'HU42117730161111101800000010';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Iceland
  it('should return succeded validation when it feeds value equals valid IBAN from (Iceland)', () => {
    // Arrange
    const value = 'IS140159260076545510730339';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Iceland)', () => {
    // Arrange
    const value = 'IS140159260076545510730334';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Iran
  it('should return succeded validation when it feeds value equals valid IBAN from (Iran)', () => {
    // Arrange
    const value = 'IR580540105180021273113007';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Iran)', () => {
    // Arrange
    const value = 'IR580540105180021473113007';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Ireland
  it('should return succeded validation when it feeds value equals valid IBAN from (Iran)', () => {
    // Arrange
    const value = 'IE29AIBK93115212345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Iran)', () => {
    // Arrange
    const value = 'IE29AIBY93115212345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Israel
  it('should return succeded validation when it feeds value equals valid IBAN from (Israel)', () => {
    // Arrange
    const value = 'IL620108000000099999999';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Israel)', () => {
    // Arrange
    const value = 'IL620108000000099989999';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Italy
  it('should return succeded validation when it feeds value equals valid IBAN from (Italy)', () => {
    // Arrange
    const value = 'IT60X0542811101000000123456';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Italy)', () => {
    // Arrange
    const value = 'IT60X6542811101000000123456';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Ivory Coast
  it('should return succeded validation when it feeds value equals valid IBAN from (Ivory Coast)', () => {
    // Arrange
    const value = 'CI05A00060174100178530011852';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Ivory Coast)', () => {
    // Arrange
    const value = 'CI05A00060174100177530011852';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Jordan
  it('should return succeded validation when it feeds value equals valid IBAN from (Jordan)', () => {
    // Arrange
    const value = 'JO94CBJO0010000000000131000302';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Jordan)', () => {
    // Arrange
    const value = 'JO94CBJO0012000000000131000302';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Kazakhstan
  it('should return succeded validation when it feeds value equals valid IBAN from (Kazakhstan)', () => {
    // Arrange
    const value = 'KZ176010251000042993';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Kazakhstan)', () => {
    // Arrange
    const value = 'KZ176010251000042193';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Kuwait
  it('should return succeded validation when it feeds value equals valid IBAN from (Kuwait)', () => {
    // Arrange
    const value = 'KW74NBOK0000000000001000372151';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Kuwait)', () => {
    // Arrange
    const value = 'KW74NBOE0000000000001000372151';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Latvia
  it('should return succeded validation when it feeds value equals valid IBAN from (Latvia)', () => {
    // Arrange
    const value = 'LV80BANK0000435195001';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Latvia)', () => {
    // Arrange
    const value = 'LV80BANK0000425195001';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Lebanon
  it('should return succeded validation when it feeds value equals valid IBAN from (Lebanon)', () => {
    // Arrange
    const value = 'LB30099900000001001925579115';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Lebanon)', () => {
    // Arrange
    const value = 'LB30099900000001001925579114';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Liechtenstein
  it('should return succeded validation when it feeds value equals valid IBAN from (Liechtenstein)', () => {
    // Arrange
    const value = 'LI21088100002324013AA';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Liechtenstein)', () => {
    // Arrange
    const value = 'LI21088100002324013BA';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Lithuania
  it('should return succeded validation when it feeds value equals valid IBAN from (Lithuania)', () => {
    // Arrange
    const value = 'LT121000011101001000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Lithuania)', () => {
    // Arrange
    const value = 'LT121000011101002000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Luxembourg
  it('should return succeded validation when it feeds value equals valid IBAN from (Luxembourg)', () => {
    // Arrange
    const value = 'LU280019400644750000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Luxembourg)', () => {
    // Arrange
    const value = 'LU280019400634750000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Macedonia
  it('should return succeded validation when it feeds value equals valid IBAN from (Macedonia)', () => {
    // Arrange
    const value = 'MK07300000000042425';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Macedonia)', () => {
    // Arrange
    const value = 'MK06300000000042425';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Madagascar
  it('should return succeded validation when it feeds value equals valid IBAN from (Madagascar)', () => {
    // Arrange
    const value = 'MG4600005030010101914016056';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Madagascar)', () => {
    // Arrange
    const value = 'MG4600005030010101814016056';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Malta
  it('should return succeded validation when it feeds value equals valid IBAN from (Malta)', () => {
    // Arrange
    const value = 'MT84MALT011000012345MTLCAST001S';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Malta)', () => {
    // Arrange
    const value = 'MT84MALT011000012345YTLCAST001S';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Mauritania
  it('should return succeded validation when it feeds value equals valid IBAN from (Mauritania)', () => {
    // Arrange
    const value = 'MR1300012000010000002037372';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Mauritania)', () => {
    // Arrange
    const value = 'MR1300012001010000002037372';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Mauritius
  it('should return succeded validation when it feeds value equals valid IBAN from (Mauritius)', () => {
    // Arrange
    const value = 'MU17BOMM0101101030300200000MUR';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Mauritius)', () => {
    // Arrange
    const value = 'MU17BOMM0101101030300200010MUR';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Mali
  it('should return succeded validation when it feeds value equals valid IBAN from (Mali)', () => {
    // Arrange
    const value = 'ML03D00890170001002120000447';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Mali)', () => {
    // Arrange
    const value = 'ML03D00890170001002120000347';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Moldova
  it('should return succeded validation when it feeds value equals valid IBAN from (Moldova)', () => {
    // Arrange
    const value = 'MD24AG000225100013104168';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Moldova)', () => {
    // Arrange
    const value = 'MD24AG000224100013104168';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Monaco
  it('should return succeded validation when it feeds value equals valid IBAN from (Monaco)', () => {
    // Arrange
    const value = 'MC5813488000010051108001292';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Monaco)', () => {
    // Arrange
    const value = 'MC5813478000010051108001292';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Montenegro
  it('should return succeded validation when it feeds value equals valid IBAN from (Montenegro)', () => {
    // Arrange
    const value = 'ME25505000012345678951';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Montenegro)', () => {
    // Arrange
    const value = 'ME24505000012345678951';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Mozambique
  it('should return succeded validation when it feeds value equals valid IBAN from (Mozambique)', () => {
    // Arrange
    const value = 'MZ59000100000011834194157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Mozambique)', () => {
    // Arrange
    const value = 'MZ59000100000011734194157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Netherlands
  it('should return succeded validation when it feeds value equals valid IBAN from (Netherlands)', () => {
    // Arrange
    const value = 'NL91ABNA0417164300';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Netherlands)', () => {
    // Arrange
    const value = 'NL91ABNA0417164301';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Norway
  it('should return succeded validation when it feeds value equals valid IBAN from (Norway)', () => {
    // Arrange
    const value = 'NO9386011117947';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Norway)', () => {
    // Arrange
    const value = 'NO9386011117937';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Pakistan
  it('should return succeded validation when it feeds value equals valid IBAN from (Pakistan)', () => {
    // Arrange
    const value = 'PK24SCBL0000001171495101';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Pakistan)', () => {
    // Arrange
    const value = 'PK24SCBL0000101171495101';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Palestine
  it('should return succeded validation when it feeds value equals valid IBAN from (Palestine)', () => {
    // Arrange
    const value = 'PS92PALS000000000400123456702';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Palestine)', () => {
    // Arrange
    const value = 'PS92PALS000000000400122456702';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Poland
  it('should return succeded validation when it feeds value equals valid IBAN from (Poland)', () => {
    // Arrange
    const value = 'PL27114020040000300201355387';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Poland)', () => {
    // Arrange
    const value = 'PL23114020040000300201355387';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Portugal
  it('should return succeded validation when it feeds value equals valid IBAN from (Portugal)', () => {
    // Arrange
    const value = 'PT50000201231234567890154';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Portugal)', () => {
    // Arrange
    const value = 'PT50000201231234567890153';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Qatar
  it('should return succeded validation when it feeds value equals valid IBAN from (Qatar)', () => {
    // Arrange
    const value = 'QA58DOHB00001234567890ABCDEFG';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Qatar)', () => {
    // Arrange
    const value = 'QA58EOHB00001234567890ABCDEFG';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeded validation when it feeds value equals valid IBAN from (Republic of Kosovo)', () => {
    // Arrange

    const value = 'XK051212012345678906';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeded validation when it feeds value equals valid IBAN from (Republic of Kosovo - second test)', () => {
    // Arrange
    const value = 'XK051000000000000053';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Republic of Kosovo)', () => {
    // Arrange
    const value = 'XK051212012345678907';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Romania
  it('should return succeded validation when it feeds value equals valid IBAN from (Romania)', () => {
    // Arrange
    const value = 'RO49AAAA1B31007593840000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Romania)', () => {
    // Arrange
    const value = 'RO49AABA1B31007593840000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** San Marino
  it('should return succeded validation when it feeds value equals valid IBAN from (San Marino)', () => {
    // Arrange
    const value = 'SM86U0322509800000000270100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (San Marino)', () => {
    // Arrange
    const value = 'SM86U0322509800000000275100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Saudi Arabia
  it('should return succeded validation when it feeds value equals valid IBAN from (Saudi Arabia)', () => {
    // Arrange
    const value = 'SA0380000000608010167519';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Saudi Arabia)', () => {
    // Arrange
    const value = 'SA0380000000600010167519';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Senegal
  it('should return succeded validation when it feeds value equals valid IBAN from (Senegal)', () => {
    // Arrange
    const value = 'SN12K00100152000025690007542';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Senegal)', () => {
    // Arrange
    const value = 'SN12K00100152000025680007542';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Serbia
  it('should return succeded validation when it feeds value equals valid IBAN from (Serbia)', () => {
    // Arrange
    const value = 'RS35260005601001611379';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Serbia)', () => {
    // Arrange
    const value = 'RS35260005601101611379';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Slovakia
  it('should return succeded validation when it feeds value equals valid IBAN from (Slovakia)', () => {
    // Arrange
    const value = 'SK3112000000198742637541';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Slovakia)', () => {
    // Arrange
    const value = 'SK2112000000198742637541';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Slovenia
  it('should return succeded validation when it feeds value equals valid IBAN from (Slovenia)', () => {
    // Arrange
    const value = 'SI56191000000123438';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Slovenia)', () => {
    // Arrange
    const value = 'SI56191000000223438';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Spain
  it('should return succeded validation when it feeds value equals valid IBAN from (Spain)', () => {
    // Arrange
    const value = 'ES7921000813610123456789';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Spain)', () => {
    // Arrange
    const value = 'ES7921000813615123456789';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Sweden
  it('should return succeded validation when it feeds value equals valid IBAN from (Sweden)', () => {
    // Arrange
    const value = 'SE3550000000054910000003';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Sweden)', () => {
    // Arrange
    const value = 'SE3550000000154910000003';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Switzerland
  it('should return succeded validation when it feeds value equals valid IBAN from (Switzerland)', () => {
    // Arrange
    const value = 'CH9300762011623852957';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Switzerland)', () => {
    // Arrange
    const value = 'CH9300762011623852857';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Tunisia
  it('should return succeded validation when it feeds value equals valid IBAN from (Tunisia)', () => {
    // Arrange
    const value = 'TN5914207207100707129648';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Tunisia)', () => {
    // Arrange
    const value = 'TN5914207207100707329648';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Turkey
  it('should return succeded validation when it feeds value equals valid IBAN from (Turkey)', () => {
    // Arrange
    const value = 'TR330006100519786457841326';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Turkey)', () => {
    // Arrange
    const value = 'TR330006100519786557841326';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** United Arab Emirates
  it('should return succeded validation when it feeds value equals valid IBAN from (United Arab Emirates)', () => {
    // Arrange
    const value = 'AE260211000000230064016';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (United Arab Emirates)', () => {
    // Arrange
    const value = 'AE260261000000230064016';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** United Kingdom
  it('should return succeded validation when it feeds value equals valid IBAN from (United Kingdom)', () => {
    // Arrange
    const value = 'GB29NWBK60161331926819';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (United Kingdom)', () => {
    // Arrange
    const value = 'GB29NWBK60161331326819';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
    });
  });

  // ** Virgin Islands, British VG
  it('should return succeded validation when it feeds value equals valid IBAN from (Virgin Islands, British VG)', () => {
    // Arrange
    const value = 'VG96VPVG0000012345678901';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds value equals invalid IBAN from (Virgin Islands, British VG)', () => {
    // Arrange
    const value = 'VG96VYVG0000012345678901';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: defaultMessage,
      type: VALIDATOR_TYPE,
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
      type: VALIDATOR_TYPE,
    });
  });
});
