/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("MD5", () =>
{
    it("should get MD5 for 'hello world'", () => expect(Md5.computeHash("hello world")).toBe("5eb63bbbe01eeed093cb22bb8f5acdc3"));

    it("should get MD5 for 'password1234admin'", () => expect(Md5.computeHash("password1234admin")).toBe("d43a469e1e7440e49149df5b2b1206fe"));
});