import { RcFile, UploadFile } from "antd/lib/upload/interface";
import { act } from "react-dom/test-utils";
import { notification } from "antd";
import { renderHook } from "@testing-library/react-hooks";
import { TestWrapper, MockJSONServer } from "@test";

import { useImport } from ".";

const file = new File(
    [
        `"id","title","createdAt","updatedAt"
"35ad97dd-9379-480a-b6ac-6fc9c13e9224","Viral Strategist Local","2021-04-09T12:03:23.933Z","2021-04-09T12:03:23.933Z"
"9a428977-1b03-4c3e-8cdd-1e4e2813528a","Concrete Soap Neural","2021-04-09T12:03:23.835Z","2021-04-09T12:03:23.835Z"
"1a428977-1b03-4c3e-8cdd-1e4e281e9224","Strategist Soap Viral","2021-03-09T12:12:23.933Z","2021-03-09T12:12:23.933Z"`,
    ],
    "data.csv",
    { type: "text/csv" },
);

afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
});

describe("useImport hook", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    const notificationOpenSpy = jest.spyOn(notification, "open");
    const notificationCloseSpy = jest.spyOn(notification, "close");

    it("should return false from uploadProps.beforeUpload callback", async () => {
        const { result } = renderHook(
            () =>
                useImport({
                    resourceName: "tests",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        const beforeUploadResult = result.current.uploadProps.beforeUpload?.(
            file as unknown as RcFile,
            [],
        );

        expect(beforeUploadResult).toBe(false);
    });

    it("should open notification", async () => {
        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: 1,
                    resourceName: "posts",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        await act(async () => {
            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.advanceTimersToNextTimer(1);
        });

        expect(notificationOpenSpy).toBeCalled();
        expect(notificationCloseSpy).toBeCalled();
    });
});
