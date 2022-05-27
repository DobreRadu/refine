import React from "react";

import { Tooltip, TooltipProps, SvgIconProps } from "@mui/material";
import { CheckOutlined, CloseOutlined } from "@mui/icons-material";

import { FieldProps } from "src/interfaces/field";

type AbstractTooltipProps = Omit<TooltipProps, "title" | "children"> & {
    children?: React.ReactElement;
    title?: NonNullable<React.ReactNode>;
};

export type BooleanFieldProps = FieldProps<unknown> &
    AbstractTooltipProps & {
        valueLabelTrue?: string;
        valueLabelFalse?: string;
        trueIcon?: React.FC | object;
        falseIcon?: React.FC | object;
        svgIconProps?: SvgIconProps;
    };

/**
 * This field is used to display boolean values. It uses the {@link https://mui.com/material-ui/react-tooltip/#main-content `<Tooltip>`} values from Materila UI.
 *
 */
export const BooleanField: React.FC<BooleanFieldProps> = ({
    value,
    valueLabelTrue = "true",
    valueLabelFalse = "false",
    trueIcon,
    falseIcon,
    svgIconProps,
    ...rest
}) => {
    return (
        <Tooltip {...rest} title={value ? valueLabelTrue : valueLabelFalse}>
            {value ? (
                <span>{trueIcon ?? <CheckOutlined {...svgIconProps} />}</span>
            ) : (
                <span>{falseIcon ?? <CloseOutlined {...svgIconProps} />}</span>
            )}
        </Tooltip>
    );
};
