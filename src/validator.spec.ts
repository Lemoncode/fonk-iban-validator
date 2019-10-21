import { validator, setErrorMessage } from './validator';
import { getLengthCountry } from './switchCountry';

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
  it('should return 0 if country code does not exists', () => {
    // Arrange
    const value = 'pw';

    // Act
    const result = getLengthCountry(value);

    // Assert
    expect(result).toEqual(0);
  });
  it('should return 0 if country code is null', () => {
    // Arrange
    const value = null;

    // Act
    const result = getLengthCountry(value);

    // Assert
    expect(result).toEqual(0);
  });
  it('should return 28 if country code is AL', () => {
    // Arrange
    const value = 'AL';

    // Act
    const result = getLengthCountry(value);

    // Assert
    expect(result).toEqual(28);
  });
  it('should return 0 if country code is undefined', () => {
    // Arrange
    const value = undefined;

    // Act
    const result = getLengthCountry(value);

    // Assert
    expect(result).toEqual(0);
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
    const value = 'ES912 100041845020005 1332';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a valid IBAN (Albania) and return valid', function() {
    // Arrange
    const value = 'AL47212110090000000235698741';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Albania) and return error', function() {
    // Arrange
    const value = 'AL47212110190000000235698741';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Algeria
  it('Should validate a valid IBAN (Algeria) and return valid', function() {
    // Arrange
    const value = 'DZ4000400174401001050486';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Algeria) and return error', function() {
    // Arrange
    const value = 'DZ4001400174401001050486';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Angola
  it('Should validate a valid IBAN (Angola) and return valid', function() {
    // Arrange
    const value = 'AO06000600000100037131174';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Angola) and return error', function() {
    // Arrange
    const value = 'AO06000600200100037131174';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Andorra
  it('Should validate a valid IBAN (Andorra) and return valid', function() {
    // Arrange
    const value = 'AD1200012030200359100100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Andorra) and return error', function() {
    // Arrange
    const value = 'AD1220012030200359100100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Austria
  it('Should validate a valid IBAN (Austria) and return valid', function() {
    // Arrange
    const value = 'AT611904300234573201';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Austria) and return error', function() {
    // Arrange
    const value = 'AT611904300234573501';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  //  ** Azerbaijan
  it('Should validate a valid IBAN (Azerbaijan) and return valid', function() {
    // Arrange
    const value = 'AZ21NABZ00000000137010001944';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Azerbaijan) and return error', function() {
    // Arrange
    const value = 'AZ21NABZ00000000137010001344';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Bahrain
  it('Should validate a valid IBAN (Bahrain) and return valid', function() {
    // Arrange
    const value = 'BH29BMAG1299123456BH00';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Bahrain) and return error', function() {
    // Arrange
    const value = 'BH29B3AG1299123456BH00';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Bosnia and Herzegovina
  it('Should validate a valid IBAN (Bosnia and Herzegovina) and return valid', function() {
    // Arrange
    const value = 'BA391290079401028494';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Bosnia and Herzegovina) and return error', function() {
    // Arrange
    const value = 'BA391290039401028494';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Belgium
  it('Should validate a valid IBAN (Belgium) and return valid', function() {
    // Arrange
    const value = 'BE68539007547034';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Belgium) and return error', function() {
    // Arrange
    const value = 'BE68539007544034';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Benin
  it('Should validate a valid IBAN (Benin) and return valid', function() {
    // Arrange
    const value = 'BJ11B00610100400271101192591';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Benin) and return error', function() {
    // Arrange
    const value = 'BJ11B00610100403271101192591';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Brazil
  it('Should validate a valid IBAN (Brazil) and return valid', function() {
    // Arrange
    const value = 'BR9700360305000010009795493P1';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Brazil) and return error', function() {
    // Arrange
    const value = 'BR9700360303000010009795493P1';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Burkina Faso
  it('Should validate a valid IBAN (Burkina Faso) and return valid', function() {
    // Arrange
    const value = 'BF1030134020015400945000643';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Burkina Faso) and return error', function() {
    // Arrange
    const value = 'BF1030134020015430945000643';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Bulgaria
  it('Should validate a valid IBAN (Bulgaria) and return valid', function() {
    // Arrange
    const value = 'BG80BNBG96611020345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Bulgaria) and return error', function() {
    // Arrange
    const value = 'BG80BNBG96612020345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Burundi
  it('Should validate a valid IBAN (Burundi) and return valid', function() {
    // Arrange
    const value = 'BI43201011067444';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Burundi) and return error', function() {
    // Arrange
    const value = 'BI43201013067444';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Cameroon
  it('Should validate a valid IBAN (Cameroon) and return valid', function() {
    // Arrange
    const value = 'CM2110003001000500000605306';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Cameroon) and return error', function() {
    // Arrange
    const value = 'CM2110003001000200000605306';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Cape Verde
  it('Should validate a valid IBAN (Cape Verde) and return valid', function() {
    // Arrange
    const value = 'CV64000300004547069110176';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Cape Verde) and return error', function() {
    // Arrange
    const value = 'CV64000300004547069110276';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Costa Rica
  it('Should validate a valid IBAN (Costa Rica) and return valid', function() {
    // Arrange
    const value = 'CR05 0152 0200 1026 2840 66';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Costa Rica) and return error', function() {
    // Arrange
    const value = 'CR0515202001026274066';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Croatia
  it('Should validate a valid IBAN (Croatia) and return valid', function() {
    // Arrange
    const value = 'HR1210010051863000160';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Croatia) and return error', function() {
    // Arrange
    const value = 'HR1210010051862000160';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Cyprus
  it('Should validate a valid IBAN (Cyprus) and return valid', function() {
    // Arrange
    const value = 'CY17002001280000001200527600';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Cyprus) and return error', function() {
    // Arrange
    const value = 'CY17002001280000001200527500';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Czech Republic
  it('Should validate a valid IBAN (Cyprus) and return valid', function() {
    // Arrange
    const value = 'CZ6508000000192000145399';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Cyprus) and return error', function() {
    // Arrange
    const value = 'CZ6508000000192000145299';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Denmark
  it('Should validate a valid IBAN (Denmark) and return valid', function() {
    // Arrange
    const value = 'DK5000400440116243';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Denmark) and return error', function() {
    // Arrange
    const value = 'DK5000400440113243';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Dominican Republic
  it('Should validate a valid IBAN (Dominican Republic) and return valid', function() {
    // Arrange
    const value = 'DO28BAGR00000001212453611324';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Dominican Republic) and return error', function() {
    // Arrange
    const value = 'DO28BAGR00000001312453611324';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** East Timor
  it('Should validate a valid IBAN (East Timor) and return valid', function() {
    // Arrange
    const value = 'TL380080012345678910157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (East Timor) and return error', function() {
    // Arrange
    const value = 'TL380080012345478910157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Estonia
  it('Should validate a valid IBAN (Estonia) and return valid', function() {
    // Arrange
    const value = 'EE382200221020145685';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Estonia) and return error', function() {
    // Arrange
    const value = 'EE482200221020145685';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Faroe Islands
  it('Should validate a valid IBAN (Faroe Islands) and return valid', function() {
    // Arrange
    const value = 'FO1464600009692713';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Faroe Islands) and return error', function() {
    // Arrange
    const value = 'FO1464600009592713';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Finland
  it('Should validate a valid IBAN (Finland) and return valid', function() {
    // Arrange
    const value = 'FI2112345600000785';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Finland) and return error', function() {
    // Arrange
    const value = 'FI2312345600000785';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** France
  it('Should validate a valid IBAN (France) and return valid', function() {
    // Arrange
    const value = 'FR1420041010050500013M02606';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (France) and return error', function() {
    // Arrange
    const value = 'FR1450041010050500013M02606';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Guatemala
  it('Should validate a valid IBAN (Guatemala) and return valid', function() {
    // Arrange
    const value = 'GT82TRAJ01020000001210029690';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Guatemala) and return error', function() {
    // Arrange
    const value = 'GT82TRAJ01020000001210028690';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Georgia
  it('Should validate a valid IBAN (Georgia) and return valid', function() {
    // Arrange
    const value = 'GE29NB0000000101904917';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Georgia) and return error', function() {
    // Arrange
    const value = 'GE29NB0000000101904817';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Germany
  it('Should validate a valid IBAN (Germany) and return valid', function() {
    // Arrange
    const value = 'DE89370400440532013000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Germany) and return error', function() {
    // Arrange
    const value = 'DE89370400430532013000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Gibraltar
  it('Should validate a valid IBAN (Gibraltar) and return valid', function() {
    // Arrange
    const value = 'GI75NWBK000000007099453';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Gibraltar) and return error', function() {
    // Arrange
    const value = 'GI75NWIK000000007099453';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Greece
  it('Should validate a valid IBAN (Greece) and return valid', function() {
    // Arrange
    const value = 'GR1601101250000000012300695';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Greece) and return error', function() {
    // Arrange
    const value = 'GR1601101250000000012300694';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Greenland
  it('Should validate a valid IBAN (Greenland) and return valid', function() {
    // Arrange
    const value = 'GL8964710001000206';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Greenland) and return error', function() {
    // Arrange
    const value = 'GL8964710002000206';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Hungary
  it('Should validate a valid IBAN (Hungary) and return valid', function() {
    // Arrange
    const value = 'HU42117730161111101800000000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Hungary) and return error', function() {
    // Arrange
    const value = 'HU42117730161111101800000010';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Iceland
  it('Should validate a valid IBAN (Iceland) and return valid', function() {
    // Arrange
    const value = 'IS140159260076545510730339';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Iceland) and return error', function() {
    // Arrange
    const value = 'IS140159260076545510730334';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Iran
  it('Should validate a valid IBAN (Iran) and return valid', function() {
    // Arrange
    const value = 'IR580540105180021273113007';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Iran) and return error', function() {
    // Arrange
    const value = 'IR580540105180021473113007';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Ireland
  it('Should validate a valid IBAN (Iran) and return valid', function() {
    // Arrange
    const value = 'IE29AIBK93115212345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Iran) and return error', function() {
    // Arrange
    const value = 'IE29AIBY93115212345678';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Israel
  it('Should validate a valid IBAN (Israel) and return valid', function() {
    // Arrange
    const value = 'IL620108000000099999999';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Israel) and return error', function() {
    // Arrange
    const value = 'IL620108000000099989999';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Italy
  it('Should validate a valid IBAN (Italy) and return valid', function() {
    // Arrange
    const value = 'IT60X0542811101000000123456';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Italy) and return error', function() {
    // Arrange
    const value = 'IT60X6542811101000000123456';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Ivory Coast
  it('Should validate a valid IBAN (Ivory Coast) and return valid', function() {
    // Arrange
    const value = 'CI05A00060174100178530011852';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Ivory Coast) and return error', function() {
    // Arrange
    const value = 'CI05A00060174100177530011852';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Jordan
  it('Should validate a valid IBAN (Jordan) and return valid', function() {
    // Arrange
    const value = 'JO94CBJO0010000000000131000302';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Jordan) and return error', function() {
    // Arrange
    const value = 'JO94CBJO0012000000000131000302';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Kazakhstan
  it('Should validate a valid IBAN (Kazakhstan) and return valid', function() {
    // Arrange
    const value = 'KZ176010251000042993';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Kazakhstan) and return error', function() {
    // Arrange
    const value = 'KZ176010251000042193';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Kuwait
  it('Should validate a valid IBAN (Kuwait) and return valid', function() {
    // Arrange
    const value = 'KW74NBOK0000000000001000372151';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Kuwait) and return error', function() {
    // Arrange
    const value = 'KW74NBOE0000000000001000372151';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Latvia
  it('Should validate a valid IBAN (Latvia) and return valid', function() {
    // Arrange
    const value = 'LV80BANK0000435195001';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Latvia) and return error', function() {
    // Arrange
    const value = 'LV80BANK0000425195001';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Lebanon
  it('Should validate a valid IBAN (Lebanon) and return valid', function() {
    // Arrange
    const value = 'LB30099900000001001925579115';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Lebanon) and return error', function() {
    // Arrange
    const value = 'LB30099900000001001925579114';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Liechtenstein
  it('Should validate a valid IBAN (Liechtenstein) and return valid', function() {
    // Arrange
    const value = 'LI21088100002324013AA';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Liechtenstein) and return error', function() {
    // Arrange
    const value = 'LI21088100002324013BA';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Lithuania
  it('Should validate a valid IBAN (Lithuania) and return valid', function() {
    // Arrange
    const value = 'LT121000011101001000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Lithuania) and return error', function() {
    // Arrange
    const value = 'LT121000011101002000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Luxembourg
  it('Should validate a valid IBAN (Luxembourg) and return valid', function() {
    // Arrange
    const value = 'LU280019400644750000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Luxembourg) and return error', function() {
    // Arrange
    const value = 'LU280019400634750000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Macedonia
  it('Should validate a valid IBAN (Macedonia) and return valid', function() {
    // Arrange
    const value = 'MK07300000000042425';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Macedonia) and return error', function() {
    // Arrange
    const value = 'MK06300000000042425';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Madagascar
  it('Should validate a valid IBAN (Madagascar) and return valid', function() {
    // Arrange
    const value = 'MG4600005030010101914016056';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Madagascar) and return error', function() {
    // Arrange
    const value = 'MG4600005030010101814016056';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Malta
  it('Should validate a valid IBAN (Malta) and return valid', function() {
    // Arrange
    const value = 'MT84MALT011000012345MTLCAST001S';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Malta) and return error', function() {
    // Arrange
    const value = 'MT84MALT011000012345YTLCAST001S';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Mauritania
  it('Should validate a valid IBAN (Mauritania) and return valid', function() {
    // Arrange
    const value = 'MR1300012000010000002037372';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Mauritania) and return error', function() {
    // Arrange
    const value = 'MR1300012001010000002037372';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Mauritius
  it('Should validate a valid IBAN (Mauritius) and return valid', function() {
    // Arrange
    const value = 'MU17BOMM0101101030300200000MUR';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Mauritius) and return error', function() {
    // Arrange
    const value = 'MU17BOMM0101101030300200010MUR';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Mali
  it('Should validate a valid IBAN (Mali) and return valid', function() {
    // Arrange
    const value = 'ML03D00890170001002120000447';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Mali) and return error', function() {
    // Arrange
    const value = 'ML03D00890170001002120000347';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Moldova
  it('Should validate a valid IBAN (Moldova) and return valid', function() {
    // Arrange
    const value = 'MD24AG000225100013104168';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Moldova) and return error', function() {
    // Arrange
    const value = 'MD24AG000224100013104168';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Monaco
  it('Should validate a valid IBAN (Monaco) and return valid', function() {
    // Arrange
    const value = 'MC5813488000010051108001292';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Monaco) and return error', function() {
    // Arrange
    const value = 'MC5813478000010051108001292';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Montenegro
  it('Should validate a valid IBAN (Montenegro) and return valid', function() {
    // Arrange
    const value = 'ME25505000012345678951';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Montenegro) and return error', function() {
    // Arrange
    const value = 'ME24505000012345678951';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Mozambique
  it('Should validate a valid IBAN (Mozambique) and return valid', function() {
    // Arrange
    const value = 'MZ59000100000011834194157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Mozambique) and return error', function() {
    // Arrange
    const value = 'MZ59000100000011734194157';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Netherlands
  it('Should validate a valid IBAN (Netherlands) and return valid', function() {
    // Arrange
    const value = 'NL91ABNA0417164300';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Netherlands) and return error', function() {
    // Arrange
    const value = 'NL91ABNA0417164301';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Norway
  it('Should validate a valid IBAN (Norway) and return valid', function() {
    // Arrange
    const value = 'NO9386011117947';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Norway) and return error', function() {
    // Arrange
    const value = 'NO9386011117937';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Pakistan
  it('Should validate a valid IBAN (Pakistan) and return valid', function() {
    // Arrange
    const value = 'PK24SCBL0000001171495101';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Pakistan) and return error', function() {
    // Arrange
    const value = 'PK24SCBL0000101171495101';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Palestine
  it('Should validate a valid IBAN (Palestine) and return valid', function() {
    // Arrange
    const value = 'PS92PALS000000000400123456702';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Palestine) and return error', function() {
    // Arrange
    const value = 'PS92PALS000000000400122456702';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Poland
  it('Should validate a valid IBAN (Poland) and return valid', function() {
    // Arrange
    const value = 'PL27114020040000300201355387';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Poland) and return error', function() {
    // Arrange
    const value = 'PL23114020040000300201355387';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Portugal
  it('Should validate a valid IBAN (Portugal) and return valid', function() {
    // Arrange
    const value = 'PT50000201231234567890154';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Portugal) and return error', function() {
    // Arrange
    const value = 'PT50000201231234567890153';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Qatar
  it('Should validate a valid IBAN (Qatar) and return valid', function() {
    // Arrange
    const value = 'QA58DOHB00001234567890ABCDEFG';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Qatar) and return error', function() {
    // Arrange
    const value = 'QA58EOHB00001234567890ABCDEFG';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // WATCH OUT !! THIS TWO TESTS ARE FAILING
  // ** Republic of Kosovo

  it('Should validate a valid IBAN (Republic of Kosovo) and return valid', function() {
    // Arrange

    const value = 'XK051212012345678906';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a valid IBAN (Republic of Kosovo - second test) and return valid', function() {
    // Arrange
    const value = 'XK051000000000000053';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Republic of Kosovo) and return error', function() {
    // Arrange
    const value = 'XK051212012345678907';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Romania
  it('Should validate a valid IBAN (Romania) and return valid', function() {
    // Arrange
    const value = 'RO49AAAA1B31007593840000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Romania) and return error', function() {
    // Arrange
    const value = 'RO49AABA1B31007593840000';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** San Marino
  it('Should validate a valid IBAN (San Marino) and return valid', function() {
    // Arrange
    const value = 'SM86U0322509800000000270100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (San Marino) and return error', function() {
    // Arrange
    const value = 'SM86U0322509800000000275100';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Saudi Arabia
  it('Should validate a valid IBAN (Saudi Arabia) and return valid', function() {
    // Arrange
    const value = 'SA0380000000608010167519';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Saudi Arabia) and return error', function() {
    // Arrange
    const value = 'SA0380000000600010167519';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Senegal
  it('Should validate a valid IBAN (Senegal) and return valid', function() {
    // Arrange
    const value = 'SN12K00100152000025690007542';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Senegal) and return error', function() {
    // Arrange
    const value = 'SN12K00100152000025680007542';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Serbia
  it('Should validate a valid IBAN (Serbia) and return valid', function() {
    // Arrange
    const value = 'RS35260005601001611379';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Serbia) and return error', function() {
    // Arrange
    const value = 'RS35260005601101611379';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Slovakia
  it('Should validate a valid IBAN (Slovakia) and return valid', function() {
    // Arrange
    const value = 'SK3112000000198742637541';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Slovakia) and return error', function() {
    // Arrange
    const value = 'SK2112000000198742637541';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Slovenia
  it('Should validate a valid IBAN (Slovenia) and return valid', function() {
    // Arrange
    const value = 'SI56191000000123438';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Slovenia) and return error', function() {
    // Arrange
    const value = 'SI56191000000223438';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Spain
  it('Should validate a valid IBAN (Spain) and return valid', function() {
    // Arrange
    const value = 'ES7921000813610123456789';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Spain) and return error', function() {
    // Arrange
    const value = 'ES7921000813615123456789';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Sweden
  it('Should validate a valid IBAN (Sweden) and return valid', function() {
    // Arrange
    const value = 'SE3550000000054910000003';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Sweden) and return error', function() {
    // Arrange
    const value = 'SE3550000000154910000003';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Switzerland
  it('Should validate a valid IBAN (Switzerland) and return valid', function() {
    // Arrange
    const value = 'CH9300762011623852957';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Switzerland) and return error', function() {
    // Arrange
    const value = 'CH9300762011623852857';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Tunisia
  it('Should validate a valid IBAN (Tunisia) and return valid', function() {
    // Arrange
    const value = 'TN5914207207100707129648';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Tunisia) and return error', function() {
    // Arrange
    const value = 'TN5914207207100707329648';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Turkey
  it('Should validate a valid IBAN (Turkey) and return valid', function() {
    // Arrange
    const value = 'TR330006100519786457841326';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Turkey) and return error', function() {
    // Arrange
    const value = 'TR330006100519786557841326';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** United Arab Emirates
  it('Should validate a valid IBAN (United Arab Emirates) and return valid', function() {
    // Arrange
    const value = 'AE260211000000230064016';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (United Arab Emirates) and return error', function() {
    // Arrange
    const value = 'AE260261000000230064016';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** United Kingdom
  it('Should validate a valid IBAN (United Kingdom) and return valid', function() {
    // Arrange
    const value = 'GB29NWBK60161331926819';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (United Kingdom) and return error', function() {
    // Arrange
    const value = 'GB29NWBK60161331326819';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
      type: 'IBAN',
    });
  });

  // ** Virgin Islands, British VG
  it('Should validate a valid IBAN (Virgin Islands, British VG) and return valid', function() {
    // Arrange
    const value = 'VG96VPVG0000012345678901';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IBAN',
    });
  });

  it('Should validate a non valid IBAN (Virgin Islands, British VG) and return error', function() {
    // Arrange
    const value = 'VG96VYVG0000012345678901';

    // Act
    const result = validator({ value });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'Invalid IBAN',
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
