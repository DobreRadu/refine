# @pankod/refine-strapi-graphql

## 4.1.0

### Minor Changes

-   Upgraded `grapql-request` version in graphql data provider packages.

    Now the `graphql-request` and `qql-query-builder` packages are exported in these packages.

    ```diff
    - import dataProvider from "@pankod/refine-strapi-graphql";
    - import { GraphQLClient } from "graphql-request";
    - import * as qqlQueryBuilder from "gql-query-builder";
    + import dataProvider, { GraphQLClient, qqlQueryBuilder } from "@pankod/refine-strapi-graphql";
    ```

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-core@3.38.2

## 4.0.0

### Major Changes

-   [#2113](https://github.com/pankod/refine/pull/2113) [`c2fb7ac0e9`](https://github.com/pankod/refine/commit/c2fb7ac0e9b5871de76aa975b2a196ab39fa7a6b) Thanks [@omeraplak](https://github.com/omeraplak)! - Upgraded `grapql-request` version in graphql data provider packages.

    Now the `graphql-request` and `qql-query-builder` packages are exported in these packages.

    ```diff
    - import dataProvider from "@pankod/refine-strapi-graphql";
    - import { GraphQLClient } from "graphql-request";
    - import * as qqlQueryBuilder from "gql-query-builder";
    + import dataProvider, { GraphQLClient, qqlQueryBuilder } from "@pankod/refine-strapi-graphql";
    ```

### Patch Changes

-   Updated dependencies [[`ee8e8bbd6c`](https://github.com/pankod/refine/commit/ee8e8bbd6cf6ff2ab1a87883e4030205dedb16ea)]:
    -   @pankod/refine-core@3.38.1

## 3.25.8

### Patch Changes

-   Updated pagination parameters default values and added `hasPagination` property to `getList` method of the data providers.

    **Implementation**

    Updated the `getList` method accordingly to the changes in the `useTable` and `useList` of `@pankod/refine-core`. `hasPagination` is used to disable pagination (defaults to `true`)

    **Use Cases**

    For some resources, there might be no support for pagination or users might want to see all of the data without any pagination, prior to these changes this was not supported in **refine** data providers.

-   Updated dependencies []:
    -   @pankod/refine-core@3.36.0

## 3.25.7

### Patch Changes

-   [#2050](https://github.com/pankod/refine/pull/2050) [`635cfe9fdb`](https://github.com/pankod/refine/commit/635cfe9fdbfe5940b950ae99c1f0b686c78bb8e5) Thanks [@ozkalai](https://github.com/ozkalai)! - Updated pagination parameters default values and added `hasPagination` property to `getList` method of the data providers.

    **Implementation**

    Updated the `getList` method accordingly to the changes in the `useTable` and `useList` of `@pankod/refine-core`. `hasPagination` is used to disable pagination (defaults to `true`)

    **Use Cases**

    For some resources, there might be no support for pagination or users might want to see all of the data without any pagination, prior to these changes this was not supported in **refine** data providers.

-   Updated dependencies [[`ecde34a9b3`](https://github.com/pankod/refine/commit/ecde34a9b38ef5667fa863f9ebb9dcb1cfff1651), [`635cfe9fdb`](https://github.com/pankod/refine/commit/635cfe9fdbfe5940b950ae99c1f0b686c78bb8e5)]:
    -   @pankod/refine-core@3.35.0

## 3.25.6

### Patch Changes

-   Added `graphql-request` dependency to peerDependencies

## 3.25.5

### Patch Changes

-   [#1930](https://github.com/pankod/refine/pull/1930) [`04572f5085`](https://github.com/pankod/refine/commit/04572f5085f024218bd011c388c0dd06e4c4fd55) Thanks [@omeraplak](https://github.com/omeraplak)! - Added `graphql-request` dependency to peerDependencies

## 3.25.4

### Patch Changes

-   Updated axios version (0.21.4 to 0.26.1). In this version, the way of sending headers has changed as follows.

    ```
    // old v0.21.4
    axiosInstance.defaults.headers = { Authorization: `Bearer ${data.jwt}` };

    // new v0.26.1
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
    ```

-   Updated dependencies []:
    -   @pankod/refine-core@3.29.0

## 3.25.3

### Patch Changes

-   Updated axios version (0.21.4 to 0.26.1). In this version, the way of sending headers has changed as follows.

    ```
    // old v0.21.4
    axiosInstance.defaults.headers = { Authorization: `Bearer ${data.jwt}` };

    // new v0.26.1
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
    ```

-   Updated dependencies []:
    -   @pankod/refine-core@3.28.0

## 3.25.2

### Patch Changes

-   Updated axios version (0.21.4 to 0.26.1). In this version, the way of sending headers has changed as follows.

    ```
    // old v0.21.4
    axiosInstance.defaults.headers = { Authorization: `Bearer ${data.jwt}` };

    // new v0.26.1
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
    ```

-   Updated dependencies []:
    -   @pankod/refine-core@3.27.0

## 3.25.1

### Patch Changes

-   [#1899](https://github.com/pankod/refine/pull/1899) [`fbfea418a0`](https://github.com/pankod/refine/commit/fbfea418a024a527a2b432c634f46a96d4f70d88) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Updated axios version (0.21.4 to 0.26.1). In this version, the way of sending headers has changed as follows.

    ```
    // old v0.21.4
    axiosInstance.defaults.headers = { Authorization: `Bearer ${data.jwt}` };

    // new v0.26.1
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
    ```

-   Updated dependencies [[`2ba2a96fd2`](https://github.com/pankod/refine/commit/2ba2a96fd24aa733c355ac9ef4c99b7d48115746)]:
    -   @pankod/refine-core@3.26.0

## 3.22.2

### Patch Changes

-   Updated dependencies [[`2deb19babf`](https://github.com/pankod/refine/commit/2deb19babfc6db5b00b111ec29aa5ece4c371bbc)]:
    -   @pankod/refine-core@3.23.2
