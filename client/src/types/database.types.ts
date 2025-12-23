export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    first_name: string | null
                    last_name: string | null
                    email: string | null
                    role: 'admin' | 'member'
                    created_at: string
                }
                Insert: {
                    id: string
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    role?: 'admin' | 'member'
                    created_at?: string
                }
                Update: {
                    id?: string
                    first_name?: string | null
                    last_name?: string | null
                    email?: string | null
                    role?: 'admin' | 'member'
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "profiles_id_fkey"
                        columns: ["id"]
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            books: {
                Row: {
                    id: string
                    title: string
                    author: string
                    isbn: string | null
                    genre: string | null
                    publication_year: number | null
                    description: string | null
                    cover_url: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    author: string
                    isbn?: string | null
                    genre?: string | null
                    publication_year?: number | null
                    description?: string | null
                    cover_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    author?: string
                    isbn?: string | null
                    genre?: string | null
                    publication_year?: number | null
                    description?: string | null
                    cover_url?: string | null
                    created_at?: string
                }
                Relationships: []
            }
            book_copies: {
                Row: {
                    id: string
                    book_id: string
                    status: 'available' | 'borrowed' | 'lost' | 'maintenance'
                    condition: 'new' | 'good' | 'fair' | 'poor' | null
                    added_at: string
                }
                Insert: {
                    id?: string
                    book_id: string
                    status?: 'available' | 'borrowed' | 'lost' | 'maintenance'
                    condition?: 'new' | 'good' | 'fair' | 'poor' | null
                    added_at?: string
                }
                Update: {
                    id?: string
                    book_id?: string
                    status?: 'available' | 'borrowed' | 'lost' | 'maintenance'
                    condition?: 'new' | 'good' | 'fair' | 'poor' | null
                    added_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "book_copies_book_id_fkey"
                        columns: ["book_id"]
                        referencedRelation: "books"
                        referencedColumns: ["id"]
                    }
                ]
            }
            loans: {
                Row: {
                    id: string
                    user_id: string
                    copy_id: string
                    loan_date: string
                    due_date: string
                    return_date: string | null
                    status: 'active' | 'returned' | 'overdue'
                }
                Insert: {
                    id?: string
                    user_id: string
                    copy_id: string
                    loan_date?: string
                    due_date: string
                    return_date?: string | null
                    status?: 'active' | 'returned' | 'overdue'
                }
                Update: {
                    id?: string
                    user_id?: string
                    copy_id?: string
                    loan_date?: string
                    due_date?: string
                    return_date?: string | null
                    status?: 'active' | 'returned' | 'overdue'
                }
                Relationships: [
                    {
                        foreignKeyName: "loans_user_id_fkey"
                        columns: ["user_id"]
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "loans_copy_id_fkey"
                        columns: ["copy_id"]
                        referencedRelation: "book_copies"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
