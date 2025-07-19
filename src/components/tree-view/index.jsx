import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ Menus = [] }) {
  return <div className="tree-view-container">
    <MenuList list={Menus} />
  </div>;
}
