 import {
     minus,
     add,
     multi
 } from "./math";
 test('测试加法 3+7 ', function () {
     expect(add(3, 7)).toBe(10);
 })
 test('测试减法 3+7 ', function () {
     expect(minus(3, 7)).toBe(-4);
 })
 test('测试乘法 3+7 ', function () {
     expect(multi(3, 7)).toBe(21);
 })

