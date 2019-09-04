import bcoin from "bcoin";

describe('import bcoin as javascript module', function () {
    it('should allow to use the code', function () {

        let lockFlags = bcoin.blockchain.common.lockFlags;

        expect(lockFlags.MANDATORY_LOCKTIME_FLAGS).toEqual(0);
    });
});
