// @target: es5
// @lib: es5,es2015.promise
// @module: commonjs
// @filename: task.ts
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
export class Task extends Promise {
}
class Test {
    example() {
        return _async_to_generator(function*() {
            return;
        })();
    }
}
