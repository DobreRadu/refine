import { renderHook } from "@testing-library/react-hooks";

import { TestWrapper } from "@test";
import { useLog } from ".";
import { LogParams } from "../../../interfaces";

const auditLogProviderCreateMock = jest.fn();
const auditLogProviderUpdateMock = jest.fn();
const auditLogProviderGetMock = jest.fn();

describe("useLog Hook", () => {
    beforeEach(() => {
        auditLogProviderCreateMock.mockReset();
        auditLogProviderUpdateMock.mockReset();
        auditLogProviderGetMock.mockReset();
    });

    describe("log callback", () => {
        it("should called logEvent empty permission", async () => {
            const { result, waitForNextUpdate } = renderHook(() => useLog(), {
                wrapper: TestWrapper({
                    resources: [
                        {
                            name: "posts",
                        },
                    ],
                    auditLogProvider: {
                        create: auditLogProviderCreateMock,
                    },
                }),
            });

            const { log } = result.current;

            const logEventPayload: LogParams = {
                action: "create",
                resource: "posts",
                data: { id: 1, title: "title" },
                meta: {
                    id: 1,
                },
                author: undefined,
            };

            log.mutate(logEventPayload);

            await waitForNextUpdate();

            expect(auditLogProviderCreateMock).toBeCalledWith(logEventPayload);
            expect(auditLogProviderCreateMock).toBeCalledTimes(1);
        });

        it("should not called logEvent if no includes permissions", async () => {
            const { result, waitForNextUpdate } = renderHook(() => useLog(), {
                wrapper: TestWrapper({
                    resources: [
                        {
                            name: "posts",
                            options: { auditLog: { permissions: ["create"] } },
                        },
                    ],
                    auditLogProvider: {
                        get: auditLogProviderGetMock,
                    },
                }),
            });

            const { log } = result.current;

            const logEventPayload: LogParams = {
                action: "update",
                resource: "posts",
                data: { id: 1, title: "title" },
                meta: {
                    id: 1,
                },
            };

            log.mutate(logEventPayload);

            await waitForNextUpdate();

            expect(auditLogProviderGetMock).not.toBeCalled();
        });

        it("should called logEvent if exist auditLogPermissions", async () => {
            const { result, waitForNextUpdate } = renderHook(() => useLog(), {
                wrapper: TestWrapper({
                    resources: [
                        {
                            name: "posts",
                            options: { auditLog: { permissions: ["update"] } },
                        },
                    ],
                    auditLogProvider: {
                        create: auditLogProviderCreateMock,
                    },
                }),
            });

            const { log } = result.current;

            const logEventPayload: LogParams = {
                action: "update",
                resource: "posts",
                data: { id: 1, title: "title" },
                meta: {
                    id: 1,
                },
            };

            log.mutate(logEventPayload);

            await waitForNextUpdate();

            expect(auditLogProviderCreateMock).toBeCalled();
        });
    });

    describe("rename mutation", () => {
        it("succeed rename", async () => {
            const { result, waitForNextUpdate } = renderHook(() => useLog(), {
                wrapper: TestWrapper({
                    auditLogProvider: {
                        update: auditLogProviderUpdateMock,
                    },
                }),
            });
            const { rename } = result.current;
            const { mutate } = rename;

            mutate({ id: 1, name: "test name" });

            await waitForNextUpdate();

            expect(auditLogProviderUpdateMock).toBeCalledWith({
                id: 1,
                name: "test name",
            });
            expect(auditLogProviderUpdateMock).toBeCalledTimes(1);
        });
    });
});
