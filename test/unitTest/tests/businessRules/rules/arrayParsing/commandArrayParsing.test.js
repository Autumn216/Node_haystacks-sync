'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file commandArrayParsing.test.js
 * @module commandArrayParsing.test
 * @description Unit tests for the commandArrayParsing.js
 * @requires module:commandArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/19
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import commandArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/commandArrayParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from '../../../constants/test.constants.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/commandArrayParsing.js';

// External imports
import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num, biz, cfg } = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function solveLehmerCode
 * @description Tests the positive and negative test cases of the solveLehmerCode function.
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.csolveLehmerCode, () => {
    /**
    * @function solveLehmerCode_validDataString
    * @description Tests the business rules function solveLehmerCode with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_validDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_01;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function solveLehmerCode_inValidDataInputDataString
    * @description Tests the business rules function solveLehmerCode with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function solveLehmerCode_inValidDataInputMetaDataString
    * @description Tests the business rules function solveLehmerCode with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_01;
        let inputMetaData = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function solveLehmerCode_inValidInputDataInteger
    * @description Tests the business rules function solveLehmerCode with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function solveLehmerCode_inValidInputDataBoolean
    * @description Tests the business rules function solveLehmerCode with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function solveLehmerCode_inValidInputDataUndefined
    * @description Tests the business rules function solveLehmerCode with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function solveLehmerCode_inValidInputDataNaN
    * @description Tests the business rules function solveLehmerCode with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csolveLehmerCode_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = commandArrayParsing.solveLehmerCode(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function recursiveArrayExpansion
 * @description Tests the positive and negative test cases of the recursiveArrayExpansion function.
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.crecursiveArrayExpansion, () => {
    /**
    * @function recursiveArrayExpansion_validDataString
    * @description Tests the business rules function recursiveArrayExpansion with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_validDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function recursiveArrayExpansion_inValidDataInputDataString
    * @description Tests the business rules function recursiveArrayExpansion with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidDataInputMetaDataString
    * @description Tests the business rules function recursiveArrayExpansion with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputDataInteger
    * @description Tests the business rules function recursiveArrayExpansion with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputDataBoolean
    * @description Tests the business rules function recursiveArrayExpansion with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputMetaDataInteger
    * @description Tests the business rules function recursiveArrayExpansion with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = [1, 2, 3, 4, 5, 6];

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function recursiveArrayExpansion_inValidInputMetaDataBoolean
    * @description Tests the business rules function recursiveArrayExpansion with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = [false, true, true];

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function recursiveArrayExpansion_inValidInputDataUndefined
    * @description Tests the business rules function recursiveArrayExpansion with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputDataNaN
    * @description Tests the business rules function recursiveArrayExpansion with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputMetaDataUndefined
    * @description Tests the business rules function recursiveArrayExpansion with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = undefined;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function recursiveArrayExpansion_inValidInputMetaDataNaN
    * @description Tests the business rules function recursiveArrayExpansion with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.crecursiveArrayExpansion_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_02;
        let inputMetaData = NaN;

        // Act
        let returnData = commandArrayParsing.recursiveArrayExpansion(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });
});

/**
 * @function getLehmerCodeValue
 * @description Tests the positive and negative test cases of the getLehmerCodeValue function.
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.cgetLehmerCodeValue, () => {
    /**
    * @function getLehmerCodeValue_validDataString
    * @description Tests the business rules function getLehmerCodeValue with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_validDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_01;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getLehmerCodeValue_inValidDataInputMetaDataString
    * @description Tests the business rules function getLehmerCodeValue with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.IntegerArray_01;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getLehmerCodeValue_inValidInputDataInteger
    * @description Tests the business rules function getLehmerCodeValue with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function getLehmerCodeValue_inValidInputDataBoolean
    * @description Tests the business rules function getLehmerCodeValue with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function getLehmerCodeValue_inValidInputDataUndefined
    * @description Tests the business rules function getLehmerCodeValue with a invalid undefiend data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function getLehmerCodeValue_inValidInputDataNaN
    * @description Tests the business rules function getLehmerCodeValue with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLehmerCodeValue_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = commandArrayParsing.getLehmerCodeValue(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function generateCommandAliases
 * @description Tests the positive and negative test cases of the generateCommandAliases function.
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.cgenerateCommandAliases, () => {
    /**
    * @function generateCommandAliases_validDataString
    * @description Tests the business rules function getLehmerCodeValue with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringObject_01;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function generateCommandAliases_inValidDataInputDataString
    * @description Tests the business rules function getLehmerCodeValue with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function generateCommandAliases_inValidDataInputMetaDataString
    * @description Tests the business rules function getLehmerCodeValue with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringObject_01;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function generateCommandAliases_inValidInputDataInteger
    * @description Tests the business rules function getLehmerCodeValue with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function generateCommandAliases_inValidInputDataBoolean
    * @description Tests the business rules function getLehmerCodeValue with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function generateCommandAliases_inValidInputMetaDataBoolean
    * @description Tests the business rules function getLehmerCodeValue with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = false;

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function generateCommandAliases_inValidInputDataUndefined
    * @description Tests the business rules function getLehmerCodeValue with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function generateCommandAliases_inValidInputDataNaN
    * @description Tests the business rules function getLehmerCodeValue with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgenerateCommandAliases_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsArray_01;

        // Act
        let returnData = commandArrayParsing.generateCommandAliases(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function aggregateCommandArguments
 * @description Tests the positive and negative test cases of the aggregateCommandArguments function.
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.caggregateCommandArguments, () => {
    /**
    * @function aggregateCommandArguments_validDataString
    * @description Tests the business rules function aggregateCommandArguments with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function aggregateCommandArguments_inValidDataInputDataString
    * @description Tests the business rules function aggregateCommandArguments with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function aggregateCommandArguments_inValidDataInputMetaDataString
    * @description Tests the business rules function aggregateCommandArguments with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function aggregateCommandArguments_inValidInputDataInteger
    * @description Tests the business rules function aggregateCommandArguments with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
    
    /**
    * @function aggregateCommandArguments_inValidInputDataBoolean
    * @description Tests the business rules function aggregateCommandArguments with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.IntegerArray_01;

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
    
    /**
    * @function aggregateCommandArguments_inValidInputDataUndefined
    * @description Tests the business rules function aggregateCommandArguments with a invalid undefiend data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
    
    /**
    * @function aggregateCommandArguments_inValidInputDataNaN
    * @description Tests the business rules function aggregateCommandArguments with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.caggregateCommandArguments_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = commandArrayParsing.aggregateCommandArguments(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
});