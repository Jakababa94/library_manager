import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, BookOpen, MoreVertical } from 'lucide-react';

export default function BooksPage() {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    // Placeholder data
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', status: 'Available', cover: null },
        { id: 2, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', status: 'Borrowed', cover: null },
        { id: 3, title: '1984', author: 'George Orwell', category: 'Fiction', status: 'Available', cover: null },
        { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', status: 'Available', cover: null },
        { id: 5, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', status: 'Borrowed', cover: null },
        { id: 6, title: 'Design Patterns', author: 'Gang of Four', category: 'Technology', status: 'Available', cover: null },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Books</h1>
                    <p className="text-muted-foreground mt-1">Manage and browse your library collection.</p>
                </div>
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                    <Plus className="w-4 h-4" />
                    <span>Add New Book</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-xl border border-border shadow-sm">
                <div className="relative flex-1 w-full bg-muted/50 rounded-lg border border-border/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN..."
                        className="w-full pl-9 pr-4 py-2 bg-transparent border-none focus:outline-none text-sm placeholder:text-muted-foreground/70"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                    <div className="h-6 w-px bg-border mx-2" />
                    <div className="flex bg-muted p-1 rounded-lg">
                        <button
                            onClick={() => setView('grid')}
                            className={`p-1.5 rounded-md transition-all ${view === 'grid' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                            </div>
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <div className="w-4 h-4 flex flex-col gap-1 justify-center">
                                <div className="bg-current h-0.5 w-full rounded-full" />
                                <div className="bg-current h-0.5 w-full rounded-full" />
                                <div className="bg-current h-0.5 w-full rounded-full" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid View */}
            {view === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {books.map((book, index) => (
                        <div
                            key={book.id}
                            className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
                                    <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Link to={`/books/${book.id}`} className="block w-full text-center bg-white text-black py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                {/* Book Cover Placeholder or Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                                    <BookOpen className="w-12 h-12 text-muted-foreground/30" />
                                </div>

                                {/* Status Badge */}
                                <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold backdrop-blur-md border border-white/10 shadow-sm z-20 ${book.status === 'Available' ? 'bg-green-500/90 text-white' : 'bg-orange-500/90 text-white'
                                    }`}>
                                    {book.status}
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-xs font-medium text-primary uppercase tracking-wider">{book.category}</p>
                                </div>
                                <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* List View (Optional/Todo) */}
            {view === 'list' && (
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Author</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {books.map((book) => (
                                <tr key={book.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4 font-medium">{book.title}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{book.author}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                            {book.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${book.status === 'Available' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${book.status === 'Available' ? 'bg-green-500' : 'bg-orange-500'}`} />
                                            {book.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-muted-foreground hover:text-foreground p-1">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
