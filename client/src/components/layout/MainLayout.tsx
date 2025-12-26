import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    Menu,
    X,
    Search,
    Bell
} from 'lucide-react';

// Fallback for cn if @/lib/utils doesn't exist yet (I'll implement it inline to be safe or create a utils file)
function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Books', href: '/books', icon: BookOpen },
        { name: 'Members', href: '/members', icon: Users },
        { name: 'Settings', href: '/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex font-sans">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={classNames(
                    "fixed top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static shadow-xl",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-border">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        Library Smart
                    </h1>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden text-muted-foreground hover:text-foreground"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon className={classNames("w-5 h-5", isActive ? "animate-pulse" : "group-hover:scale-110 transition-transform")} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-muted/50 rounded-xl border border-border/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                            JD
                        </div>
                        <div>
                            <p className="text-sm font-semibold">John Doe</p>
                            <p className="text-xs text-muted-foreground">Librarian</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-30 px-4 flex items-center justify-between">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 text-muted-foreground hover:bg-muted rounded-lg"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="hidden md:flex items-center gap-4 bg-muted/50 px-4 py-2 rounded-full border border-border/50 flex-1 max-w-md mx-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search books, authors, ISBN..."
                            className="bg-transparent border-none focus:outline-none text-sm w-full placeholder:text-muted-foreground/70"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-muted-foreground hover:bg-muted rounded-full relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-y-auto bg-background/50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
