/*
 * Copyright (C) 2017-2018 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { assert } from "chai";
import { PerformanceTimer } from "../lib/PerformanceTimer";

describe("PerformanceTimer", () => {
    it("#now", () => {
        const t0 = PerformanceTimer.now();
        assert.isNumber(t0);
        assert.isAbove(t0, 0);

        setTimeout(() => {
            const t1 = PerformanceTimer.now();
            assert.isNumber(t1);
            assert.isAbove(t1, t0);
        }, 2);
    });
});
