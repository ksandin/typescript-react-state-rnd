import styled from "styled-components";
import { PlayCircleFilled } from "@material-ui/icons";
import { SvgIconProps } from "@material-ui/core";

export type PlayButtonProps = SvgIconProps;

export const PlayButton = styled(PlayCircleFilled)`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
