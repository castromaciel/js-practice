/**
 * 
 * @param {string} language 
 */
const greet = (language = 'en') => {
  switch(language.toLowerCase()) {
    case 'en':
      return 'Hello, how are you?';
    case 'es':
      return '¡Hola! ¿Cómo estás?';
    case 'fr':
      return 'Bonjour, comment vous êtes-vous?';
    case 'de':
      return 'Hallo, wie geht es dir?';
    default:
      return `language: ${language}, not found`;
  }
}

/**
 * 
 * @param {string} language 
 */
const farewell = (language = 'en') => {
  switch(language.toLowerCase()) {
    case 'en':
      return 'See you later!';
    case 'es':
      return '¡Hasta luego!';
    case 'fr':
      return 'Adieu!';
    case 'de':
      return 'Tschüss!';
    default:
      return `language: ${language}, not found`;
  }
}


/**
 * 
 * @param {0 | 1} value 
 * @param {0 | 1} threshold
 * @param {(lang: string) => string} f1
 * @param {(lang: string) => string} f2
 * @param {string} language
 */

const principalFunction = (value, threshold, f1, f2, language) => {
  if (value >= threshold) return f1(language);
  return f2(language);
}

QUnit.test('Test lambda function', (assert) => {
  const greetInEn = principalFunction(1, 0, greet, farewell, 'en')
  assert.equal(greetInEn, 'Hello, how are you?', 'Correct greeting');
  const farewellInFr = principalFunction(0, 1, greet, farewell, 'fr')
  assert.equal(farewellInFr, 'Adieu!', 'Correct farewell');
  const greetInDe = principalFunction(1, 0, greet, farewell, 'de')
  assert.equal(greetInDe, 'Hallo, wie geht es dir?', 'Correct greeting');
  const farewellInEs = principalFunction(0, 1, greet, farewell, 'es')
  assert.equal(farewellInEs, '¡Hasta luego!', 'Correct farewell');
})