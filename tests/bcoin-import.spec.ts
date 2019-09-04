import {HDPrivateKey} from "bcoin";

describe('import bcoin as javascript module', function () {
    it('should allow to use the code', function () {

        let key = HDPrivateKey.generate();

        expect(key).not.toBeUndefined();
    });
});
