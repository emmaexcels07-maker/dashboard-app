import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="navbar-title">Dashboard</h1>

                <div className="navbar-actions">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>

                    <div className="user-info">
                        <span className="user-email">{user?.email || "User"}</span>
                    </div>

                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

