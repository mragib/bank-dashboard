const NavbarItem = ({ item, isActive, onClick }) => {
  return (
    <a
      key={item.id}
      href="#"
      className={`sidebar-menu-item ${isActive ? "active" : ""}`}
      onClick={() => onClick(item.id)}
    >
      <img src={item.icon || `/assets/${item.id}.svg`} alt="Icon" />
      <span>{item.name}</span>
    </a>
  );
};

export default NavbarItem;
