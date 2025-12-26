import { Book, Users, Calendar, ArrowUpRight, ArrowRight } from 'lucide-react';

export default function HomePage() {
    const stats = [
        { title: 'Total Books', value: '12,450', change: '+12%', icon: Book, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { title: 'Active Members', value: '3,240', change: '+5%', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { title: 'Loans Today', value: '145', change: '+18%', icon: Calendar, color: 'text-green-500', bg: 'bg-green-500/10' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground mt-1">Overview of your library performance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group ease-in-out duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} ring-1 ring-inset ring-black/5`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                                {stat.change}
                                <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                        <p className="text-3xl font-bold mt-1 text-foreground">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">Recent Loans</h2>
                        <button className="text-sm text-primary hover:underline flex items-center gap-1">
                            View all <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                                <div className="w-12 h-16 bg-muted rounded-md shadow-sm group-hover:scale-105 transition-transform origin-bottom-left relative overflow-hidden">
                                    {/* Placeholder for book cover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">The Great Gatsby</h4>
                                    <p className="text-sm text-muted-foreground">Borrowed by <span className="text-foreground">Alice Johnson</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-orange-500">Due in 2 days</p>
                                    <p className="text-xs text-muted-foreground">ID: #492{i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">Popular Categories</h2>
                    </div>
                    <div className="space-y-4">
                        {/* Categories Placeholder */}
                        {['Fiction', 'Science', 'History', 'Technology'].map((cat, i) => (
                            <div key={cat} className="flex items-center justify-between p-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium">{cat}</span>
                                </div>
                                <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${80 - (i * 15)}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
