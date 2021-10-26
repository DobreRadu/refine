import { GetServerSideProps } from "next";
import {
    useTable,
    List,
    Table,
    GetListResponse,
    LayoutWrapper,
    parseTableParams,
} from "@pankod/refine";
import dataProvider from "@pankod/refine-simple-rest";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { IPost } from "src/interfaces";

import { API_URL } from "../../src/constants";

export const UserList: React.FC<{ users: GetListResponse<IPost> }> = ({
    users,
}) => {
    const { tableProps } = useTable<IPost>({
        resource: "users",
        queryOptions: {
            initialData: users,
        },
        syncWithLocation: true,
    });

    return (
        <LayoutWrapper>
            <List title="Users">
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="id" title="ID" sorter />
                    <Table.Column dataIndex="firstName" title="Name" />
                </Table>
            </List>
        </LayoutWrapper>
    );
};

export default UserList;

import { authProvider } from "../../src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return props;
    }

    const { resolvedUrl } = context;
    const index = resolvedUrl.indexOf("?");
    const search = resolvedUrl.slice(index);

    const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } =
        parseTableParams(search);

    const data = await dataProvider(API_URL).getList({
        resource: "users",
        filters: parsedFilters,
        pagination: {
            current: parsedCurrent || 1,
            pageSize: parsedPageSize || 10,
        },
        sort: parsedSorter,
    });

    return {
        props: { users: data },
    };
};
