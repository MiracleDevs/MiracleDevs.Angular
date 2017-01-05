/*!
 * MiracleDevs.Angular v1.0.0 
 * Copyright (c) 2017 Miracle Devs, Inc
 * Licensed under MIT (https://github.com/MiracleDevs/MiracleDevs.Angular/blob/master/LICENSE)
 */

///<reference path="../Imports.ts"/>

describe("File Mime Type", () =>
{
    it("should get mime type of video", () => expect(mimeType.get("video.mp4")).toBe("video/mp4"));

    it("should get mime type of audio", () => expect(mimeType.get("video.mp3")).toBe("audio/mpeg"));

    it("should get mime type of pdf", () => expect(mimeType.get("video.pdf")).toBe("application/pdf"));
});