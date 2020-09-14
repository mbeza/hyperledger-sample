/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const hashCollection = require('./lib/hashCollection');

module.exports.HashCollection = hashCollection;
module.exports.contracts = [hashCollection];
