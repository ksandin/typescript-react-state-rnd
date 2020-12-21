import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useRouter } from "react-router5";
import { RootRouteConfigNode, useRootRouteConfig } from "./RootRouteConfig";

export type MenuProps = {
  items: Record<string, RootRouteConfigNode[]>;
  onItemSelected?: () => void;
};

export const Menu: React.FC<MenuProps> = ({
  items,
  onItemSelected = () => {},
}) => {
  const router = useRouter();
  const { route } = useRootRouteConfig();
  return (
    <>
      {Object.getOwnPropertyNames(items).map((appName) => (
        <React.Fragment key={appName}>
          <ListItem>
            <ListItemText primary={appName} />
          </ListItem>
          <Divider />
          <List>
            {items[appName].map(
              ({ name: itemName, title: itemTitle, icon: Icon }, index) => {
                const isSelected = route && route.name === itemName;
                return (
                  <ListItem
                    button
                    key={index}
                    selected={isSelected}
                    onClick={() => {
                      router.navigate(itemName);
                      onItemSelected();
                    }}
                  >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={itemTitle} />
                  </ListItem>
                );
              }
            )}
          </List>
        </React.Fragment>
      ))}
    </>
  );
};
