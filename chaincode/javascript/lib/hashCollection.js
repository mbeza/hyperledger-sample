'use strict';

const { Contract } = require('fabric-contract-api');

class HashCollection extends Contract {

    async InitLedger(ctx) {
        const firstRecord = {
            ID: '1',
            Hash: 'b11823112c121321d21e213f121a12',
        };
        await ctx.stub.putState(firstRecord.ID, Buffer.from(JSON.stringify(firstRecord)));        
    }

    async AddRecord(ctx, id, hash) {
        const record = {
            ID: id,
            Hash: hash,
        };
        return ctx.stub.putState(id, Buffer.from(JSON.stringify(record)));
    }

    async ReadRecord(ctx, id) {
        const recordInJSON = await ctx.stub.getState(id); // get the asset from chaincode state
        if (!recordInJSON || recordInJSON.length === 0) {
            throw new Error(`The record ${id} does not exist`);
        }
        return recordInJSON.toString();
    }

    async AssetExists(ctx, id) {
        const recordInJSON = await ctx.stub.getState(id);
        return recordInJSON && recordInJSON.length > 0;
    }


    async GetAllRecords(ctx) {
        const allResults = [];
        // range query with empty string for startKey and endKey does an open-ended query of all assets in the chaincode namespace.
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: result.value.key, Record: record });
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }


}

module.exports = HashCollection;
