import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';

export default function BookDetailsPage() {
    const { id } = useParams();

    // Placeholder data - in a real app, fetch based on ID
    const book = {
        id: id,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0743273565',
        published: '1925',
        category: 'Fiction',
        status: 'Available',
        description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
        cover: null,
        history: [
            { user: 'Alice Johnson', date: '2023-11-15', action: 'Returned' },
            { user: 'Bob Smith', date: '2023-10-01', action: 'Borrowed' },
        ]
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link to="/books" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Books
            </Link>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Cover Image */}
                <div className="md:col-span-1">
                    <div className="aspect-[2/3] bg-muted rounded-2xl shadow-lg border border-border overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                            <BookOpen className="w-20 h-20 text-muted-foreground/30" />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>

                {/* Details */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                {book.category}
                            </span>
                            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${book.status === 'Available'
                                    ? 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-900'
                                    : 'bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-900'
                                }`}>
                                {book.status === 'Available' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                {book.status}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">{book.title}</h1>
                        <p className="text-xl text-muted-foreground mt-2">{book.author}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-border">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">ISBN</p>
                            <p className="font-medium">{book.isbn}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Published</p>
                            <p className="font-medium">{book.published}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Pages</p>
                            <p className="font-medium">218</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Rating</p>
                            <p className="font-medium">4.8/5.0</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-primary text-primary-foreground h-12 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 active:scale-95 flex items-center justify-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Borrow Book
                        </button>
                        <button className="flex-1 bg-secondary text-secondary-foreground h-12 rounded-xl font-medium hover:bg-secondary/80 transition-colors border border-border flex items-center justify-center gap-2">
                            <Clock className="w-5 h-5" />
                            Reservation History
                        </button>
                    </div>
                </div>
            </div>

            {/* Helper Content (e.g. Recent Activity for this book) */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Borrowing History</h3>
                <div className="space-y-4">
                    {book.history.map((record, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                    <User className="w-4 h-4 text-gray-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{record.user}</p>
                                    <p className="text-xs text-muted-foreground">{record.action}</p>
                                </div>
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="w-4 h-4 mr-2" />
                                {record.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
