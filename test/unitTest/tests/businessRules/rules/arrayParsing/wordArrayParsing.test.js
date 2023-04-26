'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file wordArrayParsing.test.js
 * @module wordArrayParsing.test
 * @description Unit tests for the wordArrayParsing.js
 * @requires module:wordArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/21
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import wordArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/wordArrayParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from '../../../constants/test.constants.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/wordArrayParsing.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num, biz, cfg, cmd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function convertCamelCaseStringToArray
 * @description Tests the positive and negative test cases of the convertCamelCaseStringToArray
 * @date 2023/04/21
 */
describe(tst_con.cconvertCamelCaseStringToArray, () => {
    /**
    * @function convertCamelCaseStringToArray_validDataString
    * @description Tests the business rules function doesArrayContainFilename with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertCamelCaseStringToArray_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld]);
    });

    /**
    * @function convertCamelCaseStringToArray_inValidDataInputDataString
    * @description Tests the business rules function doesArrayContainFilename with a invalid string data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertCamelCaseStringToArray_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.chello + wrd.cworld + wrd.chello + wrd.cworld;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([inputData]);
    });

    /**
    * @function convertCamelCaseStringToArray_inValidDataInputMetaDataString
    * @description Tests the business rules function doesArrayContainFilename with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertCamelCaseStringToArray_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld]);
    });

    /**
    * @function convertCamelCaseStringToArray_inValidInputDataInteger
    * @description Tests the business rules function doesArrayContainFilename with a invalid INTEGER data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.CconvertCamelCaseStringToArray_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([inputData]);
    });

    /**
    * @function convertCamelCaseStringToArray_inValidInputDataBoolean
    * @description Tests the business rules function doesArrayContainFilename with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertCamelCaseStringToArray_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([inputData]);
    });
});

/**
 * @function getWordsArrayFromString
 * @description Tests the positive and negative test cases of the getWordsArrayFromString
 * @date 2023/04/21
 */
describe(tst_con.cgetWordsArrayFromString, () => {
    /**
    * @function getWordsArrayFromString_validDataString
    * @description Tests the business rules function getWordsArrayFromString with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cgetWordsArrayFromString_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld]);
    });

    /**
    * @function getWordsArrayFromString_inValidDataInputDataString
    * @description Tests the business rules function getWordsArrayFromString with a invalid string data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cgetWordsArrayFromString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe();
    });

    /**
    * @function getWordsArrayFromString_inValidDataInputMetaDataString
    * @description Tests the business rules function getWordsArrayFromString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cgetWordsArrayFromString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld]);
    });

    /**
    * @function getWordsArrayFromString_inValidInputDataBoolean
    * @description Tests the business rules function getWordsArrayFromString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cgetWordsArrayFromString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordArrayParsing.getWordsArrayFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe();
    });
});

/**
 * @function recombineStringArrayWithSpaces
 * @description Tests the positive and negative test cases of the recombineStringArrayWithSpaces
 * @date 2023/04/21
 */
describe(tst_con.crecombineStringArrayWithSpaces, () => {
    /**
    * @function recombineStringArrayWithSpaces_validDataString
    * @description Tests the business rules function recombineStringArrayWithSpaces with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cSpace + wrd.cWorld + bas.cSpace + wrd.cHello + bas.cSpace + wrd.cWorld);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidDataInputMetaDataString
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cSpace + wrd.cWorld + bas.cSpace + wrd.cHello + bas.cSpace + wrd.cWorld);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidInputDataBoolean
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidInputMetaDataInteger
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(num.c1 + bas.cSpace + num.c2 + bas.cSpace + num.c3 + bas.cSpace + num.c4 + bas.cSpace + num.c5);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidInputMetaDataBoolean
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(num.c1 + bas.cSpace + num.c2 + bas.cSpace + num.c3 + bas.cSpace + num.c4 + bas.cSpace + num.c5);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidInputDataUndefined
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function recombineStringArrayWithSpaces_inValidInputDataNaN
    * @description Tests the business rules function recombineStringArrayWithSpaces with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.crecombineStringArrayWithSpaces_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
});

/**
 * @function convertArrayToCamelCaseString
 * @description Tests the positive and negative test cases of the convertArrayToCamelCaseString
 * @date 2023/04/21
 */
describe(tst_con.cconvertArrayToCamelCaseString, () => {
    /**
    * @function convertArrayToCamelCaseString_validDataString
    * @description Tests the business rules function convertArrayToCamelCaseString with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertArrayToCamelCaseString_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld);
    });

    /**
    * @function convertArrayToCamelCaseString_inValidDataInputMetaDataString
    * @description Tests the business rules function convertArrayToCamelCaseString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertArrayToCamelCaseString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld + wrd.cHello + wrd.cWorld);
    });

    /**
    * @function convertArrayToCamelCaseString_inValidInputDataBoolean
    * @description Tests the business rules function convertArrayToCamelCaseString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe();
    });

    /**
    * @function convertArrayToCamelCaseString_inValidInputDataUndefined
    * @description Tests the business rules function convertArrayToCamelCaseString with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe();
    });

    /**
    * @function convertArrayToCamelCaseString_inValidInputDataNaN
    * @description Tests the business rules function convertArrayToCamelCaseString with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cconvertArrayToCamelCaseString_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = wordArrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe();
    });
});

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Tests the positive and negative test cases of the doesArrayContainLowerCaseConsolidatedString
 * @date 2023/04/21
 */
describe(tst_con.cdoesArrayContainLowerCaseConsolidatedString, () => {
    /**
    * @function doesArrayContainLowerCaseConsolidatedString_validDataString
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid string data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = wrd.cBoolean;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function doesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN
    * @description Tests the business rules function doesArrayContainLowerCaseConsolidatedString with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = wordArrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
});

/**
 * @function ascertainMatchingElements
 * @description Tests the positive and negative test cases of the ascertainMatchingElements
 * @date 2023/04/21
 */
describe(tst_con.cascertainMatchingElements, () => {
    /**
    * @function ascertainMatchingElements_validDataString
    * @description Tests the business rules function ascertainMatchingElements with a valid data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });
    
    /**
    * @function ascertainMatchingElements_inValidDataInputDataString
    * @description Tests the business rules function ascertainMatchingElements with a invalid string data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidDataInputMetaDataString
    * @description Tests the business rules function ascertainMatchingElements with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputDataInteger
    * @description Tests the business rules function ascertainMatchingElements with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputDataBoolean
    * @description Tests the business rules function ascertainMatchingElements with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputMetaDataInteger
    * @description Tests the business rules function ascertainMatchingElements with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputMetaDataBoolean
    * @description Tests the business rules function ascertainMatchingElements with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputDataUndefined
    * @description Tests the business rules function ascertainMatchingElements with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputDataNaN
    * @description Tests the business rules function ascertainMatchingElements with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputMetaDataUndefined
    * @description Tests the business rules function ascertainMatchingElements with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = undefined;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function ascertainMatchingElements_inValidInputMetaDataNaN
    * @description Tests the business rules function ascertainMatchingElements with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/21
    */
    test(tst_con.cascertainMatchingElements_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = NaN;

        // Act
        let returnData = wordArrayParsing.ascertainMatchingElements(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});