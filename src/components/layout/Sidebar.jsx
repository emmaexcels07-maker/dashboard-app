import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { label: "Dashboard", path: "/dashboard", icon: "📊" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="logo">DashApp</h2>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <p className="version">v1.0.0</p>
            </div>
        </aside>
    );
};

export default Sidebar;
